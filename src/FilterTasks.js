import React from 'react';
import { setFilter } from './redux/actions';
import { connect } from 'react-redux';
const FilterTasks = ({ setFilter }) => {
    return (
        <div className='row mt-5'>
            <div>
                <label className='me-4'>
                    <input type="radio" className='me-2' name="filter" onChange={() => setFilter('all')} />
                    All
                </label>
                <label className='me-4'>
                    <input type="radio" className='me-2' name="filter" onChange={() => setFilter('completed')} />
                    Completed
                </label>
                <label className='me-4'>
                    <input type="radio" className='me-2' name="filter" onChange={() => setFilter('incomplete')} />
                    Incomplete
                </label>
            </div>
        </div>
    );
};

export default connect(null, { setFilter })(FilterTasks);
