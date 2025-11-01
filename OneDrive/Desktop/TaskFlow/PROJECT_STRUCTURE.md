# TaskFlow Pro - Project Structure

This document provides an overview of the complete project structure.

## Directory Structure

```
taskflow-pro/
├── backend/                          # Express.js Backend
│   ├── src/
│   │   ├── controllers/              # Route controllers
│   │   │   └── authController.js     # Authentication controller (placeholder)
│   │   ├── models/                   # Mongoose schemas
│   │   │   └── User.js               # User model
│   │   ├── routes/                   # API routes
│   │   │   ├── auth.js               # Authentication routes
│   │   │   ├── users.js              # User routes
│   │   │   ├── projects.js           # Project routes
│   │   │   ├── tasks.js              # Task routes
│   │   │   ├── teams.js              # Team routes
│   │   │   ├── chat.js               # Chat routes
│   │   │   ├── notifications.js      # Notification routes
│   │   │   ├── analytics.js          # Analytics routes
│   │   │   └── files.js              # File upload routes
│   │   ├── middleware/               # Custom middleware
│   │   │   ├── auth.js               # Authentication middleware
│   │   │   └── errorHandler.js       # Error handling middleware
│   │   ├── services/                 # Business logic layer
│   │   ├── utils/                    # Helper functions
│   │   │   ├── jwt.js                # JWT utilities
│   │   │   └── logger.js             # Winston logger
│   │   ├── config/                   # Configuration files
│   │   │   ├── database.js           # MongoDB connection
│   │   │   └── redis.js              # Redis connection
│   │   ├── socket/                   # Socket.io handlers
│   │   │   └── socketHandler.js      # Socket connection handler
│   │   ├── tests/                    # Test files
│   │   │   └── setup.js              # Jest setup
│   │   └── server.js                 # Main server file
│   ├── docs/                         # Backend documentation
│   ├── scripts/                      # Database scripts
│   ├── logs/                         # Log files (generated)
│   ├── .env                          # Environment variables (create from ENV_TEMPLATE.md)
│   ├── .gitignore                    # Git ignore rules
│   ├── .eslintrc.js                  # ESLint configuration
│   ├── .prettierrc                   # Prettier configuration
│   ├── jest.config.js                # Jest configuration
│   ├── jest.integration.config.js    # Integration test config
│   ├── package.json                  # Backend dependencies
│   └── ENV_TEMPLATE.md               # Environment variables template
│
├── frontend/                         # React Frontend
│   ├── public/                       # Static assets
│   │   ├── index.html                # HTML template (via vite)
│   │   └── ...                       # PWA assets
│   ├── src/
│   │   ├── components/               # Reusable components
│   │   │   ├── ErrorFallback.jsx     # Error boundary component
│   │   │   ├── ProtectedRoute.jsx    # Protected route wrapper
│   │   │   └── PublicRoute.jsx      # Public route wrapper
│   │   ├── pages/                    # Route components
│   │   │   ├── LoginPage.jsx         # Login page
│   │   │   ├── RegisterPage.jsx     # Registration page
│   │   │   ├── DashboardPage.jsx     # Dashboard
│   │   │   ├── ProjectsPage.jsx     # Projects list
│   │   │   ├── ProjectDetailPage.jsx # Project details
│   │   │   ├── TasksPage.jsx         # Tasks page
│   │   │   ├── AnalyticsPage.jsx     # Analytics page
│   │   │   ├── ProfilePage.jsx      # User profile
│   │   │   └── NotFoundPage.jsx      # 404 page
│   │   ├── store/                    # Redux store
│   │   │   ├── store.js              # Redux store configuration
│   │   │   └── slices/               # Redux slices
│   │   │       ├── authSlice.js      # Authentication slice
│   │   │       ├── projectSlice.js   # Projects slice
│   │   │       ├── taskSlice.js      # Tasks slice
│   │   │       └── uiSlice.js        # UI state slice
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── services/                 # API service layer
│   │   │   └── api/                  # API clients
│   │   │       ├── apiClient.js     # Axios client with interceptors
│   │   │       └── authService.js    # Authentication service
│   │   ├── utils/                    # Helper functions
│   │   ├── contexts/                 # React contexts
│   │   │   └── ThemeContext.jsx      # Theme provider
│   │   ├── styles/                   # Global styles
│   │   │   └── index.css             # Tailwind and custom styles
│   │   ├── assets/                   # Images, icons, fonts
│   │   ├── App.jsx                   # Main app component
│   │   └── main.jsx                  # Entry point
│   ├── docs/                         # Frontend documentation
│   ├── .env                          # Environment variables (create from ENV_TEMPLATE.md)
│   ├── .gitignore                    # Git ignore rules
│   ├── .eslintrc.cjs                # ESLint configuration
│   ├── .prettierrc                   # Prettier configuration
│   ├── index.html                    # HTML template
│   ├── package.json                  # Frontend dependencies
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration
│   └── ENV_TEMPLATE.md               # Environment variables template
│
├── deployments/                      # Deployment configurations
│   ├── vercel/                       # Vercel deployment config
│   ├── render/                       # Render deployment config
│   └── mongodb/                      # MongoDB setup scripts
│
├── docs/                             # Project documentation
│   ├── SETUP.md                      # Setup instructions
│   └── API.md                        # API documentation
│
├── scripts/                          # Utility scripts
│   ├── setup.sh                      # Setup script (Unix/Mac)
│   └── setup.ps1                    # Setup script (Windows)
│
├── .gitignore                        # Root git ignore
├── package.json                      # Root package.json (workspace)
├── docker-compose.yml                # Docker Compose for MongoDB & Redis
├── README.md                         # Main README
├── CONTRIBUTING.md                   # Contribution guidelines
├── LICENSE                           # ISC License
└── PROJECT_STRUCTURE.md              # This file
```

## Key Files

### Backend
- **server.js**: Main Express server setup with Socket.io
- **config/database.js**: MongoDB connection configuration
- **config/redis.js**: Redis client setup
- **middleware/auth.js**: JWT authentication middleware
- **socket/socketHandler.js**: Real-time Socket.io handlers

### Frontend
- **main.jsx**: React application entry point
- **App.jsx**: Main routing and layout component
- **store/store.js**: Redux store configuration
- **services/api/apiClient.js**: Axios client with interceptors

## Next Steps

1. **Environment Setup**: Copy `ENV_TEMPLATE.md` files to `.env` files
2. **Install Dependencies**: Run `npm run install:all`
3. **Start Services**: MongoDB and Redis (or use `docker-compose up -d`)
4. **Development**: Run `npm run dev`

See [docs/SETUP.md](docs/SETUP.md) for detailed setup instructions.

