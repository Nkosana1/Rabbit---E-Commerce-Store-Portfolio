const redis = require('ioredis');
const logger = require('../utils/logger');

const redisClient = new redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
});

redisClient.on('connect', () => {
  logger.info('Redis client connected');
});

redisClient.on('ready', () => {
  logger.info('Redis client ready');
});

redisClient.on('error', (err) => {
  logger.error(`Redis connection error: ${err.message}`);
});

redisClient.on('close', () => {
  logger.warn('Redis connection closed');
});

redisClient.on('reconnecting', () => {
  logger.info('Redis reconnecting...');
});

// Helper functions for Redis operations
const cache = {
  get: async (key) => {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      logger.error(`Redis get error: ${error.message}`);
      return null;
    }
  },

  set: async (key, value, expiry = 3600) => {
    try {
      await redisClient.setex(key, expiry, JSON.stringify(value));
      return true;
    } catch (error) {
      logger.error(`Redis set error: ${error.message}`);
      return false;
    }
  },

  del: async (key) => {
    try {
      await redisClient.del(key);
      return true;
    } catch (error) {
      logger.error(`Redis delete error: ${error.message}`);
      return false;
    }
  },

  exists: async (key) => {
    try {
      const result = await redisClient.exists(key);
      return result === 1;
    } catch (error) {
      logger.error(`Redis exists error: ${error.message}`);
      return false;
    }
  },
};

const connectRedis = () => {
  // Connection is already established by creating the client
  return redisClient;
};

module.exports = { connectRedis, redisClient, cache };

