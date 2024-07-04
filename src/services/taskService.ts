import axios from "axios";

const API_URL = "http://localhost:5250/api/PracticeApp";

export const readTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (newTask: string) => {
  try {
    const response = await axios.post(`${API_URL}/createTask`, {
      task: newTask,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    await axios.delete(`${API_URL}/deleteTask/${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const updateTask = async (task: {Id: number, Task: string, Completed: boolean}) => {
  try {
    await axios.put(`${API_URL}/updateTask/${task.Id}`, task);
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};
