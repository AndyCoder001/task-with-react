// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add a task');
            return;
        }

        onAdd({ title, completed: false });

        setTitle('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <input type="submit" value="Save Task" />
        </form>
    );
};

export default TaskForm;
