import SimpleCard from './Sidebardash'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import UserDropDown from './controls/UserDropDown';
// import { useUserContext } from "../UserContext";

const useStyles = makeStyles((theme) => ({
    rightbar: {
        overflow: 'hidden',
        alignItems: 'center',
        padding: '10px 30px',
        background: '#E5EEFC',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },

    },
}));
const Rightbar = () => {
    const classes = useStyles();
    // const currentUser = useUserContext();
    return (
        <div className={classes.rightbar} >
            <Grid container direction='column' justify='flex-start' spacing={1}>
                <Grid item xs={12}>
                    <Grid container direction='row' justify='flex-end' spacing={1} alignItems='center'>
                        <UserDropDown />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid component={Typography} variant='h5'>Popular Projects</Grid>
                    <SimpleCard pname='Emotion Detection through Facial Expression' />

                </Grid>
            </Grid>
        </div>
    )
}

export default Rightbar
