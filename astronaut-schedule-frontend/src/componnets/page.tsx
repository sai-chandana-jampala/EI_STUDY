// services/api.js
class ApiService {
         constructor() {
           this.baseUrl = process.env.NEXT_PUBLIC_API_URL;
         }
       
         async fetchTasks() {
           try {
             const response = await fetch(`${this.baseUrl}/tasks`);
             if (!response.ok) throw new Error('Failed to fetch tasks');
             return await response.json();
           } catch (error) {
             console.error('Error fetching tasks:', error);
             throw error;
           }
         }
       
         async createTask(taskData) {
           try {
             const response = await fetch(`${this.baseUrl}/tasks`, {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(taskData),
             });
             if (!response.ok) {
               const errorData = await response.json();
               throw new Error(errorData.error || 'Failed to create task');
             }
             return await response.json();
           } catch (error) {
             console.error('Error creating task:', error);
             throw error;
           }
         }
       
         async updateTask(id, taskData) {
           try {
             const response = await fetch(`${this.baseUrl}/tasks/${id}`, {
               method: 'PUT',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(taskData),
             });
             if (!response.ok) throw new Error('Failed to update task');
             return await response.json();
           } catch (error) {
             console.error('Error updating task:', error);
             throw error;
           }
         }
       
         async deleteTask(id) {
           try {
             const response = await fetch(`${this.baseUrl}/tasks/${id}`, {
               method: 'DELETE',
             });
             if (!response.ok) throw new Error('Failed to delete task');
           } catch (error) {
             console.error('Error deleting task:', error);
             throw error;
           }
         }
       }
       
       export const apiService = new ApiService();