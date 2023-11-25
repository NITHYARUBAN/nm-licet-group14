import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <div>
            <h2>Add Todo</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
        </div>
    );
};

export default AddTodo;
