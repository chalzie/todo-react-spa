import TaskComponent from '../tasks/TaskComponent';

interface Props {
  tasks: string[],
  removeTask: (task: string) => void,
  markAsDone: (task: string) => void
}

function TasksListComponent({ tasks, removeTask, markAsDone }: Props) {
  return (
    <>
      {tasks.length === 0 && (
      <div className="font-size-4 italic self-center">
        No tasks yet, start by adding one!
      </div>
      )}

      {tasks.map((task, index) => (
        <TaskComponent
          key={index}
          task={task}
          onRemoveTask={removeTask}
          onMarkAsDoneTask={markAsDone}
        />
      ))}
    </>
  );
}

export default TasksListComponent;
