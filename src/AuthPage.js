import React, {useState, useEffect} from 'react'
import firebase from 'firebase'
import app from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from '@material-ui/core';
import logo from "./Logo.svg"
import koala from './koala.svg'
import Grid from '@material-ui/core/Grid';
import { AccountCircle } from '@material-ui/icons';
import {db} from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(24),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        display: 'flex',
        maxWidth: '64',
        maxHeight: '39px',
        position: 'static',
        color: '#FFFFFF',
        background: '#8C98FF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

    },
  }));

function AuthPage() {

    const [currentUser, setCurrentUser] = useState()
    const [id, setId] = useState()
    const provider = new firebase.auth.GoogleAuthProvider()

    useEffect(() => {
        app.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user)
        })
    },[])

    const authWithGoogle = () => {
        firebase.auth().signInWithPopup(provider).then((cred) => {
           return db.collection("users").doc(cred.user.uid).set(
               {
                   name: cred.user.displayName,
                   avatar: cred.user.photoURL,
                   nickname: cred.user.displayName,
                   email: cred.user.email,
                   emailverified: cred.user.emailVerified,
               }
           );
        })
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Grid container spacing={2} align='center'>
                    <Grid item xs={12}>
                        <img src={koala} alt="KOALA MATRIX" style={{ height: "5rem", width: "5rem"}}></img>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" className={classes.button} onClick={authWithGoogle} startIcon={<AccountCircle/>}>Sign In With Google</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default AuthPage
