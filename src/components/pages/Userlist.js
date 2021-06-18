import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
// import classNames from 'classnames'
// import Top from '../Top';
import { db } from '../../firebase';

const useStyles = makeStyles((theme) => ({


    Grid: {
        padding: theme.spacing(1),

    },
    Grid2: {
        padding: theme.spacing(1),
        display: 'flex',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        margin: theme.spacing(1)
    },

    button: {
        maxWidth: '64',
        maxHeight: '39px',
        position: 'static',
        color: '#FFFFFF',
        background: '#8C98FF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

    },

}));

const UserLists = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([])
    useEffect(() => {
        db.collection("users")

            .onSnapshot((snapshot) => {
                setUsers(snapshot.docs.map((doc) => doc.data()))
            });
    }, []);

    return (
        <div className="Contents">
            <Grid container justify="space-evenly" alignItems="flex-start">
                <Grid item xs={12} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Users List
                    </Typography>
                </Grid>
                <Grid container justify="space-evenly" alignItems="flex-start" >
                    {
                        users.map(user => (
                            <Grid item xs={12} className={classes.Grid2}  >
                                {/* <Grid item xs={12} className={notificationClass}  > */}
                                <Avatar alt="Remy Sharp" src={user.avatar} />
                                <Box mt={1} ml={2}>
                                    <Typography color="textPrimary" variant="body1" >
                                        {user.nickname}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default UserLists
