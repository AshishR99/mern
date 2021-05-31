import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Avatar, Typography, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import memories from "../../images/memories.jpg";
import p1 from "../../images/p1.png";


import { useDispatch } from 'react-redux';
import { LOGOUT } from "../../constants/actionTypes";
import Sidenav from "../Sidenav/Sidenav";
import decode from 'jwt-decode';

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log(user);


  const logout = () => {
    dispatch({ type: LOGOUT });

    history.push('/');

    setuser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if(token){

      const decodeToken = decode(token);
      if(decodeToken.exp * 1000 < new Date().getTime()) 
      logout ();
      

    }

    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // const user = null;

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          {/* <Sidenav /> */}
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h5"
            align="center"
          >
            <b>PhotoBook App By Ashish</b>
          </Typography>
          <img
            className={classes.image}
            src={p1}
            alt="icon"
            height="60"
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>

            
          )}

<Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              PhotoBooks
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
