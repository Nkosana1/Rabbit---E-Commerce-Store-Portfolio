# Backend Environment Variables Template

Copy this template to create your `.env` file in the backend directory.

```env
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
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your-super-secret-refresh-token-key-change-this
JWT_REFRESH_EXPIRE=30d

# Password Reset
PASSWORD_RESET_EXPIRE=3600000

# Email Configuration (for nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=noreply@taskflowpro.com

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Cloudinary Configuration (for file uploads)
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
SESSION_SECRET=your-session-secret-key-change-this-in-production

# Admin Configuration
ADMIN_EMAIL=admin@taskflowpro.com
ADMIN_PASSWORD=Admin@123
```

## Setup Instructions

1. Copy this template to `backend/.env`
2. Replace all placeholder values with your actual configuration
3. For production, use strong, randomly generated secrets
4. Never commit the `.env` file to version control

