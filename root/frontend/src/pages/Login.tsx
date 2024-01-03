import LoginIcon from '@mui/icons-material/Login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";

const Login: React.FC = () => {
    return (
        <>        
        <Button 
            variant='contained' 
            startIcon={<ArrowBackIcon />}
            component={ Link }
            to= "/">
                Back
        </Button>

        <h1>Login Page</h1>

        <TextField 
            id="username"
            label="Username" 
            variant="outlined"
            margin="normal"
        />
        <br/>        
        <TextField 
            id="password" 
            label="Password" 
            variant="outlined"
            margin="normal"
        />
        <br/>
        <br/>
    
        <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ t: 2}}>
        <Button 
            variant='contained' 
            startIcon={<LoginIcon />}
            component={ Link }
            to= "/Login">
                Login
        </Button>
        
        <Button 
            variant='contained' 
            startIcon={<AppRegistrationIcon />}
        >
                Register
        </Button>
        </Stack>
        </>

    );
};

export default Login;