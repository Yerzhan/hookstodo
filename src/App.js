import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Hooks" },
    { text: "Submit code to github" }
  ]);

  return (
    <div className="app">
      <h1 style={{color: "#fff", textAlign: "center"}}>Simple TODO list made with React hooks</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
