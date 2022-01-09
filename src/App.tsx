import React from 'react';
import './App.css';
import { Todo } from './component/Todo';
import { TodoStore } from './component/TodoStore';

function App() {
  return (
    <div className="App">
      <Todo todoStore={TodoStore}/>
    </div>
  );
}

export default App;
