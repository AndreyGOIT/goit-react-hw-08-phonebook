import { register, login, logout, fetchCurretUser } from './auth-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.error = null;
        state.token = token;
        state.user = user;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.error = null;
        state.token = token;
        state.user = user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = { name: '', email: '' };
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurretUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurretUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurretUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      });
  },
});

export default authSlice.reducer;
