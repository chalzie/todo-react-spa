import { useState } from "react";
import { FcPlus } from "react-icons/fc";

import "./styles.scss";

const NewTaskComponent = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const addNewTask = () => {
    taskTitle && onAddTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div className="new-task flex items-center mb-3">
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        type="text"
        placeholder="e.g. do the dishes, clean the room..."
        className="w-full p-2"
      />
      {taskTitle && (
        <FcPlus
          size="1.25em"
          className="self-center ml-3 cursor-pointer"
          onClick={() => addNewTask()}
        />
      )}
    </div>
  );
};

export default NewTaskComponent;
