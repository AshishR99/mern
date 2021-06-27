import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link, useHistory, useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SaveIcon from '@material-ui/icons/Save';
import decode from "jwt-decode";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PublishIcon from '@material-ui/icons/Publish';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  sign: {
    marginLeft: "75%",
    color: "white",
    backgroundColor: "black",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "20%",
      color: "white",
      backgroundColor: "black",
    },
  },

  menuIcon:{
   marginLeft: "-76em",
   [theme.breakpoints.down("sm")]: {
    marginLeft: "-11em",
    
  },

  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  image: {
    marginLeft: "110%",
    marginTop: "5px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    marginLeft: "56%",
    position:"fixed",
    top:"1px",
    right:"27px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      position:"fixed",
    top:"-21px",
    right:"-14px",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  logout: {
    marginLeft: "20px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    marginTop:"-5px"
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    // color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: deepPurple[500],
  },

  photobook:{
    position:"fixed",
    top:"17px",
    left:"69px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      top:"13px",
      left:"49px",
    },

  },

  toolbar1:{

    position:"fixed",
    backgroundColor:"#3a43ea",
    width:"100%",
    top:"0px",
    left:"px",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  console.log(user);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickPost = () => {
    history.push("/posts");
  };
  



  const logout = () => {
    dispatch({ type: LOGOUT });

    history.push("/");

    setuser(null);
  };

  //   const handleClickPost = () => {
  //     history.push("/posts");
  //   };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) logout();
    }

    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar1}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.photobook}>
              PhotoDiaries
            </Typography>
            <Toolbar className={classes.toolbar}>
              {user?.result ? (

                 

                <div className={classes.profile}>
                   <IconButton 
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              // className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
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
                    <LockOpenIcon fontSize="small" />
                    &nbsp;Logout
                  </Button>

                  

                  {/* <Button style={{marginRight:"-58px"}}
                variant="contained"
                // className={classes.logout}
                color="secondary"
                onClick={handleClickPost}
              >
                <HomeIcon fontSize="small"/> 
                &nbsp;Home
              </Button> */}
                </div>
              ) : (
                <Button
                  style={{backgroundColor:"white",
                   position:"fixed", top:"12px", right:"78px" }}
                  component={Link}
                  to="/auth"
                  variant="outlined"
                  color="secondary"
                >
                  <VpnKeyIcon fontSize="small" />
                  &nbsp; Sign In
                </Button>
              )}
            </Toolbar>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Home"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => history.push("/posts")}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <MailIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Upload Post", "Friends Diaries"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => history.push("/forms")}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <PublishIcon /> : <MailIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[,"Your Profile", "Setting"].map((text, index) => (
              <ListItem
                button
                key={text}
                // onClick={() => history.push("/posts")}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <SettingsApplicationsIcon /> : <AccountCircleIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Saved"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon >
                  {index % 4 === 0 ? <InboxIcon /> : <SaveIcon /> }
                </ListItemIcon >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
        // className={clsx(classes.content, {
        //   [classes.contentShift]: open,
        // })}
        >
          {/* <div className={classes.drawerHeader} /> */}
          {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
         
        </Typography> */}
        </main>
      </div>
    </>
  );
}
