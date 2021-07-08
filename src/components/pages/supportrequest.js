import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader } from '@material-ui/core';
import { db } from '../../firebase';
import { useUserContext } from '../../UserContext';
const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(2),
    },
    buttons: {
        alignSelf: "flex-end",
    }
}));

function Supportreq({category}) {
    const [posts, setPosts] = useState([])
    const classes = useStyles();
    const currentUser = useUserContext();

    useEffect(() => {
        db.collection("supportreq").where('category','==',category).where('email','==',currentUser.email).onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()
            ));
        }
        )
    }, []);

    return (
        <div>

            {   (posts.length>0) ?
                (posts.map(post => (
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" src={post.avatar} className={classes.avatar} />
                            }
                            title={post.nickname}
                            subheader={post.timestamp}
                        />
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    {post.requestDescription}
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    {post.projectTitle}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.buttons}>
                            <Button variant="outlined" size="small" color="primary">
                                Cancel
                            </Button>
                            <Button variant="outlined" size="small" color="primary">
                                Accept
                            </Button>
                        </CardActions>
                    </Card>
                ))) : (
                    <Typography>Nothing to see here</Typography>
                )
            }
        </div>)
}

export default Supportreq
