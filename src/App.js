import TodoItem from './TodoItem'
import './style.css';
import React from 'react'
import todoData from './todoData'



function App() {

  const todosComponent = todoData.map(item => <TodoItem todo={item} />)
  return (
   <div className="todo-list">
     { todosComponent }
   </div>
  );
}

export default App;
