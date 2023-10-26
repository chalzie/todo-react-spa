import { useState } from 'react';

import NewTaskComponent from './tasks/NewTaskComponent';

import TasksListComponent from './lists/TasksListComponent';
import FinishedTasksListComponent from './lists/FinishedTasksListComponent';

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

      <TasksListComponent tasks={tasksArray} markAsDone={markAsDone} removeTask={removeTask} />

      <FinishedTasksListComponent tasks={doneTasksArray} />

    </div>
  );
}

export default TodoListComponent;
