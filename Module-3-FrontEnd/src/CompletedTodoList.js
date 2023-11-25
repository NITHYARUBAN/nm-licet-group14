import React from 'react';

const CompletedTodoList = ({ todos, markComplete }) => {
    return (
        <div>
            <h2>Completed Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="completed">
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

export default CompletedTodoList;
