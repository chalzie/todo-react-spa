import React from 'react';

import './_styles.scss';

export type FinishedTaskComponentProps = {
  task: string;
};

class FinishedTaskComponent extends React.Component<FinishedTaskComponentProps> {
  render() {
    const { task } = this.props;
    return <div className="task flex justify-between mb-1 finished">{task}</div>;
  }
}

export default FinishedTaskComponent;
