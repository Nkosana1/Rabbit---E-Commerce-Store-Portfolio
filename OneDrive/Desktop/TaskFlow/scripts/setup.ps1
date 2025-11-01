# TaskFlow Pro Setup Script for Windows PowerShell
Write-Host "🚀 Setting up TaskFlow Pro..." -ForegroundColor Cyan

# Create backend .env file
if (-not (Test-Path "backend\.env")) {
    Write-Host "Creating backend\.env file..." -ForegroundColor Yellow
    
    # Generate random secrets
    $jwtSecret = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
    $refreshSecret = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
    $sessionSecret = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
    
    @"
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
JWT_SECRET=$jwtSecret
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=$refreshSecret
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
SESSION_SECRET=$sessionSecret

# Admin Configuration
ADMIN_EMAIL=admin@taskflowpro.com
ADMIN_PASSWORD=Admin@123
"@ | Out-File -FilePath "backend\.env" -Encoding utf8
    
    Write-Host "✅ Backend .env file created" -ForegroundColor Green
} else {
    Write-Host "⚠️  Backend .env file already exists" -ForegroundColor Yellow
}

# Create frontend .env file
if (-not (Test-Path "frontend\.env")) {
    Write-Host "Creating frontend\.env file..." -ForegroundColor Yellow
    
    @"
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
"@ | Out-File -FilePath "frontend\.env" -Encoding utf8
    
    Write-Host "✅ Frontend .env file created" -ForegroundColor Green
} else {
    Write-Host "⚠️  Frontend .env file already exists" -ForegroundColor Yellow
}

# Create logs directory
if (-not (Test-Path "backend\logs")) {
    New-Item -ItemType Directory -Path "backend\logs" | Out-Null
    Write-Host "✅ Logs directory created" -ForegroundColor Green
}

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit backend\.env and frontend\.env with your configuration"
Write-Host "2. Run 'npm run install:all' to install dependencies"
Write-Host "3. Start MongoDB and Redis (or use docker-compose up -d)"
Write-Host "4. Run 'npm run dev' to start development servers"

