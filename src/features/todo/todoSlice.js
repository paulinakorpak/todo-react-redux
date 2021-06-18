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
  },
});

export const { addItem } = todoSlice.actions;

export default todoSlice.reducer;
