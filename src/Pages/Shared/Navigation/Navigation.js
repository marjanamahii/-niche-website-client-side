import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#C08DF7' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Lady Bug  Jewellery
                    </Typography>

                    <Link to='/home' style={{ color: 'white', textDecoration: 'none' }}>
                        <Button color="inherit">Home</Button>
                    </Link>

                    <Link to='/exploreAllProducts' style={{ color: 'white', textDecoration: 'none' }}>
                        <Button color="inherit">Explore All Products</Button>
                    </Link>

                    <Link to='/purchase' style={{ color: 'white', textDecoration: 'none' }}>
                        <Button color="inherit">Purchase</Button>
                    </Link>

                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>

                                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
                            </Box>

                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;