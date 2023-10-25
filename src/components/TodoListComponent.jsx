import { useState } from "react";

import NewTaskComponent from "./tasks/NewTaskComponent";
import TaskComponent from "./tasks/TaskComponent";

const TodoListComponent = ({ title }) => {
  const [tasksArray, setTasksArray] = useState([]);

  const removeTask = (removedTask) => {
    const filtered = tasksArray.filter((task) => task !== removedTask);
    setTasksArray(filtered);
  };

  const markAsDone = (finishedTask) => {
    setDoneTasksArray([...doneTasksArray, finishedTask]);
    removeTask(finishedTask);
  };

  return (
    <div className="pa-1 mb-10 flex flex-col">
      <h2 className="mb-2">{title || "Todo List"}</h2>

      {!tasksArray.length && (
        <span className="font-size-3 italic">
          No tasks yet, start by adding one:
        </span>
      )}

      <NewTaskComponent
        onAddTask={(task) => setTasksArray([...tasksArray, task])}
      />
      {!tasksArray.length && (
        <div className="font-size-4 italic self-center">
          No tasks yet, start by adding one!
        </div>
      )}
      {tasksArray.map((task, index) => (
        <TaskComponent
          key={index}
          task={task}
          onRemoveTask={removeTask}
          onMarkAsDoneTask={markAsDone}
        />
      ))}
    </div>
  );
};

export default TodoListComponent;
