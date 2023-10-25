import { MdOutlineDone, MdOutlineRemoveCircle } from "react-icons/md";

import "./_styles.scss";

interface Props {
  task: string | null;
  onRemoveTask: (task: string) => void;
  onMarkAsDoneTask: (task: string) => void;
}

const TaskComponent = ({
  task = null,
  onRemoveTask,
  onMarkAsDoneTask,
}: Props) => {
  return (
    <div className="task flex justify-between mb-1 unfinished">
      {task && <span>{task}</span>}

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
};

export default TaskComponent;
