import React from 'react';

import TodoListComponent from './components/TodoListComponent';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="my-10">My Todo App</h1>

        <TodoListComponent title="My todo list" />

        <TodoListComponent />
      </div>
    );
  }
}

export default App;
