import React, { useState, useEffect } from 'react';
import Post from "./Post/index";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Top from './Top';
import Sendposts from './sendposts';
import FlipMove from "react-flip-move";
//Firebase
import { db } from '../firebase';
import app from 'firebase'


import { useUserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
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

    Grid: {
        padding: theme.spacing(1),
    },
}));

const Contents = () => {
    const classes = useStyles();
    const groupName = "CSE Department VAST"
    const [posts, setPosts] = useState([])
    const [userDetails, setuserDetails] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()
            ));
        }
        )
    }, []);

    const currentUser = useUserContext();


    const ref = db.collection('users').doc(currentUser.uid);

    function getUser(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const userdata = querySnapshot.data();
            setuserDetails(userdata);
            console.log('document retrieved')
        })
        
        setLoading(false)
    }

    useEffect(() => {
        getUser();
    },[])

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div className="Contents">
            <Grid container justify='flex-start' spacing={2}>
                <Grid item xs={12}>
                    <Top />
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row"justify="space-between" alignItems="center">
                        <Grid container>
                            <Grid item>

                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.Grid}>
                                <Typography variant='caption' color=''>#COMMUNITY</Typography>
                                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                                    {groupName}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        {/* <Button variant="contained" className={classes.button} onClick={()=> app.auth().signOut()}>
                            Logout
                        </Button> */}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Sendposts avatar={userDetails.avatar}/>
                    <FlipMove>
                        {   posts.map(post => (
                                <Grid className="Contents-space">
                                    <Post nickname={post.nickname} avatar={post.avatar} caption={post.caption} image={post.image} />
                                </Grid>
                            ))
                        }
                    </FlipMove>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Contents
