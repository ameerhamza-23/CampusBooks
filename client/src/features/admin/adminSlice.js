// adminSlice.js

import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    books: [],
  },
  reducers: {
    // Setter reducers
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setBooks: (state, action) => {
      state.books = action.payload
    },
    
    // Getter reducers
    getUsers: (state) => {
      return state.users;
    },
    getBooks: (state) => {
      return state.books;
    },
  },
});

export const {
  setUsers,
  setBooks,
  getUsers,
  getBooks,
} = adminSlice.actions;

export default adminSlice.reducer;
