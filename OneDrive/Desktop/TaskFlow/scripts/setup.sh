#!/bin/bash

# TaskFlow Pro Setup Script
echo "🚀 Setting up TaskFlow Pro..."

# Create backend .env file
if [ ! -f backend/.env ]; then
  echo "Creating backend/.env file..."
  cat > backend/.env << EOF
# Server Configuration
NODE_ENV=development
PORT=5000
SERVER_URL=http://localhost:5000
CLIENT_URL=http://localhost:5173

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/taskflow-pro
MONGODB_TEST_URI=mongodb://localhost:27017/taskflow-pro-test

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_URL=redis://localhost:6379

# JWT Configuration
JWT_SECRET=$(openssl rand -base64 32)
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=$(openssl rand -base64 32)
JWT_REFRESH_EXPIRE=30d

# Password Reset
PASSWORD_RESET_EXPIRE=3600000

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=noreply@taskflowpro.com

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# File Upload Configuration
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=jpg,jpeg,png,gif,pdf,doc,docx,xls,xlsx,csv,zip

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Socket.io Configuration
SOCKET_CORS_ORIGIN=http://localhost:5173

# Logging
LOG_LEVEL=info
LOG_DIR=./logs

# Session Configuration
SESSION_SECRET=$(openssl rand -base64 32)

# Admin Configuration
ADMIN_EMAIL=admin@taskflowpro.com
ADMIN_PASSWORD=Admin@123
EOF
  echo "✅ Backend .env file created"
else
  echo "⚠️  Backend .env file already exists"
fi

# Create frontend .env file
if [ ! -f frontend/.env ]; then
  echo "Creating frontend/.env file..."
  cat > frontend/.env << EOF
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000

# Environment
VITE_NODE_ENV=development

# Google OAuth
VITE_GOOGLE_CLIENT_ID=your-google-client-id

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=true
VITE_ENABLE_TIME_TRACKING=true

# App Configuration
VITE_APP_NAME=TaskFlow Pro
VITE_APP_VERSION=1.0.0

# PWA Configuration
VITE_PWA_ENABLED=true

# File Upload
VITE_MAX_FILE_SIZE=10485760
EOF
  echo "✅ Frontend .env file created"
else
  echo "⚠️  Frontend .env file already exists"
fi

# Create logs directory
mkdir -p backend/logs
echo "✅ Logs directory created"

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env and frontend/.env with your configuration"
echo "2. Run 'npm run install:all' to install dependencies"
echo "3. Start MongoDB and Redis (or use docker-compose up -d)"
echo "4. Run 'npm run dev' to start development servers"

