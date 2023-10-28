import React from 'react';

import { MdOutlineDone, MdOutlineRemoveCircle } from 'react-icons/md';

import './_styles.scss';

export type TaskComponentProps = {
  task: string;
  onRemoveTask: (task: string) => void;
  onMarkAsDoneTask: (task: string) => void;
};

class TaskComponent extends React.Component<TaskComponentProps> {
  render() {
    const { task, onMarkAsDoneTask, onRemoveTask } = this.props;
    return (
      <div className="task flex justify-between mb-1 unfinished">
        <span>{task}</span>

        <div className="actions">
          <MdOutlineDone
            className="done cursor-pointer mr-2"
            onClick={() => onMarkAsDoneTask(task as string)}
          />
          <MdOutlineRemoveCircle
            className="remove cursor-pointer"
            onClick={() => onRemoveTask(task as string)}
          />
        </div>
      </div>
    );
  }
}

export default TaskComponent;
