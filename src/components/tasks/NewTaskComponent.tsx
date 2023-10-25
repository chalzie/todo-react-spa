import { useState } from 'react';
import { MdSave } from 'react-icons/md';

import './_styles.scss';

interface Props {
  onAddTask: (task: string) => void;
}

function NewTaskComponent({ onAddTask }: Props) {
  const [taskTitle, setTaskTitle] = useState('');

  const addNewTask = () => {
    if (taskTitle !== '') { onAddTask(taskTitle); }
    setTaskTitle('');
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
      {taskTitle !== '' && (
        <div className="save-icon ml-2">
          <MdSave
            size="1.25em"
            className="cursor-pointer"
            onClick={() => addNewTask()}
          />
        </div>
      )}
    </div>
  );
}

export default NewTaskComponent;
