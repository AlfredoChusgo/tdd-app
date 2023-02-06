import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import authReducer, {login,logout} from './auth_slice';

function AuthView() {
    const dispatch = useDispatch();
    const [username,setUsername] = useState("admin");
    const [password,setPassword] = useState("password");

    return (
        <React.Fragment>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h2" gutterBottom>
                                Authenticate
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" value={username} onChange={(e)=>setUsername(e.target.value)} label="Username" variant="outlined" />
                            <TextField id="outlined-basic" value={password} onChange={(e)=>setPassword(e.target.value)} label="Password" type="password" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={()=>dispatch(login({username:username,password:password}))}>Log in</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default AuthView;