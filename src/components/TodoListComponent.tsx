import { useState } from 'react';

import NewTaskComponent from './tasks/NewTaskComponent';
import TaskComponent from './tasks/TaskComponent';
import FinishedTaskComponent from './tasks/FinishedTaskComponent';

interface Props {
  title?: string;
}

function TodoListComponent({ title = 'Todo list' }: Props) {
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
      <h2 className="mb-2">{title}</h2>

      <NewTaskComponent onAddTask={(task: string) => addTask(task)} />

      {tasksArray.length === 0 && (
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

      {doneTasksArray.map((task: string, index: number) => (
        <FinishedTaskComponent key={index} task={task} />
      ))}
    </div>
  );
}

export default TodoListComponent;
