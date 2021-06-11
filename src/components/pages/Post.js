import React, { forwardRef } from "react";
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import "./Post.css";
import { Avatar, Checkbox, FormControlLabel, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Comment, Favorite, FavoriteBorder } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    large: {

        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    Grid: {
        padding: theme.spacing(1),

    },
    Box1: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(0.8),
        background: '#FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '8px',

    },
    user: {
        fontWeight: '700',
    },
    Box: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(1),
        position: 'static',
        borderRadius: '8px',
        border: '1px #bebebe',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(121, 121, 121, 0.19)',
        background: '#fff',
    },
}));
const Post = forwardRef(
    ({ nickname, caption, image, avatar }, ref) => {
        const classes = useStyles();

        return (
            <Grid container className={classes.Box} ref={ref}>
                <Grid container direction="row" justify="flex-start" alignItems="center"  >
                    <Grid item className={classes.Box1}>
                        <Avatar src={avatar} className={classes.large} />
                    </Grid>
                    <Grid item className={classes.Box1}>
                        <Typography className={classes.user}>
                            {nickname}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" className="Post-image">
                    <Grid item className={classes.Grid}>
                        <img alt={""} src={image} />
                    </Grid>
                </Grid>
                <Grid container className={classes.Grid}>
                    {caption}
                </Grid>
                <Grid container justify="space-evenly" >
                    <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="primary" />} name="checkedH" />}
                    />

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <Comment />
                    </IconButton></Grid>
                <Grid >
                    Comments
                </Grid>
            </Grid>
        );
    }
);

export default Post;