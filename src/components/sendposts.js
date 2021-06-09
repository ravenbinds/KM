import React, { useState } from "react";
import { Avatar, Button, ButtonGroup, InputBase, Typography } from "@material-ui/core";
import db from "../firebase";
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './useForm';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import VideocamIcon from '@material-ui/icons/Videocam';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
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
    input: {
        marginLeft: theme.spacing(1),
        display: 'flex',

    },
    Box: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(2),
        flexDirection: 'column',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },

    Grid: {
        padding: theme.spacing(1),
    },
}));
const Sendposts = (nickname, avatar) => {
    const classes = useStyles();
    const [sendCaption, setsendCaption] = useState("");
    const [sendImage, setsendImage] = useState("");
    const sendPosts = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            nickname: { nickname },
            caption: sendCaption,
            image: sendImage,
            avatar: { avatar },
        });

        setsendCaption("");
        setsendImage("");
    };
    return (
        <div>
            <Form>
                <Box className={classes.Box}>
                    <Grid container alignItems="flex-start" justify="flex-start" spacing={2}>

                        <Grid item xs={12}>
                            <Grid container direction='row' justify='flex-start' alignItems='center'>
                                <Grid item>
                                    <Avatar className="Post-user-avatar" src={avatar} />
                                </Grid>
                                <Grid item>
                                    <InputBase
                                        onChange={(e) => setsendCaption(e.target.value)}
                                        value={sendCaption}
                                        className={classes.input}
                                        placeholder="What's happening?"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} >
                            <InputBase value={sendImage}
                                onChange={(e) => setsendImage(e.target.value)}
                                className={classes.input}
                                placeholder="Optional: Enter image URL"
                                type="text"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container direction='row' justify='space-between'>
                                <Grid container xs={4} justify="space-around" alignItems='center'>
                                    <Typography align="left" color="primary">
                                        Add
                                    </Typography>
                                    <ButtonGroup color="primary" size="small">
                                        <Button><AddAPhotoIcon /></Button>
                                        <Button><VideocamIcon /></Button>
                                        <Button><EmojiEventsIcon /></Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid container xs={8} justify="flex-end" alignItems="flex-end">
                                    <Button onClick={sendPosts} className={classes.button} type="submit">
                                        Post
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Box>
            </Form>
        </div>
    )
}

export default Sendposts
