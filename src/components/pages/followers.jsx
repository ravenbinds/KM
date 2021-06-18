import { ButtonGroup, Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import man from '../../man.svg'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    medium: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        margin: theme.spacing(1)
    },
    card: {
        background: "white",
        border: '0.01em solid #000',
        padding: theme.spacing(1)
    },
    tag:{
        background: "#F9FCFF",
        border: '0.2px solid grey',
    }
}));

function Tag(props) {

    const classes = useStyles();

    return(
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
                                <Typography>{props.username}</Typography>
                            </Grid>
                            <Grid item>
                                {props.followsYou ? <Tag textContent='Follows you'/>:<></>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='body2'>{props.bio}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                {props.following ? <Button variant='contained'>Following</Button>:<Button variant='outlined'>Follow</Button> }
            </Grid>
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

function followers(props) {
  return (
    <Grid container direction="coloumn" spacing={0} justify='flex-start' alignItems='flex-start' alignContent='flex-start'>
        <Grid item xs={12}>{/* Top Bar */}</Grid>
        <Grid item xs={12}  >
            <ButtonGroup fullWidth={true}>
                <Button>Followers</Button>
                <Button>Following</Button>
            </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
            <Grid container direction='column' >
                <Grid item>
                    <Typography variant='h5'>People you may know</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction='column' justify='flex-start'>
                        <Grid item xs={12}>
                            {/* map it here */}
                            <Usercard />
                            <Usercard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>{/* People you follow */}</Grid>
    </Grid>
  );
}

export default followers;
