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
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CribIcon from '@mui/icons-material/Crib';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';

export default function MenuAppBar() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar>
        <IconButton onClick={() => navigate('/')}>
          <HomeIcon />
        </IconButton>

        <IconButton onClick={() => navigate('/posts')}>
          <ForumIcon />
        </IconButton>

          <CribIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stork
          </Typography>
            {/* user icon functionality */}
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
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
