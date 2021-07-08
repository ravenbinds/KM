import { ButtonGroup, Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import man from '../../man.svg'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import { db } from "../../firebase";
const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
        display: 'flex',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        margin: theme.spacing(1)
    },
    medium: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        margin: theme.spacing(1)
    },

    tag: {
        borderRadius: '8px',
        background: theme.palette.primary,

    }
}));

function Tag(props) {

    const classes = useStyles();

    return (
        <Typography className={classes.tag} variant='body2' align='center'>
            {props.textContent}
        </Typography>
    )
}

Tag.defaultProps = {
    textContent: 'Tag text'
}

function Usercard(props) {

    const classes = useStyles();

    return (
        <Grid container direction="row" className={classes.card} justify='flex-start' alignItems='center'>
            <Grid item xs={1}>
                <Avatar alt="Remy Sharp" src={props.avatar} className={classes.medium} />
            </Grid>
            <Grid item xs={9}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography>{props.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' spacing={1}>
                            <Grid item>
                                <Typography color="primary">{props.username}</Typography>
                            </Grid>
                            {/* <Grid item>
                                {props.followsYou ? <Tag textContent='Follows you' /> : <></>}
                            </Grid> */}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='body2'>{props.bio}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={2}>
                {props.following ? <Button variant='contained'>Following</Button> : <Button variant='outlined'>Follow</Button>}
            </Grid> */}
        </Grid>
    );
}

Usercard.defaultProps = {
    avatar: man,
    name: 'name here',
    bio: 'bio',
    followsYou: true,
    username: '@username',
    following: false,
}

function Following(props) {
    console.log("ab", props.location.aboutProps)
    const userid = props.location.aboutProps.userid
    const [follower, setFollower] = useState([])
    useEffect(() => {
        db.collection("followers").where("followingWho", "==", userid)
            .onSnapshot((snapshot) => {
                setFollower(snapshot.docs.map((doc) => doc.data()))
            });
    }, []);
    return (
        <Grid container spacing={0} justify='flex-start' alignItems='flex-start' alignContent='flex-start'>
            <Grid item xs={12}>{/* Top Bar */}</Grid>
            <Grid item xs={12}  >
                {/* <ButtonGroup fullWidth={true}>
                    <Button> */}
                <Typography variant='h5'>Following</Typography>
                {/* </Button>
                </ButtonGroup> */}
            </Grid>
            <Grid item xs={12}>
                <Grid container direction='column' >

                    <Grid item>
                        {follower.map((follow) => (
                            <Grid container direction='column' justify='flex-start'>

                                <Grid item xs={12}>

                                    <Usercard avatar={follow.avatar} name={follow.followerUsername} username={follow.followernickname} />

                                </Grid>

                            </Grid>
                        ))
                        }
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>People you may know</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>{/* People you follow */}</Grid>
        </Grid>
    );
}

export default Following;

Following.defaultProps = {
    userid: "UZCft9bmKdVi10w0goYiYLzaaRf1",
}