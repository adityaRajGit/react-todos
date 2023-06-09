// Define your initial state
const initialState = {
    todos: [],
  };
  
  // Define your reducer function
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'MARK_TODO_COMPLETE':
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: true,
              };
            }
            return todo;
          }),
        };
      case 'DELETE_ALL_TODOS':
        return {
          ...state,
          todos: [],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  