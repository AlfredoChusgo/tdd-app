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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, username } = useSelector(selectAuthState);
  if (!isAuthenticated) {
    return (
      <AuthView></AuthView>
    );
  } else {
    return (<Grid>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Humble Shopping cart
          </Typography>
          <Button color="inherit"onClick={()=>dispatch(logout())} >Hello {username} - Logout</Button>
        </Toolbar>
      </AppBar>
    <ProductListView></ProductListView>
    </Grid>);
  }

}

export default App;
