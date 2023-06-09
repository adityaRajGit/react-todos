import { configureStore } from '@reduxjs/toolkit';
const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'DELETE_TODOS':
        return {
          ...state,
          todos: [],
        };
      default:
        return state;
    }
  };
  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
  
  export default store;
  