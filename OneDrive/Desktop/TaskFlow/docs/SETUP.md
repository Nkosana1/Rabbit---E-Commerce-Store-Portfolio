# TaskFlow Pro - Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **MongoDB** >= 6.0 (local installation or MongoDB Atlas account)
- **Redis** >= 7.0 (local installation or Redis cloud service)
- **Git** for version control

## Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd taskflow-pro

# Install all dependencies
npm run install:all
```

### 2. Environment Setup

#### Backend Environment

```bash
cd backend
cp ENV_TEMPLATE.md .env
# Edit .env with your configuration
```

**Required Backend Variables:**
- `MONGODB_URI` - MongoDB connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - Secret key for JWT tokens (use a strong random string)
- `JWT_REFRESH_SECRET` - Secret key for refresh tokens

#### Frontend Environment

```bash
cd frontend
cp ENV_TEMPLATE.md .env
# Edit .env with your configuration
```

**Required Frontend Variables:**
- `VITE_API_URL` - Backend API URL (default: http://localhost:5000/api)

### 3. Database Setup

#### Option A: Docker (Recommended for Development)

```bash
# Start MongoDB and Redis using Docker Compose
docker-compose up -d

# This will start:
# - MongoDB on port 27017
# - Redis on port 6379
```

#### Option B: Local Installation

**MongoDB:**
```bash
# macOS
brew install mongodb-community

# Linux
sudo apt-get install mongodb

# Windows - Download from https://www.mongodb.com/try/download/community
```

**Redis:**
```bash
# macOS
brew install redis

# Linux
sudo apt-get install redis-server

# Windows - Download from https://redis.io/download
```

#### Option C: Cloud Services

- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
- **Redis Cloud**: https://redis.com/try-free/

Update your `.env` files with the cloud service connection strings.

### 4. Run the Application

#### Development Mode (Both Backend and Frontend)

From the root directory:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend development server on http://localhost:5173

#### Run Separately

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## Additional Configuration

### Email Service (Optional)

For email verification and password reset:

1. Create a Gmail app password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"

2. Update `.env`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### Google OAuth (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Update `.env` files with client ID and secret

### Cloudinary (Optional - for File Uploads)

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your cloud name, API key, and API secret
3. Update backend `.env`:
   ```env
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running: `mongod` or `brew services start mongodb-community`
- Check connection string format: `mongodb://localhost:27017/taskflow-pro`
- Verify MongoDB is accessible on port 27017

### Redis Connection Issues

- Ensure Redis is running: `redis-server` or `brew services start redis`
- Check Redis is accessible on port 6379
- Test connection: `redis-cli ping` (should return "PONG")

### Port Already in Use

- Backend default port: 5000
- Frontend default port: 5173
- Change ports in `.env` files if needed

### Module Not Found Errors

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure you're using Node.js >= 18.0.0

## Next Steps

1. Review the [API Documentation](../docs/api/)
2. Check the [Development Guide](../docs/development/)
3. Explore the [Deployment Guide](../docs/deployment/)

## Support

If you encounter any issues:
1. Check the error logs in `backend/logs/`
2. Review the troubleshooting section above
3. Create an issue in the repository

