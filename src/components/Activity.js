
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Top from './Top';
import man from '../man.svg'
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

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
const Activity = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Top />
            <Grid container justify="space-evenly" alignItems="flex-start">
                <Grid item xs={12} className={classes.Grid}>
                </Grid>
                <Grid item xs={12} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Notifications
</Typography>
                </Grid>
                <Grid container justify="space-evenly" alignItems="flex-start" className={classes.Grid}>
                    <Grid item xs={12} className={classes.Grid2}  >
                        <Avatar alt="Remy Sharp" src={man} />
                        <Box mt={1} ml={2}>

                            <Typography color="textPrimary" variant="body1" >
                                THis is a sample notification. THis is a sample notification. THis is a sample notification.
</Typography></Box>
                    </Grid>
                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>
                    <Grid item xs={12} className={classes.Grid2} >
                        <Avatar alt="Remy Sharp" src={man} />
                        <Box mt={1} ml={2}>

                            <Typography color="textPrimary" variant="body1" >
                                THis is a sample notification. THis is a sample notification. THis is a sample notification.
</Typography></Box>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default Activity
