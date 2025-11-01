# Frontend Environment Variables Template

Copy this template to create your `.env` file in the frontend directory.

```env
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
```

## Setup Instructions

1. Copy this template to `frontend/.env`
2. Replace all placeholder values with your actual configuration
3. Note: Vite requires the `VITE_` prefix for all environment variables
4. Never commit the `.env` file to version control

