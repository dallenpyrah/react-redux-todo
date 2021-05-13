import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todo/TodoSlice'
import coinsReducer from '../features/coin/coinSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    coins: coinsReducer
  },
});
