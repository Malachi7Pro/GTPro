import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/services">
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button component={Link} to="/requests">
        <ListItemText primary="New Request" />
      </ListItem>
    </List>
  );

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            style={{ marginRight: 16 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            GTPro
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="profile" component={Link} to="/profile">
            <Avatar alt="User Profile" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}

export default Header;
