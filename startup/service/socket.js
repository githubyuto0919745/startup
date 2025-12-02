const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const db = require('./database.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }});

const PORT = 4001;

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

server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
