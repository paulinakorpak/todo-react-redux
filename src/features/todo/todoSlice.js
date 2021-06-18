import { createSlice } from '@reduxjs/toolkit';
import { FILTER_ALL } from './filters';

const initialState = {
  items: [],
  filter: FILTER_ALL,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
