import { createSlice } from '@reduxjs/toolkit';
import { FILTER_ALL, filtersMapping } from './filters';

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
    toggleCompleted: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addItem, removeItem, toggleCompleted, setFilter,
} = todoSlice.actions;

export const selectItems = (state) => state.todo.items.filter(filtersMapping[state.todo.filter]);

export default todoSlice.reducer;
