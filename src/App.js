// src/App.js
import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FilterTasks from './FilterTasks';

const App = () => {
  return (
    <div className="container mt-5">
      <h1>Task Manager</h1>
      <TaskForm />
      <FilterTasks />
      <TaskList />
    </div>
  );
};

export default App;
