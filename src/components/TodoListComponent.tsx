import React from 'react';

import NewTaskComponent from './tasks/NewTaskComponent';

import TasksListComponent from './lists/TasksListComponent';
import FinishedTasksListComponent from './lists/FinishedTasksListComponent';

export type TodoListProps = {
  title?: string
};

export type TodoListState = {
  tasks: string[],
  doneTasks: string[]
};

class TodoListComponent extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
    this.state = {
      tasks: [],
      doneTasks: [],
    };
  }

  addTask = (taskToAdd: string) => {
    const { tasks } = this.state;
    if (!tasks.includes(taskToAdd)) {
      this.setState({ tasks: [...tasks, taskToAdd] });
    }
  };

  removeTask = (removedTask: string) => {
    const { tasks } = this.state;
    const filtered = tasks.filter((task: string) => task !== removedTask);
    this.setState({ tasks: filtered });
  };

  markAsDone = (finishedTask: string) => {
    const { doneTasks } = this.state;
    if (!doneTasks.includes(finishedTask)) {
      this.setState({ doneTasks: [...doneTasks, finishedTask] });
    }
    this.removeTask(finishedTask);
  };

  render() {
    const { title = 'New Todo List' } = this.props;
    const { tasks, doneTasks } = this.state;

    return (
      <div className="pa-1 mb-10 flex flex-col">
        <h2 className="mb-2">{title}</h2>

        <NewTaskComponent onAddTask={(task: string) => this.addTask(task)} />

        <TasksListComponent
          tasks={tasks}
          markAsDone={this.markAsDone}
          removeTask={this.removeTask}
        />

        <FinishedTasksListComponent tasks={doneTasks} />

      </div>
    );
  }
}

export default TodoListComponent;
