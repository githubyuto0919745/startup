const { Server } = require('socket.io');
const db = require('./database.js');





function ws(httpServer){
  
  // app.use(cors({
  //   origin: "http://localhost:5173",
  //   credentials: true
  // }));

  const allowedOrigins = [
  process.env.FRONTEND_URL, // set in production environment
  "http://localhost:5173"
  ];

  const io = new Server(httpServer, { 
    cors: { 
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type']
  },
  });



  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('getGraph', async (userEmail) => {
      try {
        const profile = await db.getProfile(userEmail);
        const diet = await db.getDietHistory(userEmail);

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
