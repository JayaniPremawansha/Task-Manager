import React from 'react';
import { connect } from 'react-redux';
const TaskList = ({ tasks }) => {
    return (
    
    <ul className="list-group mt-4">
        {tasks.map(task => (
        <li key={task.id} className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="1" checked={task.completed} />
        <label className="form-check-label" for="firstCheckbox">{task.title}</label>
      </li>
      ))}
    
    
  </ul>
    );
};
const mapStateToProps = (state) => ({
    tasks: state.tasks.filter(task => {
        if (state.filter === 'completed') return task.completed;
        if (state.filter === 'incomplete') return !task.completed;
        return true;
    }),
});

export default connect(mapStateToProps)(TaskList);
