import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";
import { readTasks } from "../services/taskService"; 

const TaskListParent = () => {
  const [tasks, setTasks] = useState<{ id: string; task: string; completed: boolean }[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const dbTasks = await readTasks();
        console.log("Fetched tasks:", dbTasks); 
        const formattedTasks = dbTasks.map((task: { Id: number; Task: string ; Completed: boolean}) => ({
          id: task.Id.toString(),
          task: task.Task.trim(),
          completed: task.Completed,
        }));
        setTasks(formattedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getTasks();
  }, []);

  const addTask = (newTask: string) => {
    const newTaskObj = { id: uuidv4(), task: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
  };

  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskListParent;
