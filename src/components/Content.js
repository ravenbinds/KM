import React, { useState, useEffect } from 'react';
import Post from "./Post/index";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import man from "../man.svg"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Top from './Top';
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import db from './firebase';
import { Link } from 'react-router-dom';
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
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    {groupName}
                </Typography>
            </Grid>
            <Grid container direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12} sm={6} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h6">
                        Posts
                    </Typography>
                </Grid>
                <Button variant="contained" className={classes.button} component={Link} to='/login'>
                    Add Post
                </Button>
            </Grid>
            <Grid container justify="flex-end"
                alignItems="center" className={classes.Grid}>
                <IconButton aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}>
                    <MoreVertRoundedIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem component={Link} to='/Login' onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Grid>
            <Grid className="Contents-space">

                {
                    posts.map(post => (
                        <Post nickname={post.nickname} avatar={post.avatar} caption={post.caption} image={post.image} />
                    ))
                }
            </Grid>

        </div>
    )
}

export default Contents
