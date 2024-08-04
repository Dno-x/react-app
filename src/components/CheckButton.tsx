import React, { useState } from "react";
import { updateTask } from "../services/taskService";
import { useTasks } from "../Contexts/TaskContext";
import "../css/CheckButton.css";

const CheckButton = () => {
  const [allchecked, setAllChecked] = useState(false);
  const { tasks, setTasks } = useTasks();

  const handleClick = async (completedStatus: boolean) => {
    const updatedTasks = tasks.map((task) => {
      const updatedTask = { ...task, Completed: completedStatus };
      updateTask(updatedTask);
      return updatedTask;
    });

    setTasks(updatedTasks);
    setAllChecked(!allchecked);
  };

  return (
    <>
      <div className="checkbutton">
        <div onClick={() => handleClick(false)  } style={{ marginLeft: "120px",paddingRight: "10px"  }}>
          Uncheck All
        </div>
      </div>
      <div className="checkbutton">
        <div onClick={() => handleClick(true)} style={{ paddingLeft: "10px"  }}>
          Check All
        </div>
      </div>
    </>
  );
};

export default CheckButton;
