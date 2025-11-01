# TaskFlow Pro 🚀

An advanced project management and team collaboration platform built with the MERN stack, featuring real-time updates, Kanban boards, analytics, and enterprise-grade architecture.

## 🎯 Features

### Authentication & Authorization
- ✅ JWT-based authentication with refresh tokens
- ✅ Role-based access control (Admin, Project Manager, Team Member)
- ✅ Email verification system
- ✅ Password reset functionality
- ✅ Social login (Google OAuth)

### Project Management
- ✅ Kanban board with drag-and-drop functionality
- ✅ Real-time updates using Socket.io
- ✅ File uploads and attachments
- ✅ Time tracking and deadlines
- ✅ Advanced filtering and search
- ✅ Project templates

### Team Collaboration
- ✅ Real-time chat and comments
- ✅ @mentions and notifications
- ✅ Activity feeds and audit logs
- ✅ Team member assignments
- ✅ Permission levels per project

### Advanced Features
- ✅ Analytics dashboard with charts
- ✅ Calendar view and scheduling
- ✅ Mobile-responsive PWA
- ✅ Dark/light theme
- ✅ Export capabilities (PDF, CSV)

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Caching**: Redis
- **Real-time**: Socket.io
- **Validation**: Joi
- **Logging**: Winston
- **Testing**: Jest

### Frontend
- **Framework**: React 18
- **State Management**: Redux Toolkit + React Query
- **Styling**: Tailwind CSS
- **Drag & Drop**: React Beautiful DnD
- **Charts**: Chart.js
- **Build Tool**: Vite
- **PWA**: Service Workers

## 📁 Project Structure

```
taskflow-pro/
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── controllers/     # Route handlers
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helpers and utilities
│   │   ├── config/          # Database and app config
│   │   ├── socket/          # Socket.io handlers
│   │   └── tests/           # Unit and integration tests
│   ├── docs/                # API documentation
│   └── scripts/             # Database scripts
├── frontend/                # React frontend
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route components
│   │   ├── store/           # Redux store and slices
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API service layer
│   │   ├── utils/           # Helper functions
│   │   ├── contexts/        # React contexts
│   │   ├── styles/          # Global styles and themes
│   │   └── assets/          # Images, icons, fonts
│   └── docs/                # Component documentation
├── deployments/              # Deployment configurations
└── docs/                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **MongoDB** >= 6.0 (local or Atlas)
- **Redis** >= 7.0 (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taskflow-pro
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```
   Or install separately:
   ```bash
   npm install                    # Root dependencies
   cd backend && npm install      # Backend dependencies
   cd ../frontend && npm install  # Frontend dependencies
   ```

3. **Environment Setup**

   **Backend:**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

   **Frontend:**
   ```bash
   cd frontend
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB and Redis**

   **MongoDB (local):**
   ```bash
   mongod
   ```

   **Redis (local):**
   ```bash
   redis-server
   ```

   Or use Docker:
   ```bash
   docker-compose up -d mongodb redis
   ```

5. **Run the application**

   **Development (both backend and frontend):**
   ```bash
   npm run dev
   ```

   **Or run separately:**

   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000
   - API Docs: http://localhost:5000/api/docs

## 🔧 Configuration

### Backend Environment Variables

See `backend/.env.example` for all available configuration options.

Key variables:
- `MONGODB_URI`: MongoDB connection string
- `REDIS_URL`: Redis connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `EMAIL_*`: Email service configuration
- `CLOUDINARY_*`: File upload service configuration

### Frontend Environment Variables

See `frontend/.env.example` for all available configuration options.

Key variables:
- `VITE_API_URL`: Backend API URL
- `VITE_SOCKET_URL`: Socket.io server URL
- `VITE_GOOGLE_CLIENT_ID`: Google OAuth client ID

## 📝 Development

### Available Scripts

**Root:**
- `npm run dev` - Run both backend and frontend in development
- `npm run build` - Build frontend for production
- `npm run lint` - Lint all code
- `npm run format` - Format all code

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run seed` - Seed database with sample data

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

### Code Structure Guidelines

- Follow ESLint and Prettier configurations
- Write tests for all business logic
- Use TypeScript types where applicable
- Follow RESTful API conventions
- Implement proper error handling
- Add JSDoc comments for complex functions

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test              # Unit tests
npm run test:watch    # Watch mode
npm run test:integration  # Integration tests
```

## 🚢 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Set environment variables in your hosting platform
2. Ensure MongoDB and Redis are accessible
3. Deploy using platform-specific instructions

### Frontend Deployment (Vercel/Netlify)

1. Set environment variables
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy using platform-specific instructions

See `deployments/` directory for specific deployment configurations.

## 📚 API Documentation

API documentation is available at:
- Development: http://localhost:5000/api/docs
- See `backend/docs/api/` for detailed documentation

## 🔒 Security

- Rate limiting enabled
- Helmet.js for security headers
- Input sanitization and validation
- XSS protection
- CORS configuration
- Secure JWT implementation
- Password hashing with bcrypt

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

Built with ❤️ by the TaskFlow Pro team

## 🆘 Support

For support, email support@taskflowpro.com or create an issue in the repository.

---

**Made with MERN Stack** 🚀

