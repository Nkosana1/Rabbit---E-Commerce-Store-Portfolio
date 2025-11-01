const logger = require('../utils/logger');
const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');

const socketHandler = async (io, socket) => {
  try {
    // Authenticate socket connection
    const token = socket.handshake.auth.token;
    if (!token) {
      socket.disconnect();
      return;
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    
    if (!user) {
      socket.disconnect();
      return;
    }

    // Store user info in socket
    socket.userId = user._id.toString();
    socket.userName = user.name;

    logger.info(`User ${user.name} connected with socket ${socket.id}`);

    // Join user-specific room
    socket.join(`user:${socket.userId}`);

    // Handle project room joins
    socket.on('join:project', (projectId) => {
      socket.join(`project:${projectId}`);
      logger.info(`User ${socket.userName} joined project ${projectId}`);
    });

    socket.on('leave:project', (projectId) => {
      socket.leave(`project:${projectId}`);
      logger.info(`User ${socket.userName} left project ${projectId}`);
    });

    // Handle task updates
    socket.on('task:update', (data) => {
      socket.to(`project:${data.projectId}`).emit('task:updated', data);
    });

    // Handle comments
    socket.on('comment:new', (data) => {
      socket.to(`project:${data.projectId}`).emit('comment:created', data);
    });

    // Handle chat messages
    socket.on('chat:message', (data) => {
      socket.to(`project:${data.projectId}`).emit('chat:newMessage', data);
    });

    // Handle notifications
    socket.on('notification:read', (notificationId) => {
      // Mark notification as read
      io.to(`user:${socket.userId}`).emit('notification:markedRead', notificationId);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      logger.info(`User ${socket.userName} disconnected`);
    });

    // Handle errors
    socket.on('error', (error) => {
      logger.error(`Socket error for user ${socket.userName}: ${error.message}`);
    });
  } catch (error) {
    logger.error(`Socket connection error: ${error.message}`);
    socket.disconnect();
  }
};

module.exports = socketHandler;

