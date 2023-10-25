import "./_styles.scss";

interface Props {
  task: string;
}

const FinishedTaskComponent = ({ task }: Props) => {
  return (
    <div className="task flex justify-between mb-1 finished">{task}</div>
  );
};

export default FinishedTaskComponent;
