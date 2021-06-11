import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import app from './firebase'
import "./index.css";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, Box } from '@material-ui/core';
import logo from "./logo.svg"
import koala from './koala.svg'
import { AccountCircle } from '@material-ui/icons';
import { db } from './firebase'

const useStyles = makeStyles((theme) => ({
    button: {
        minHeight: '39px',
        color: '#FFFFFF',
        background: '#8C98FF',
        boxShadow: '0px 4px 14px #47474744',
        borderRadius: '10px',
    },
}));

function AuthPage() {

    const [currentUser, setCurrentUser] = useState()
    const [id, setId] = useState()
    const provider = new firebase.auth.GoogleAuthProvider()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

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
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" width="100vw">
            <Box p={3} width="10rem"><img src={koala} alt="KOALA MATRIX" width="100%"></img></Box>
            <Button variant="contained" className={classes.button} onClick={authWithGoogle} startIcon={<AccountCircle />}>Sign In With Google</Button>
        </Box>
    )
}

export default AuthPage
