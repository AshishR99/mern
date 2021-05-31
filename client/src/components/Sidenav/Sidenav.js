import React, { useEffect } from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Hidden,
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  List,
  Avatar,
  Typography,
} from "@material-ui/core";
// import Logo from "../../images/Logo.png";
import Grid from "@material-ui/core/Grid";
import { Link, withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import DashboardIcon from "@material-ui/icons/Dashboard";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BusinessIcon from "@material-ui/icons/Business";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SearchIcon from "@material-ui/icons/Search";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import { logoutUser } from "../../redux/actions/authActions";
import GroupIcon from "@material-ui/icons/Group";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { deepOrange, green } from "@material-ui/core/colors";
import AssignmentIcon from '@material-ui/icons/Assignment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BurstModeIcon from '@material-ui/icons/BurstMode';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  flexExpand: {
    flex: "1 1 auto",
  },
  // avatarRoot: {
  //   cursor: "pointer",
  // },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        "&$selected": {
          background: "#2B2B2B",
          color: "#fff",
        },
      },
    },
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const InterLayout = ({ location, children, auth, history, logoutUser }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [adminOpen, adminSetOpen] = React.useState(false);
  const [dmopen, dmsetOpen] = React.useState(false);
  const [qsopen, qssetOpen] = React.useState(false);
  const [dbopen, dbsetOpen] = React.useState(false);
  const [psopen, pssetOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    adminSetOpen(true);
    setOpen(true);
    dbsetOpen(false);
    pssetOpen(false);
    dmsetOpen(false);
  };

  const dataMngClick = () => {
    dmsetOpen(true);
    setOpen(true);
    dbsetOpen(false);
    pssetOpen(false);
    adminSetOpen(false);
  };

  const dashboardClick = () => {
    dbsetOpen(true);
    setOpen(true);
    dmsetOpen(false);
    pssetOpen(false);
    adminSetOpen(false);
  };

  const questionClick = () => {
    qssetOpen(true);
    setOpen(true);
    dbsetOpen(false);
    dmsetOpen(false);
    adminSetOpen(false);
  };

  const powersearchClick = () => {
    pssetOpen(true);
    setOpen(true);
    dbsetOpen(false);
    dmsetOpen(false);
    adminSetOpen(false);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { pathname } = location;
  const { user } = auth;
  // console.log(user)
  const drawer = (
    <div>
      <div className="sideMenuContainer">
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MuiThemeProvider theme={theme}>
            {
              user && user.role && user.role && user.role.role !== 2 ?
                <>
                  {/* Admin */}
                  {
                    user && user.role && user.role && user.role.role === 0 ?
                      <>
                        <ListItem button onClick={handleClick} className="sideMinuItem">
                          <ListItemIcon className="icons">
                            <AssignmentIndIcon />
                          </ListItemIcon>
                          <ListItemText primary="Admin" />
                          {adminOpen ? <ExpandMore /> : <ExpandLess />}
                        </ListItem>
                        <Collapse
                          className="subMenu"
                          in={adminOpen}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            <ListItem
                              button
                              // className={classes.nested}
                              className="sideMinuItem"
                              onClick={() => history.push("/adduser")}
                            >
                              <ListItemIcon className="icons">
                                <PersonAddIcon />
                              </ListItemIcon>
                              <ListItemText primary="Add User" />
                            </ListItem>
                            <ListItem
                              button
                              // className={classes.nested}
                              className="sideMinuItem"
                              onClick={() => history.push("/userlist")}
                            >
                              <ListItemIcon className="icons">
                                <GroupIcon />
                              </ListItemIcon>
                              <ListItemText primary="User List" />
                            </ListItem>
                          </List>
                        </Collapse>
                      </>
                      : null
                  }






                  {/* Data Management */}
                  <ListItem
                    button
                    onClick={dataMngClick}
                    className="sideMinuItem"
                  >
                    <ListItemIcon className="icons">
                      <PermDataSettingIcon />
                    </ListItemIcon>
                    <ListItemText primary="Data Management" />
                    {dmopen ? <ExpandMore /> : <ExpandLess />}
                  </ListItem>
                  <Collapse
                    className="subMenu"
                    in={dmopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className="sideMinuItem"
                        onClick={() => history.push("/addsurvey")}
                      >
                        <ListItemIcon className="icons">
                          <CloudUploadIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Survey Data" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <Collapse
                    className="subMenu"
                    in={dmopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className="sideMinuItem"
                        onClick={() => history.push("/filelist")}
                      >
                        <ListItemIcon className="icons">
                          <VisibilityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Data View" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <Collapse
                    className="subMenu"
                    in={dmopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className="sideMinuItem"
                        onClick={() => history.push("/datatabs")}
                      >
                        <ListItemIcon className="icons">
                          <DataUsageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Exception Data" />
                      </ListItem>
                    </List>
                  </Collapse>


                  {/* Question Management */}
                  <ListItem
                    button
                    onClick={questionClick}
                    className="sideMinuItem"
                  >
                    <ListItemIcon className="icons">
                    
                      <SupervisedUserCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customer" />
                    {qsopen ? <ExpandMore /> : <ExpandLess />}
                  </ListItem>
                  <Collapse
                    className="subMenu"
                    in={qsopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className="sideMinuItem"
                        onClick={() => history.push("/questionlist")}
                      >
                        <ListItemIcon className="icons">
                          <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Question List" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <Collapse
                    className="subMenu"
                    in={qsopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    {/* <List component="div" disablePadding>
                    <ListItem
                      button
                      className="sideMinuItem"
                      onClick={() => history.push("/filelist")}
                    >
                      <ListItemIcon className="icons">
                        <VisibilityIcon />
                      </ListItemIcon>
                      <ListItemText primary="Data View" />
                    </ListItem>
                  </List>
                </Collapse>
                <Collapse
                  className="subMenu"
                  in={qsopen}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className="sideMinuItem"
                      onClick={() => history.push("/datatabs")}
                    >
                      <ListItemIcon className="icons">
                        <DataUsageIcon />
                      </ListItemIcon>
                      <ListItemText primary="Exception Data" />
                    </ListItem> */}
                    {/* </List> */}
                  </Collapse>

                  {/* Dashboard */}
                  <ListItem
                    button
                    onClick={dashboardClick}
                    className="sideMinuItem"
                  >
                    <ListItemIcon className="icons">
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboards" />
                    {dbopen ? <ExpandMore /> : <ExpandLess />}
                  </ListItem>
                  <Collapse
                    className="subMenu"
                    in={dbopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className="sideMinuItem"
                        onClick={() => history.push("/360view")}
                      >
                        <ListItemIcon className="icons">
                          <RotateLeftIcon />
                        </ListItemIcon>
                        <ListItemText primary="360 View" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <Collapse
                    className="subMenu"
                    in={dbopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className="sideMinuItem"
                        onClick={() => history.push("/industryview")}

                      >
                        <ListItemIcon className="icons">
                          <EmojiObjectsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Industry View" />
                      </ListItem>
                    </List>
                  </Collapse>
                  {/* <Collapse
                    className="subMenu"
                    in={dbopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className="sideMinuItem"
                      //  onClick={() => history.push("/consumerform")}
                      >
                        <ListItemIcon className="icons">
                          <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Organization View" />
                      </ListItem>
                    </List>
                  </Collapse> */}
                  <Collapse
                    className="subMenu"
                    in={dbopen}
                    timeout="auto"
                    unmountOnExit
                  >

                    {/* <List component="div" disablePadding>
                    <ListItem button className="sideMinuItem"
                     onClick={() => history.push("/questionlist")}
                    >
                      <ListItemIcon className="icons">
                        <ListAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Question List" />
                    </ListItem>
                  </List>
                </Collapse>
                <Collapse
                  className="subMenu"
                  in={dbopen}
                  timeout="auto"
                  unmountOnExit
                > */}
                    <List component="div" disablePadding>
                      <ListItem button className="sideMinuItem"
                        onClick={() => history.push("/questiondashboard")}>
                        <ListItemIcon className="icons">
                          <BurstModeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Prospect Question Dashboard" />
                      </ListItem>
                    </List>
                    <List component="div" disablePadding>
                      <ListItem button className="sideMinuItem"
                        onClick={() => history.push("/prospectdashboard")}>
                        <ListItemIcon className="icons">
                          <LocalLibraryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Prospect View" />
                      </ListItem>
                    </List>
                  </Collapse>

                  {/* Power Search */}

                  <ListItem
                    button
                    onClick={powersearchClick}
                    className="sideMinuItem"
                  >
                    <ListItemIcon className="icons">
                      <SearchIcon />
                    </ListItemIcon>
                    {/* <ListItemText primary="Power Search" /> */}
                    <ListItemText primary="Reports and data Extract" />
                    {psopen ? <ExpandMore /> : <ExpandLess />}
                  </ListItem>
                  <Collapse
                    className="subMenu"
                    in={psopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className="sideMinuItem">
                        <ListItemIcon className="icons">
                          <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reporting" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <Collapse
                    className="subMenu"
                    in={psopen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className="sideMinuItem">
                        <ListItemIcon className="icons">
                          <ImportExportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Export Data" />
                        
                      </ListItem>
                    </List>
                  </Collapse>
                </>
                :
                <>
                  <ListItem button onClick={handleClick} className="sideMinuItem">
                    <ListItemIcon className="icons">
                      <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    {adminOpen ? <ExpandMore /> : <ExpandLess />}
                  </ListItem>
                  {/* <Collapse
                    className="subMenu"
                    in={adminOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem button className="sideMinuItem"
                        onClick={() => history.push("/consumerform")}
                      >
                        <ListItemIcon className="icons">
                          <QuestionAnswerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Question View" />
                      </ListItem>
                    </List>
                  </Collapse> */}
                </>
            }
          </MuiThemeProvider>
        </MenuList>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Hidden smDown implementation="css">
          <CssBaseline />
          <AppBar
            style={{ backgroundColor: "black", color: "white" }}
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ marginTop: "10px" }}>
                <Link to="/dashboard">hello</Link>
              </div>
              <span className={classes.flexExpand}></span>
              <div>

                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenuClick}
                  color="inherit"
                >
                  <Button
                    style={{ textTransform: "none" }}
                    // variant="outlined"
                    color="inherit"
                    startIcon={<AccountCircle />}
                  >
                    {/* My Account */}
                    {user && user.name}
                  </Button>
                  {/* <AccountCircle /> */}
                </IconButton>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <StyledMenuItem component={Link} to="/userprofile">
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="User Profile" />
                  </StyledMenuItem>
                  <StyledMenuItem component={Link} to="/resetpassword">
                    <ListItemIcon>
                      <VpnKeyIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Reset Password" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => logoutUser(history)}>
                    <ListItemIcon>
                      <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sign Out" />
                  </StyledMenuItem>
                </StyledMenu>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div style={{ textAlign: "right" }}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                    <ChevronLeftIcon />
                  )}
              </IconButton>
            </div>
            <Divider />
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>{children}</main>
      </Grid>
    </div>
  );
};

InterLayout.propTypes = {
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
//   mapDispatchToProps
)(withRouter(InterLayout));
