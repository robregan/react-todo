import TodoItem from './TodoItem'
import './style.css';
import React from 'react'

function App() {
  return (
   <div className="todo-list">
     <TodoItem />
     <TodoItem />
     <TodoItem />
     <TodoItem />
   </div>
  );
}

export default App;
