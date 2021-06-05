import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Textfield from '../FormsUI/Textfield'
import Button from '../FormsUI/Button';
import Checkbox from '../FormsUI/Checkbox';
import { AddCircleOutlineOutlined } from '@material-ui/icons';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
    phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
    termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
    password: Yup.string().label('Password').required().min(4, 'Seems a bit short...').max(10, 'We prefer insecure system, try a shorter password.'),
    passwordConfirmation: Yup.string().test('passwords-match', 'Passwords must match', function(value){return this.parent.password === value}).required('Required')
});

export default function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Formik
                    initialValues={{...INITIAL_FORM_STATE}}
                    validationSchema={FORM_VALIDATION}
                    onSubmit = {values => {
                        console.log(values);
                    }}
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
                                {/* <Checkbox name="termsOfService" legend="Terms Of Service" label="I agree" /> */}
                                <Checkbox name="termsOfService" label="I agree to terms and conditions" />
                            </Grid>
                            <Grid item xs={12}>
                                <Button> Sign Up </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Link href='/Login' variant='body2'>Already have an account? Sign in.</Link>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}