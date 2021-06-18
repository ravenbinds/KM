
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Top from './Top'
import man from '../man.svg'
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import classNames from 'classnames'
// import ProjectLists from './pages/Projectlist';
// import UserLists from './pages/Userlist';



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

    unreadBox: {
        background: 'rgba(140, 152, 255, 0.15)'
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

function Notification(props) {
    const [isRead, setRead] = useState(props.read)

    const classes = useStyles();

    const notificationClass = classNames({
        'classes.Grid2': true,
        'classes.unreadBox': !isRead,
    })

    return (
        <Grid item xs={12} className={classes.Grid2}  >
            {/* <Grid item xs={12} className={notificationClass}  > */}
            <Avatar alt="Remy Sharp" src={man} />
            <Box mt={1} ml={2}>
                <Typography color="textPrimary" variant="body1" >
                    {props.message}
                </Typography>
            </Box>
        </Grid>
    )
}

const Notifications = () => {
    const classes = useStyles();

    const notifications = [
        { read: true, message: "THis is a sample notification. THis is a sample notification. THis is a sample notification." },
        { read: false, message: "THis is a sample notification. THis is a sample notification. THis is a sample notification." },
    ]

    return (
        <div className="Contents">
            <Top />
            <Grid container justify="space-evenly" alignItems="flex-start">
                <Grid item xs={12} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Notifications
                    </Typography>
                </Grid>

                <Grid container justify="space-evenly" alignItems="flex-start" >
                    {
                        notifications.map(notification => (
                            <Notification read={notification.read} message={notification.message} />
                        ))
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Notifications
