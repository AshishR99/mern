import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from 'react-router-dom';
import Icon from "./icon";
// import { signin, signup } from '../../actions/auth';
import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup} from '../../actions/auth';

const initialState = { firstName:'', lastName:'', email:'', password:'', confirmPassword: ''}


const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [showPassword, setshowPassword] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const [formdata, setFormdata] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
        console.log(formdata);

        if (isSignup) {
          dispatch(signup(formdata, history))
          
        } else {
          dispatch(signin(formdata, history))
          
        }
  };

  const handleChange = (e) => {

    setFormdata({...formdata, [e.target.name]: e.target.value});
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/posts')
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = () => {
    console.log("Google sign in was not successfull, try agaon later");
  };

  const switchMode = () => {
    setisSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const handleShowPassword = () =>
    setshowPassword((prevShowPassword) => !prevShowPassword);

  //   const isSignup = true;

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  // autoComplete="fname"
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  // autoComplete="fname"
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="26238241331-ijjmbk1u0fidus4nfjit06scg00uu74i.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="secondary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Dont have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
