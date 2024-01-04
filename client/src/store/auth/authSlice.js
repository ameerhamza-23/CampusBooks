// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  name: '',
  accessToken: '',
  role:'',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      const { id, name, role, token } = action.payload;
      state.userId = id;
      state.userName = name;
      state.accessToken = role;
      state.token = token;
      state.isAuthenticated = true;
    },
    clearAuthData: (state) => {
      state.userId = null;
      state.userName = '';
      state.accessToken = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
