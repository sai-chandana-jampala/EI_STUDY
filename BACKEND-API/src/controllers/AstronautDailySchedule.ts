// controllers/taskController.js
const taskService = require('../services/AstronautDailySchedule');

class TaskController {
  async createTask(req, res) {
    try {
      const task = await taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const task = await taskService.updateTask(req.params.id, req.body);
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      await taskService.deleteTask(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getTasksByPriority(req, res) {
    try {
      const tasks = await taskService.getTasksByPriority(req.params.priority);
      res.json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new TaskController();