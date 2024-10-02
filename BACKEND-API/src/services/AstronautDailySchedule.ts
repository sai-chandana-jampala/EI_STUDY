// services/taskService.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TaskService {
  async createTask(taskData) {
    const { startTime, endTime } = taskData;
    
    // Check for conflicts
    const conflictingTask = await prisma.task.findFirst({
      where: {
        OR: [
          {
            AND: [
              { startTime: { lte: startTime } },
              { endTime: { gt: startTime } }
            ]
          },
          {
            AND: [
              { startTime: { lt: endTime } },
              { endTime: { gte: endTime } }
            ]
          }
        ]
      }
    });

    if (conflictingTask) {
      throw new Error('Task conflicts with existing schedule');
    }

    return prisma.task.create({
      data: taskData
    });
  }

  async getAllTasks() {
    return prisma.task.findMany({
      orderBy: {
        startTime: 'asc'
      }
    });
  }

  async updateTask(id, taskData) {
    return prisma.task.update({
      where: { id },
      data: taskData
    });
  }

  async deleteTask(id) {
    return prisma.task.delete({
      where: { id }
    });
  }

  async getTasksByPriority(priority) {
    return prisma.task.findMany({
      where: { priority },
      orderBy: {
        startTime: 'asc'
      }
    });
  }
}

module.exports = new TaskService();