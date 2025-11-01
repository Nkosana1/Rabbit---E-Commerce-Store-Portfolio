# TaskFlow Pro - Development Guide

## Development Workflow

### 1. Branch Strategy

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: Add your feature description"

# Push and create PR
git push origin feature/your-feature-name
```

### 2. Backend Development

#### Adding a New Route

1. **Create Controller** in `backend/src/controllers/`
```javascript
// controllers/projectController.js
module.exports = {
  getProjects: async (req, res) => {
    // Implementation
  },
};
```

2. **Create Route** in `backend/src/routes/`
```javascript
// routes/projects.js
const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { getProjects } = require('../controllers/projectController');

router.get('/', authenticate, getProjects);

module.exports = router;
```

3. **Register Route** in `backend/src/server.js`
```javascript
app.use('/api/projects', require('./routes/projects'));
```

#### Adding a New Model

1. **Create Schema** in `backend/src/models/`
```javascript
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // ... other fields
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
```

#### Adding Middleware

1. **Create Middleware** in `backend/src/middleware/`
2. **Apply in Routes** or globally in `server.js`

### 3. Frontend Development

#### Adding a New Page

1. **Create Component** in `frontend/src/pages/`
2. **Add Route** in `frontend/src/App.jsx`
```jsx
<Route
  path="/your-route"
  element={
    <ProtectedRoute>
      <YourPage />
    </ProtectedRoute>
  }
/>
```

#### Adding Redux State

1. **Create Slice** in `frontend/src/store/slices/`
2. **Add to Store** in `frontend/src/store/store.js`

#### API Integration

1. **Create Service** in `frontend/src/services/api/`
```javascript
// services/api/projectService.js
import apiClient from './apiClient';

export const projectService = {
  getProjects: () => apiClient.get('/projects'),
  createProject: (data) => apiClient.post('/projects', data),
};
```

2. **Use in Components** with React Query or Redux

### 4. Real-time Features (Socket.io)

#### Backend

```javascript
// In socketHandler.js
socket.on('your:event', (data) => {
  // Handle event
  io.to(`project:${data.projectId}`).emit('your:response', data);
});
```

#### Frontend

```javascript
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  auth: { token: getToken() }
});

socket.on('your:response', (data) => {
  // Handle response
});
```

## Code Standards

### Naming Conventions

- **Files**: camelCase for JS/JSX files
- **Components**: PascalCase (e.g., `LoginPage.jsx`)
- **Functions**: camelCase (e.g., `getUserById`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)

### File Organization

```
Component/
├── Component.jsx      # Main component
├── Component.test.js # Tests
├── Component.css     # Styles (if needed)
└── index.js          # Export
```

### Code Formatting

Run before committing:
```bash
npm run format
npm run lint:fix
```

## Testing

### Backend Tests

```javascript
// tests/auth.test.js
const request = require('supertest');
const app = require('../src/server');

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
  });
});
```

Run tests:
```bash
npm test                 # All tests
npm run test:watch      # Watch mode
npm run test:integration # Integration tests
```

## Debugging

### Backend

- Use `logger` utility for logging
- Check logs in `backend/logs/`
- Use VS Code debugger with launch.json

### Frontend

- React DevTools for component inspection
- Redux DevTools for state inspection
- Browser DevTools for network and console

## Performance Optimization

### Backend

- Use Redis caching for frequently accessed data
- Implement database indexing
- Use pagination for list endpoints
- Optimize database queries

### Frontend

- Code splitting with React.lazy()
- Image optimization
- Memoization with useMemo/useCallback
- Virtual scrolling for long lists

## Security Checklist

- [ ] Input validation on all endpoints
- [ ] Authentication middleware on protected routes
- [ ] Authorization checks for sensitive operations
- [ ] Rate limiting configured
- [ ] XSS protection enabled
- [ ] SQL injection prevention (MongoDB handles this)
- [ ] Secure password hashing
- [ ] HTTPS in production
- [ ] Environment variables not committed
- [ ] JWT tokens properly secured

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] Tests passing
- [ ] Build successful
- [ ] Error logging configured
- [ ] Monitoring setup
- [ ] Backup strategy in place

## Resources

- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Socket.io Docs](https://socket.io/)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

