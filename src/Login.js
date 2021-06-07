import React, { useCallback, useContext } from "react";

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Textfield from './components/FormsUI/Textfield'
import Button from './components/FormsUI/Button';
import Checkbox from './components/FormsUI/Checkbox';


import { withRouter, Redirect } from "react-router";
import app from "./firebase";
import { AuthContext } from "./contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
  // rememberMe: false,
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().label('Password').required().min(6, 'Seems a bit short...').max(10, 'We prefer insecure system, try a shorter password.'),
});



const Login = ({ history }) => {
  const classes = useStyles();

  const handleLogin = useCallback(async values => {
      // event.preventDefault();
      const email = values["email"]
      const password = values["password"]
      // alert(event.elements)
      try { await app.auth().signInWithEmailAndPassword(email, password);
            history.push("/");
          } 
      catch (error) { alert(error);}
    }, [history] );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
            <div className={classes.paper}>
                <Formik
                    initialValues={{...INITIAL_FORM_STATE}}
                    validationSchema={FORM_VALIDATION}
                    onSubmit = {handleLogin}
                    handleSubmit = {handleLogin}
                >
                    <Form>                    
                        <Grid container spacing={1}>
                            <Grid item xs={12} align='center'>
                                <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
                            </Grid>
                            <Grid item xs={12} align='center'>
                                <Typography component="h1" variant="h5">Sign in</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield label="Email Address" name="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield name="password" label="Password" type='password' />
                            </Grid>
                            <Grid item xs={12}>
                                <Checkbox name="rememberMe" label="Remember Me" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type='submit'> Sign In </Button>
                            </Grid>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href='/SignUp' variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
        </Container>
  );
};

export default withRouter(Login);