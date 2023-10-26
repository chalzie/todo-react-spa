import FinishedTaskComponent from '../tasks/FinishedTaskComponent';

interface Props {
  tasks: string[]
}

function FinishedTasksListComponent({ tasks }: Props) {
  return (
    <>
      {tasks.length > 0 && (
      <h3 className="mt-10 self-center">Completed tasks</h3>
      )}

      {tasks.map((task: string, index: number) => (
        <FinishedTaskComponent key={index} task={task} />
      ))}
    </>
  );
}

export default FinishedTasksListComponent;
