import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [page, setPage] = useState('addTodo'); // 'addTodo' or 'viewTasks'
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f9ff21'); // Set the default background color

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []; //To save the todo data in local storage 
    setTodos(storedTodos);
  }, []);

  const saveTodosToLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const addTodo = () => {
    if (task.trim() !== '') {
      const newTodo = { id: Date.now(), task, completed: false };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      saveTodosToLocalStorage(updatedTodos);
      setTask('');
      window.alert('Task added successfully!');
    }
  };

  const markComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const navigateToViewTasks = () => {
    setPage('viewTasks');
    setBackgroundColor('#000000'); // Set the new background color
  };

  const navigateToAddTodo = () => {
    setPage('addTodo');
    setBackgroundColor('#f9ff21'); // Set the default background color
  };

  const filterTodos = (completed) => {
    return todos.filter((todo) => todo.completed === completed);
  };

  return (
    <div className="app-container" style={{ backgroundColor }}>
      <h1>Todo App</h1>
      {page === 'addTodo' && (
        <div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <button onClick={navigateToViewTasks}>View Tasks</button>
        </div>
      )}
      {page === 'viewTasks' && (
        <div>
          <button onClick={navigateToAddTodo}>Go Back</button>
          <button className="clear-button" onClick={clearCompleted}>
            Clear Completed
          </button>
          <div className="completed-todo-list">
            <h2>Completed Todos</h2>
            <ul id='box'>
              {filterTodos(true).map((todo) => (
                <li key={todo.id} className="completed">
                  {todo.task}
                </li>
              ))}
            </ul>
          </div>
          <div className="due-todo-list">
            <h2>Due Todos</h2>
            <ul id='box'>
              {filterTodos(false).map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => markComplete(todo.id)}
                  />
                  {todo.task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;