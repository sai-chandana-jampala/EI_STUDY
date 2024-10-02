import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/components/ui/use-toast";
import { apiService } from '../services/api';

export default function AstronautSchedule() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [newTask, setNewTask] = useState({
    description: '',
    startTime: '',
    endTime: '',
    priority: 'MEDIUM'
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const fetchedTasks = await apiService.fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch tasks. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiService.createTask(newTask);
      await fetchTasks();
      setNewTask({
        description: '',
        startTime: '',
        endTime: '',
        priority: 'MEDIUM'
      });
      toast({
        title: "Success",
        description: "Task added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to add task. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await apiService.deleteTask(id);
      await fetchTasks();
      toast({
        title: "Success",
        description: "Task deleted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete task. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Astronaut Daily Schedule</h1>
      
      <Card className="mb-6">
        <CardHeader>Add New Task</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Task description"
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
              disabled={loading}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="time"
                value={newTask.startTime}
                onChange={(e) => setNewTask({...newTask, startTime: e.target.value})}
                disabled={loading}
              />
              <Input
                type="time"
                value={newTask.endTime}
                onChange={(e) => setNewTask({...newTask, endTime: e.target.value})}
                disabled={loading}
              />
            </div>
            <Select 
              value={newTask.priority}
              onValueChange={(value) => setNewTask({...newTask, priority: value})}
              disabled={loading}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="LOW">Low</SelectItem>
                <SelectItem value="MEDIUM">Medium</SelectItem>
                <SelectItem value="HIGH">High</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Task'}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>Scheduled Tasks</CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center">Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className="text-center">No tasks scheduled</div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="mb-4 p-4 border rounded flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{task.description}</h3>
                  <p>Time: {new Date(task.startTime).toLocaleTimeString()} - {new Date(task.endTime).toLocaleTimeString()}</p>
                  <p>Priority: {task.priority}</p>
                </div>
                <Button 
                  variant="destructive" 
                  onClick={() => handleDelete(task.id)}
                  disabled={loading}
                >
                  Delete
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}