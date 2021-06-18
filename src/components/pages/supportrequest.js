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
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    buttons: {
        alignSelf: "flex-end",
    }
});
function Supportreq() {
    const [posts, setPosts] = useState([])
    const classes = useStyles();
    useEffect(() => {
        db.collection("supportreq").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()
            ));
        }
        )
    }, []);
    return (
        <div>

            {
                posts.map(post => (
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" src={post.avatar} className={classes.avatar} />
                            }
                            title={post.username}
                            subheader={post.date}
                        />
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.buttons}>
                            <Button variant="outlined" size="small" color="primary">
                                Accept
                            </Button>
                            <Button variant="outlined" size="small" color="primary">
                                Cancel
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </div>)
}

export default Supportreq
