import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Textfield from '../FormsUI/Textfield'
import Button from '../FormsUI/Button';
import Checkbox from '../FormsUI/Checkbox';

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
    email: '',
    password: '',
    rememberMe: false,
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
    // termsOfService: Yup.boolean()
    // .oneOf([true], 'The terms and conditions must be accepted.')
    // .required('The terms and conditions must be accepted.'),
    rememberMe: Yup.boolean(),
    password: Yup.string().label('Password').required().min(4, 'Seems a bit short...').max(10, 'We prefer insecure system, try a shorter password.'),
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
                                <Button> Sign In </Button>
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
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}


{/* <Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
    <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
        Sign in
</Typography>
    <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
        />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
            Sign In
</Button>
        <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
  </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
    </form>
</div>
<Box mt={8}>
    <Copyright />
</Box>
</Container> */}