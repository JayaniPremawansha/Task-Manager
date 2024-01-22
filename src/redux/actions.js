export const addTask = (title) => ({
    type: 'ADD_TASK',
    payload: {
      title,
    },
  });
  
  export const completeTask = (id) => ({
    type: 'COMPLETE_TASK',
    payload: {
      id,
    },
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: {
      filter,
    },
  });
  