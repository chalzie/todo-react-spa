import React from 'react';

import { MdSave } from 'react-icons/md';

import './_styles.scss';

export type NewTaskComponentProps = {
  onAddTask: (task: string) => void;
};

export type NewTaskComponentState = {
  title: string
};

class NewTaskComponent extends React.Component<NewTaskComponentProps, NewTaskComponentState> {
  constructor(props: NewTaskComponentProps) {
    super(props);
    this.state = {
      title: '',
    };
  }

  addNewTask = () => {
    const { title } = this.state;
    const { onAddTask } = this.props;
    if (title !== '') { onAddTask(title); }
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="new-task flex items-center mb-3">
        <input
          value={title}
          onChange={(e) => this.setState({ title: e.target.value })}
          onKeyDown={(e) => e.key === 'Enter' && this.addNewTask()}
          type="text"
          placeholder="e.g. do the dishes, clean the room..."
          className="w-full p-2"
        />
        {title !== '' && (
        <div className="save-icon ml-2">
          <MdSave
            size="1.25em"
            className="cursor-pointer"
            onClick={() => this.addNewTask()}
          />
        </div>
        )}
      </div>
    );
  }
}

export default NewTaskComponent;
