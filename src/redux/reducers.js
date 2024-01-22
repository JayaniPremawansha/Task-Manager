const initialState = {
    tasks: [],
    filter: 'all',
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), title: action.payload.title, completed: false }],
        };
      case 'COMPLETE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, completed: !task.completed } : task
          ),
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload.filter,
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  