import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {authenticate } from './auth_user';
const initialState = {
    isAuthenticated: false,
    username: '',
  };

export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    login:(state,action)=>{
        let isAuthenticated = authenticate(action.payload);
        if(isAuthenticated){
          state.isAuthenticated = isAuthenticated;
          state.username = action.payload.username
        }
    },
    logout:(state)=>{
        state.isAuthenticated = false;
        state.username = '';
    }
  }
});

export const { login, logout } = authSlice.actions;
export const selectAuthState = (state) => state.auth;
export default authSlice.reducer;