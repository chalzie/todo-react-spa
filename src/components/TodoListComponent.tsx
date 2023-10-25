import { useState } from "react";

import NewTaskComponent from "./tasks/NewTaskComponent";
import TaskComponent from "./tasks/TaskComponent";
import FinishedTaskComponent from "./tasks/FinishedTaskComponent";

interface Props {
  title?: string;
}

const TodoListComponent = ({ title }: Props) => {
  const [tasksArray, setTasksArray] = useState([] as string[]);
  const [doneTasksArray, setDoneTasksArray] = useState([] as string[]);

  const addTask = (taskToAdd: string) => {
    if (!tasksArray.includes(taskToAdd)) {
      setTasksArray([...tasksArray, taskToAdd]);
    }
  };

  const removeTask = (removedTask: string) => {
    const filtered = tasksArray.filter((task) => task !== removedTask);
    setTasksArray(filtered);
  };

  const markAsDone = (finishedTask: string) => {
    if (!doneTasksArray.includes(finishedTask)) {
      setDoneTasksArray([...doneTasksArray, finishedTask]);
    }
    removeTask(finishedTask);
  };

  return (
    <div className="pa-1 mb-10 flex flex-col">
      <h2 className="mb-2">{title || "Todo List"}</h2>

      <NewTaskComponent onAddTask={(task: string) => addTask(task)} />

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

      {doneTasksArray.length > 0 && (
        <h3 className="mt-10 self-center">Completed tasks</h3>
      )}

      {doneTasksArray.map((task, index) => (
        <FinishedTaskComponent key={index} task={task} />
      ))}
    </div>
  );
};

export default TodoListComponent;
