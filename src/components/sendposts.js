import React, { useState } from "react";
import { Avatar, Button, ButtonGroup, InputBase, TextField, Typography } from "@material-ui/core";
import { db, storage } from "../firebase";
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './useForm';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import VideocamIcon from '@material-ui/icons/Videocam';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import FileUpload from "./pages/FileUpload";
const useStyles = makeStyles((theme) => ({
    large: {

        width: theme.spacing(6),
        height: theme.spacing(6),
    },
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
const Sendposts = (props) => {
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setImage(url)
                    });

            }
        )

    }
    const classes = useStyles();
    var dateString = new Date();
    const [progress, setProgress] = useState(0)
    const [sendCaption, setsendCaption] = useState("");
    const [image, setImage] = useState(null);
    const sendPosts = (e) => {
        e.preventDefault();
        dateString = Date.now()
        db.collection("posts").add({
            nickname: props.nickname,
            caption: sendCaption,
            image: image,
            avatar: props.avatar,
            userid: props.uid,
            likes: 0,
            timestamp: formatDate(dateString),
        }, { merge: true });

        setProgress(0);
        setsendCaption("");
        setImage(null);
    }



    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    console.log(formatDate(dateString))
    return (
        <div>
            <Form>
                <Box className={classes.Box}>
                    <Grid container alignItems="flex-start" justify="flex-start" spacing={2}>

                        <Grid item xs={12}>
                            <Grid container direction='row' justify='flex-start' alignItems='center'>
                                <Grid item >
                                    <Avatar className={classes.large} src={props.avatar} />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        InputProps={{ disableUnderline: true }}
                                        onChange={(e) => setsendCaption(e.target.value)}
                                        value={sendCaption}
                                        className={classes.input}
                                        multiline
                                        placeholder="What's happening?"
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container direction='row' >
                                <Grid item xs={8} justify="space-between" alignItems='center'>
                                    <Typography align="left" color="primary">
                                        <AddAPhotoIcon /> <input type="file" onChange={handleChange} />
                                    </Typography>

                                    {/* <ButtonGroup color="primary" size="small">
                                        <Button><AddAPhotoIcon /></Button>
                                        <Button><VideocamIcon /></Button>
                                        <Button><EmojiEventsIcon /></Button>
                                    </ButtonGroup> */}
                                </Grid>

                                <Grid item xs={2} justify="space-between" align="right">
                                    <Button onClick={handleUpload} className={classes.button}>
                                        Upload picture
                                    </Button>    </Grid>
                                <Grid item xs={2} justify="space-between" align="right">

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
