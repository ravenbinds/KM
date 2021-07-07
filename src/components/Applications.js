import { Grid,Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from "@material-ui/core/Avatar";
import man from "../man.svg";
import { useState, useEffect } from 'react';
import { db } from '../firebase';

const useStyles = makeStyles((theme) => ({
    Grid: {
        padding: theme.spacing(1),
        // border: '1px solid grey',
        minWidth: '250px',
        maxWidth: '600px',
        borderRadius: '8px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    empty: {
        border: '1px dotted grey',
        minWidth: '200px',
        maxWidth: '200px',
        borderRadius: '5px',
        color: 'grey',
        textAlign: 'center',
    }
}))

function Application(props) {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.Grid} spacing={1}>
            <Grid item xs={12}>
                <Grid container direction='row' spacing={1} alignItems='center'>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={props.avatar} />
                    </Grid>
                    <Grid item>
                        <Typography color='primary'>
                            {props.username}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    {props.applicationText}
                </Typography>
            </Grid>
            { /* Some mechanism to accept the application. Will do that later */}
        </Grid>
    )
}

function Applications({hgid}) {

    const classes = useStyles();
    const [applicationList,setApplicationList] = useState([])

    useEffect(()=> {
        
        db.collection('HuntingGround').doc(hgid).collection('applications').onSnapshot((snapshot)=> {
            setApplicationList(snapshot.docs.map((doc)=>doc.data()))
        })
    },[]);

    function tocheck() {
        console.log('varunnundo: ',applicationList)
    }

    tocheck();

    const applicationlist = [
        {username: 'Sample Username', applicationText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus deserunt recusandae atque inventore suscipit similique fugit praesentium adipisci animi quod?'},
        {username: 'Sample Username', applicationText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus deserunt recusandae atque inventore suscipit similique fugit praesentium adipisci animi quod?'},
    ]
    return (
        <Grid container direction='column' spacing={1}>
            {
                (applicationList.length>0) ? 
                    (
                        applicationList.map((item)=> (
                            <Grid item xs={12}>
                                <Application username={item.nickname} applicationText={item.applicationText} avatar={item.avatar}/>
                            </Grid>
                        ))
                    )
                    :
                    (
                        <Grid item xs={12} className={classes.empty}>
                            <Typography >Nothing to see here</Typography>
                        </Grid>
                    )
            }
            
        </Grid>
    )
}

export default Applications
