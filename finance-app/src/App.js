import logo from './logo.svg';
import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleCompletion = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion} />
        </div>
    );
};

export default App;
