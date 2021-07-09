import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import koala from "../../koala.svg"
import { useEffect,useState } from 'react';
import { db } from '../../firebase';


const useStyles = makeStyles((theme) => ({
    Grid: {
        padding: theme.spacing(1),
        display: 'flex',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        margin: theme.spacing(1)
    },
}));

function UserCard(props) {
    const userRef = db.collection('users')
    const [userDetails, setUserDetails] = useState({
        avatar: props.avatar,
        nickname: props.nickname,
    })
    // useEffect(()=> {
    //     const getUserDetails = async () => {
    //         await userRef.where('email','==',(props.email)).get().then((querySnapshot)=> {
    //             querySnapshot.forEach((doc)=> {
    //                 setUserDetails({
    //                     avatar: doc.data().avatar,
    //                     nickname: doc.data().nickname
    //                 })
    //             })
    //         }).catch((error)=>{
    //             console.log("Error: ",error)
    //         })
    //     }
    //     getUserDetails();
    // })
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.Grid}  >
            {/* <Grid item xs={12} className={notificationClass}  > */}
            <Avatar alt="Remy Sharp" src={userDetails.avatar} />
            <Box mt={1} ml={2}>
                <Typography color="textPrimary" variant="body1" >
                    {userDetails.nickname}
                </Typography>
            </Box>
        </Grid>
    )
}

export default UserCard

UserCard.defaultProps = {
    nickname: 'Sample User',
    avatar: koala,
    email: 'cartalover@gmail.com'
}