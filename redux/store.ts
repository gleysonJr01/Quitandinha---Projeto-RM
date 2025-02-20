import { configureStore } from '@reduxjs/toolkit';
import listaReducer from './listaSlice';

const store = configureStore({
  reducer: {
    carrinho: listaReducer,
  },
});

export default store;
