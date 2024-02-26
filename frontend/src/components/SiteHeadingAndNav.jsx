import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { logUserOut } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CribIcon from '@mui/icons-material/Crib';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import { styled } from '@mui/system';


export default function MenuAppBar() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const AnimatedTypography = styled(Typography)({
    animation: `$fadeIn 1s ease-in`,
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  });

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
    }}>
      <AppBar style={{ position: 'fixed', color: 'white', display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 0, background: '#b55cf0', boxShadow: 10  }}>
        <Toolbar sx={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>
          {/* Left section */}
          <div style={{ display: 'flex', alignItems: "flex-start"}}>
            <IconButton onClick={() => navigate('/')} sx={{color:'white'}}>
              <HomeIcon />
            </IconButton>
            <IconButton onClick={() => navigate('/posts')} sx={{color:'white'}}>
              <ForumIcon />
            </IconButton>
          </div>
          <div style={{display: 'flex', flexGrow: 8, justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
            <CribIcon/>
            <AnimatedTypography variant="h6" component="div" sx={{ ml: 1, boxShadow:10 }}>
              Stork
            </AnimatedTypography>
          </div>
          {/* Middle section (flexible space) */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right section */}
          <div sx={{color: 'white'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{color: 'white'}}

            >
              <AccountCircle sx={{color:'white'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            {currentUser ? (
                [
                  <MenuItem key="profile" onClick={handleClose}>
                    <NavLink to={`/users/${currentUser.id}`}>My Profile</NavLink>
                  </MenuItem>,
                  <MenuItem key="stats" onClick={handleClose}>
                    <NavLink to={`/logs/${currentUser.id}`}>My Stats</NavLink>
                  </MenuItem>,
                  <MenuItem key="logout" onClick={handleLogout}>Log Out</MenuItem>
                ]
              ) : (
                [
                  <MenuItem key="login" onClick={handleClose}>
                    <NavLink to='/login'>Login</NavLink>
                  </MenuItem>,
                  <MenuItem key="signup" onClick={handleClose}>
                    <NavLink to='/sign-up'>Sign Up</NavLink>
                  </MenuItem>
                ]
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
