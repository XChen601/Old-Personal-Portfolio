import { Toolbar, Typography, AppBar, Grid, IconButton, Menu, MenuItem, Box, Button  } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Home", "Projects"]

function Navbar(){
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="relative" sx={{backgroundColor: 'black'}}>
            <Toolbar sx={{py:1}}>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                        <MenuItem key={page} onClick={()=> {navigate(`/${page}`); handleCloseNavMenu();}}>
                            <Typography textAlign="center">
                                {page}
                            </Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Link to="/Home">
                    <IconButton size="large">
                        <HomeIcon sx={{fontSize: 45}}/>
                    </IconButton>
                </Link>
                <Typography variant="h4" color="white" sx={{ flexGrow: 1, display: { md: 'flex', justifyContent: 'flex-start' }, fontSize: 'max(24px, 1.6vw)', fontWeight: 600 }}>
                    Xing Chen
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                    {pages.map((page) => (
                        <Button onClick={() => navigate(`/${page}`)}
                        key={page}
                        sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, paddingRight: 3, paddingLeft: 3 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Button onClick={() => document.getElementById('contact').scrollIntoView()}
                    sx={{ my: 2, color: 'rgb(86, 176, 194)', display: 'block', fontSize: 18, paddingRight: 3, paddingLeft: 3 }}>
                    Contact</Button>
            </Toolbar>
        </AppBar>
    );

}

export default Navbar