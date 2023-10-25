import { MdOutlineDone, MdOutlineRemoveCircle } from "react-icons/md";

import "./styles.scss";

const TaskComponent = ({
  task = null,
  type = "",
  onRemoveTask,
  onMarkAsDoneTask,
}) => {
  const taskClassNames = ["task", "flex", "justify-between", "mb-1"];
  type === "done"
    ? taskClassNames.push("finished")
    : taskClassNames.push("unfinished");

  return (
    <div className={taskClassNames.join(" ")}>
      {task && <span>{task}</span>}

      {type !== "done" && (
        <div className="actions">
          <MdOutlineDone
            className="done cursor-pointer mr-2"
            onClick={() => onMarkAsDoneTask(task)}
          />
          <MdOutlineRemoveCircle
            className="remove cursor-pointer"
            onClick={() => onRemoveTask(task)}
          />
        </div>
      )}
    </div>
  );
};

export default TaskComponent;
