import React, { useState } from 'react';
import { addTask } from './redux/actions';
import { connect } from 'react-redux';
const TaskForm = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskTitle);
        setTaskTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className='form-row'>
            <div className='row'>
                <div className='col-8'><input
                    type="text"
                    placeholder="Enter task title"
                    value={taskTitle}
                    className='form-control'
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                </div>
                <div className='col-4'>
                    <button type="submit" className='btn btn-primary'>Add Task</button>
                </div>
            </div>
        </form>
    );
};

export default connect(null, { addTask })(TaskForm);
