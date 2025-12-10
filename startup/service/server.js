const { Server } = require('socket.io');
const db = require('./database.js');





function ws(httpServer){


  const allowedOrigins = [
  process.env.FRONTEND_URL, 
  "http://localhost:5173",
  "https://startup.qrcreate24.click"
  
  ];

  const io = new Server(httpServer, { 
    cors: { 
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type']
  },
  });

   io.use(async (socket, next) => {
    try {
      // Example: read token from query or headers
      const token = socket.handshake.auth?.token || socket.handshake.headers['authorization'];
      if (!token) return next(new Error('Unauthorized'));

      // Retrieve user by token from database
      const user = await db.getUserByToken(token.replace('Bearer ', ''));
      if (!user) return next(new Error('Unauthorized'));

      socket.user = user; 
      next();
    } catch (err) {
      next(err);
    }
  });


  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('getGraph', async () => {
      try {

        const email = socket.user.email;
        const profile = await db.getProfile(email);
        const diet = await db.getDietHistory(email);

        if (!profile || diet.length === 0) {
          socket.emit('graphData', { profile: null, intake: null });
          return;
        }

        const latest = diet[diet.length - 1];

        socket.emit('graphData', {
          profile: {
            calories: profile.tdee || 0,
            protein: profile.protein || 0,
            carbs: profile.carbs || 0,
            fats: profile.fats || 0,
          },
          intake: {
            calories: latest.calories,
            protein: latest.protein,
            carbs: latest.carbs,
            fats: latest.fats,
          }
        });
      } catch (err) {
        console.error('WebSocket graph error:', err);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
});


}

module.exports = {ws};
