import { useState } from "react";

const TodoListComponent = ({ title }) => {
  const [tasksArray, setTasksArray] = useState([]);
  return (
    <div className="pa-1 mb-10">
      <h2 className="mb-2">{title || "Todo List"}</h2>

      {!tasksArray.length && (
        <span className="font-size-3 italic">
          No tasks yet, start by adding one:
        </span>
      )}

    </div>
  );
};

export default TodoListComponent;
