# TaskFlow Pro - Quick Start Guide

Get TaskFlow Pro up and running in minutes!

## Prerequisites Check

Make sure you have installed:
- ✅ Node.js >= 18.0.0 (`node --version`)
- ✅ npm >= 9.0.0 (`npm --version`)
- ✅ MongoDB (local or Atlas account)
- ✅ Redis (local or cloud service)

## 1-Minute Setup

### Step 1: Install Dependencies

```bash
npm run install:all
```

### Step 2: Setup Environment Variables

**Windows:**
```powershell
.\scripts\setup.ps1
```

**Mac/Linux:**
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

Or manually copy:
- `backend/ENV_TEMPLATE.md` → `backend/.env`
- `frontend/ENV_TEMPLATE.md` → `frontend/.env`

### Step 3: Start MongoDB & Redis

**Option A: Docker (Easiest)**
```bash
docker-compose up -d
```

**Option B: Local Services**
- Start MongoDB: `mongod` or `brew services start mongodb-community`
- Start Redis: `redis-server` or `brew services start redis`

### Step 4: Run the Application

```bash
npm run dev
```

This starts both backend (port 5000) and frontend (port 5173).

### Step 5: Access the App

Open your browser:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## That's It! 🎉

You're ready to start developing. Check out:
- [Full Setup Guide](docs/SETUP.md) for detailed instructions
- [API Documentation](docs/API.md) for API endpoints
- [Project Structure](PROJECT_STRUCTURE.md) for code organization

## Common Commands

```bash
# Development
npm run dev              # Run both servers
npm start:backend        # Backend only
npm start:frontend       # Frontend only

# Testing
npm test                 # Run backend tests
cd backend && npm test   # Backend tests
cd frontend && npm test  # Frontend tests (if configured)

# Code Quality
npm run lint             # Lint all code
npm run format           # Format all code
```

## Troubleshooting

**Port already in use?**
- Change `PORT` in `backend/.env`
- Change port in `frontend/vite.config.js`

**MongoDB connection error?**
- Ensure MongoDB is running
- Check `MONGODB_URI` in `backend/.env`

**Redis connection error?**
- Ensure Redis is running
- Check `REDIS_URL` in `backend/.env`

**Module not found?**
- Delete `node_modules` folders
- Run `npm run install:all` again

## Next Steps

1. **Implement Features**: Start with authentication in `backend/src/controllers/authController.js`
2. **Create Components**: Build UI components in `frontend/src/components/`
3. **Add Models**: Create Mongoose models in `backend/src/models/`
4. **Write Tests**: Add tests in `backend/src/tests/`

Happy coding! 🚀

