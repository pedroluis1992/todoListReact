import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import UserIcon from '@material-ui/icons/People';
import { ListItemIcon, ListItemText, AppBar , Toolbar, Typography, Button, IconButton, Menu, MenuItem, SvgIcon} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link,
  Redirect
} from 'react-router-dom';
import { logout } from '../../utils'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [title, setTitle] = useState("Home");
  const [redirect, setRedirect] = useState(false);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutFunction = () => {
    setRedirect(true);
    logout()
  }
  if (redirect) {
    return <Redirect to='/login' />

  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <StyledMenuItem onClick={() => setTitle("Home")}>
                <ListItemIcon>
                  <SvgIcon >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </StyledMenuItem>
            </Link>
            <Link to="/users">
              <StyledMenuItem onClick={() => setTitle("Users")}>
                <ListItemIcon>
                  <UserIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={"Users"} />
              </StyledMenuItem>
            </Link>
          </StyledMenu>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Button color="inherit" onClick={() => logoutFunction()}>Log out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}