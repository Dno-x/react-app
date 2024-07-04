import { useState } from "react";
import "../css/AddTask.css";
import "../css/TaskForm.css";
import { createTask } from "../services/taskService";

interface Props {
  addTask: (task: string) => void;
}
const AddTask = ({ addTask }: Props) => {
  const [formActive, setFormActive] = useState(false);
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
        try {
            await createTask(task);
            addTask(task); 
            setTask('');
            setFormActive(false);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }
};
  return (
    <>
      <button
        className="task-button"
        type="button"
        onClick={() => setFormActive(!formActive)}
      >
        <span className="task-button__text">Add Task</span>
        <span className="task-button__icon">
          <svg
            className="svg"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
      {formActive && (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>New Task</label>
              <textarea
                id="textarea"
                name="textarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTask;
