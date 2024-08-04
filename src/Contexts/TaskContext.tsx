// TaskContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { readTasks } from '../services/taskService'; // Make sure to import your readTasks function

// Define the structure of a Task object
interface Task {
  Id: number;
  Task: string;
  Completed: boolean;
}

// Define the structure of the context value
interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// Create the context with an initial value of undefined
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Create the provider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const dbTasks = await readTasks();
        const formattedTasks = dbTasks.map((task: { Id: number; Task: string; Completed: boolean }) => ({
          Id: task.Id.toString(),
          Task: task.Task.trim(),
          Completed: task.Completed,
        }));
        setTasks(formattedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};
