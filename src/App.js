import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import AuthView from './features/auth/auth_view';
import { useSelector, useDispatch } from 'react-redux';
import {selectAuthState } from './features/auth/auth_slice';
import Typography from '@mui/material/Typography';
import authReducer, {login,logout} from './features/auth/auth_slice';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ProductListView from './features/product_list/product_list_view';
function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector(selectAuthState);
  if (!isAuthenticated) {
    return (
      <AuthView></AuthView>
    );
  } else {
    return (<Grid>
      <Typography variant="h2" gutterBottom>
      Authenticated ! Hello {username};
    </Typography>
    <Button variant="outlined" onClick={()=>dispatch(logout())}>Log out</Button> 
    <ProductListView></ProductListView>
    </Grid>); /* todo move to toolbar */
  }

}

export default App;
