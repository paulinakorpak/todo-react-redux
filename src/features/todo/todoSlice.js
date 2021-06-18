import { createSlice } from '@reduxjs/toolkit';
import { FILTER_ALL } from './filters';

const initialState = {
  items: [],
  filter: FILTER_ALL,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;

export const selectItems = (state) => state.todo.items;

export default todoSlice.reducer;
