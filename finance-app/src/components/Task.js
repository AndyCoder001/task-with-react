import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.title}
                <button onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }}>
                    X
                </button>
            </h3>
        </div>
    );
};

export default Task;
