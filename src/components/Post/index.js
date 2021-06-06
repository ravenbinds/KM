import React, { forwardRef } from "react";
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import "./Post.css";
import { Avatar, Checkbox, FormControlLabel, IconButton } from "@material-ui/core";
import { Comment, Favorite, FavoriteBorder } from "@material-ui/icons";

const Post = forwardRef(
    ({ nickname, caption, image, avatar }, ref) => {
        return (
            <Grid className="Post" ref={ref}>
                <header>
                    <Grid className="Post-user">
                        <Grid className="Post-user-avatar">
                            <Avatar src={avatar} alt={nickname} />
                        </Grid>
                        <Grid className="Post-user-nickname">
                            <span>{nickname}</span>
                        </Grid>
                    </Grid>
                </header>
                <Grid className="Post-image">
                    <Grid className="Post-image-bg">
                        <img alt={caption} src={image} />
                    </Grid>
                </Grid>
                <Grid className="Post-caption">
                    <strong>{nickname}</strong> {caption}
                </Grid>
                <Grid container justify="space-evenly" >
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="primary" />} name="checkedH" />}
                    />

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <Comment />
                    </IconButton></Grid>
                <Grid >
                    <strong>{nickname}</strong> {caption}
                </Grid>
            </Grid>
        );
    }
);

export default Post;