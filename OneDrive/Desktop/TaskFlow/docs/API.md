# TaskFlow Pro - API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Refresh Token
- **POST** `/auth/refresh`
- **Body:**
  ```json
  {
    "refreshToken": "<refresh_token>"
  }
  ```

#### Logout
- **POST** `/auth/logout`
- **Requires:** Authentication

### Users

#### Get Current User
- **GET** `/users/me`
- **Requires:** Authentication

#### Get User by ID
- **GET** `/users/:id`
- **Requires:** Authentication

#### Update User
- **PUT** `/users/:id`
- **Requires:** Authentication
- **Body:**
  ```json
  {
    "name": "Updated Name",
    "avatar": "https://example.com/avatar.jpg"
  }
  ```

### Projects

#### Get All Projects
- **GET** `/projects`
- **Requires:** Authentication
- **Query Parameters:**
  - `page` - Page number (default: 1)
  - `limit` - Items per page (default: 10)
  - `search` - Search term
  - `status` - Filter by status

#### Create Project
- **POST** `/projects`
- **Requires:** Authentication
- **Body:**
  ```json
  {
    "name": "Project Name",
    "description": "Project description",
    "status": "active",
    "members": ["user_id_1", "user_id_2"]
  }
  ```

#### Get Project by ID
- **GET** `/projects/:id`
- **Requires:** Authentication

#### Update Project
- **PUT** `/projects/:id`
- **Requires:** Authentication

#### Delete Project
- **DELETE** `/projects/:id`
- **Requires:** Authentication

### Tasks

#### Get All Tasks
- **GET** `/tasks`
- **Requires:** Authentication
- **Query Parameters:**
  - `projectId` - Filter by project
  - `status` - Filter by status
  - `assignee` - Filter by assignee

#### Create Task
- **POST** `/tasks`
- **Requires:** Authentication
- **Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task description",
    "projectId": "project_id",
    "status": "todo",
    "priority": "medium",
    "assignee": "user_id",
    "dueDate": "2024-12-31"
  }
  ```

#### Get Task by ID
- **GET** `/tasks/:id`
- **Requires:** Authentication

#### Update Task
- **PUT** `/tasks/:id`
- **Requires:** Authentication

#### Delete Task
- **DELETE** `/tasks/:id`
- **Requires:** Authentication

### Files

#### Upload File
- **POST** `/files/upload`
- **Requires:** Authentication
- **Content-Type:** `multipart/form-data`
- **Body:**
  - `file` - File to upload
  - `projectId` - (optional) Associated project
  - `taskId` - (optional) Associated task

#### Get File
- **GET** `/files/:id`
- **Requires:** Authentication

#### Delete File
- **DELETE** `/files/:id`
- **Requires:** Authentication

### Analytics

#### Get Dashboard Analytics
- **GET** `/analytics/dashboard`
- **Requires:** Authentication

#### Get Project Analytics
- **GET** `/analytics/project/:id`
- **Requires:** Authentication

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "stack": "Error stack (development only)"
}
```

### Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## WebSocket Events

Connect to `http://localhost:5000` using Socket.io client.

### Client → Server

- `join:project` - Join a project room
- `leave:project` - Leave a project room
- `task:update` - Update a task
- `comment:new` - Create a new comment
- `chat:message` - Send a chat message

### Server → Client

- `task:updated` - Task was updated
- `comment:created` - Comment was created
- `chat:newMessage` - New chat message
- `notification:new` - New notification

## Rate Limiting

- Default: 100 requests per 15 minutes per IP
- Configured via `RATE_LIMIT_MAX_REQUESTS` and `RATE_LIMIT_WINDOW_MS`

