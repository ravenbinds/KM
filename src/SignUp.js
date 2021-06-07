  
import React, { useCallback } from "react";

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Textfield from './components/FormsUI/Textfield'
import Button from './components/FormsUI/Button';
import Checkbox from './components/FormsUI/Checkbox';
import { AddCircleOutlineOutlined} from '@material-ui/icons';
import { FormControl } from '@material-ui/core';

import { withRouter } from "react-router";
import app from "./firebase";


const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  // phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
  termsOfService: Yup.boolean()
  .oneOf([true], 'The terms and conditions must be accepted.')
  .required('The terms and conditions must be accepted.'),
  password: Yup.string().label('Password').required().min(4, 'Seems a bit short...').max(10, 'We prefer insecure system, try a shorter password.'),
  passwordConfirmation: Yup.string().test('passwords-match', 'Passwords must match', function(value){return this.parent.password === value}).required('Required')
});

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    // event.preventDefault();
    // const { email, password } = event.target.elements;
    // alert(event.target.elements)
    const email = event["email"]  //not event but to understand commented section
    const password = event["password"]
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Formik
                    initialValues={{...INITIAL_FORM_STATE}}
                    validationSchema={FORM_VALIDATION}
                    onSubmit = {handleSignUp}
                >
                    <Form>                    
                        <Grid container spacing={1} align='center'>
                            <Grid item xs={12}>
                                <Avatar className={classes.avatar}> <AddCircleOutlineOutlined/> </Avatar>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="h1" variant="h5">Sign Up</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield name="firstName" label="First Name" />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield name="lastName" label="Last Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield label="Email Address" name="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield name="password" label="Password" type='password' />
                            </Grid>
                            <Grid item xs={12}>
                                <Textfield name="passwordConfirmation" label="Confirm Password" type='password' />
                            </Grid>
                            <Grid item xs={12}>
                                <Checkbox name="termsOfService" legend="Terms Of Service" label="I agree" />
                                {/* <FormControl control= {<Checkbox name="termsOfService" label="I agree to terms and conditions" />}>
                                
                                </FormControl> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="su"> Sign Up </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Link href='/Login' variant='body2'>Already have an account? Sign in.</Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
        </Container>
  );
};

export default withRouter(SignUp);