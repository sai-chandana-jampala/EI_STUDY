# Full Stack Astronaut Schedule Manager

## About Me
Hello! I'm Sai Chandana Jampala, a full-stack web developer with expertise in Machine Learning and Artificial Intelligence. I'm currently pursuing my B.Tech in Computer Science with a specialization in AI at Amrita Viswa Vidyapeetham, Coimbatore.

- 🌐 Portfolio: [saichandanajampala.netlify.app](https://saichandanajampala.netlify.app)
- 📧 Email: saichandanajampala@gmail.com
- 🔗 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/saichandanajampala/)
- 💻 GitHub: [GitHub Profile](https://github.com/sai-chandana-jampala)

 - 🚀 Current Experience

Completed a stipend-based internship at Command HQ
Working on various full-stack projects using modern technologies

- 💻 Tech Stack
## Frontend

React.js
Next.js
Bootstrap
Currently learning Angular

## Backend

Node.js
Express.js
Next.js (API routes)

## Project Overview
This repository contains my implementation of two exercises:
1. Design Patterns Demonstration
2. Astronaut Daily Schedule Organizer

### Exercise 1: Design Patterns Implementation
In this exercise, I demonstrated six different design patterns across three categories:

#### 1. Behavioral Design Patterns
- **Observer Pattern**: Implemented a stock price tracker
- **Command Pattern**: Created a remote control system

#### 2. Creational Design Patterns
- **Factory Pattern**: Developed a car factory system
- **Singleton Pattern**: Implemented a logger service

#### 3. Structural Design Patterns
- **Adapter Pattern**: Created a round peg and square hole adapter
- **Decorator Pattern**: Implemented a coffee shop ordering system

### Exercise 2: Astronaut Schedule Manager
A full-stack application for astronauts to manage their daily schedules efficiently. (Tested every api using postman)

## Technology Stack
- **Frontend**: Next.js, React, Shadcn UI
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (Neon DB)
- **API Documentation**: Swagger

## Project Structure
```
astronaut-scheduler/
├── frontend/
│   ├── components/
│   │   ├── ErrorBoundary.js
│   │   └── AstronautSchedule.js
│   ├── services/
│   │   └── api.js
│   ├── pages/
│   └── public/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── services/
│   │   └── taskService.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── prisma/
│   │   └── schema.prisma
│   └── app.js
└── README.md
```

## Features Implemented
1. ✅ Task CRUD operations
2. ✅ Time conflict validation
3. ✅ Priority-based scheduling
4. ✅ Real-time updates using Observer pattern
5. ✅ Singleton schedule manager
6. ✅ Factory pattern for task creation

## Implementation Details

### Backend Implementation
- Used Prisma ORM with PostgreSQL
- Implemented design patterns:
  - Singleton for ScheduleManager
  - Factory for Task creation
  - Observer for conflict notifications

### Frontend Implementation
- Responsive UI using Shadcn components
- Real-time updates
- Error handling and loading states

## Screenshots

[Add placeholder images for your UI/implementation]
## working ui and folder structures
<img src="https://d2kxt8w2f20enb.cloudfront.net/simpleui.png" alt="workingui" />
<img src="https://d2kxt8w2f20enb.cloudfront.net/frontend.png" alt="frontend.png" />
<img src="https://d2kxt8w2f20enb.cloudfront.net/backend.png" alt="Backend.png" />

## API Documentation

### Endpoints
1. `POST /api/tasks` - Create a new task
2. `GET /api/tasks` - Retrieve all tasks
3. `PUT /api/tasks/:id` - Update a task
4. `DELETE /api/tasks/:id` - Delete a task

Example Request:
```json
{
  "description": "Morning Exercise",
  "startTime": "07:00",
  "endTime": "08:00",
  "priority": "HIGH"
}
```

## Design Patterns Used

1. **Singleton Pattern** (Schedule Manager)
```javascript
class ScheduleManager {
  private static instance: ScheduleManager;
  
  private constructor() {}
  
  public static getInstance(): ScheduleManager {
    if (!ScheduleManager.instance) {
      ScheduleManager.instance = new ScheduleManager();
    }
    return ScheduleManager.instance;
  }
}
```

2. **Factory Pattern** (Task Creation)
```javascript
class TaskFactory {
  createTask(type: string, data: TaskData): Task {
    switch(type) {
      case 'regular':
        return new RegularTask(data);
      case 'priority':
        return new PriorityTask(data);
      default:
        throw new Error('Unknown task type');
    }
  }
}
```

3. **Observer Pattern** (Conflict Notification)
```javascript
class TaskConflictNotifier {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyConflict(task: Task): void {
    this.observers.forEach(observer => observer.update(task));
  }
}
```

## Running the Project

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

3. Set up environment variables
```
# Backend .env
DATABASE_URL="postgresql://username:password@localhost:5432/astronaut_schedule"
PORT=3000

# Frontend .env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Run the application
```bash
# Backend
npm run dev

# Frontend
npm run dev
```

## Future Enhancements
1. Add authentication for multiple astronauts
2. Implement task categories and filters
3. Add calendar view for better visualization
4. Create mobile app version

## Contact
For any queries regarding this project, feel free to reach out:
- Email: saichandanajampala@gmail.com
- 🔗 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/saichandanajampala/)
