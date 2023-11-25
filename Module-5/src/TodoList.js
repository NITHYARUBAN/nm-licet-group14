import React from 'react';

const TodoList = ({ todos, markComplete }) => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
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
    );
};

export default TodoList;
