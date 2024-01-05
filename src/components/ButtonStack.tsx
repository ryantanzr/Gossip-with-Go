import React from "react";
import { Link } from "react-router-dom";

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonStack: React.FC = () => {
    return(
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
                startIcon={<LogoutIcon />}
                component={ Link }
                to= "/">
                    Logout
            </Button>
            <Button
                variant='contained'
                startIcon={<HomeIcon />}
                component={ Link }
                to= "/">
                Home
            </Button>
            <Button 
                variant='contained'
                startIcon={<AccountBoxIcon />}
                component={ Link }
                to= "/profile">
                    Profile
            </Button>
        </Stack>
        );
};

export default ButtonStack;