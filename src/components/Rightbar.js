import SimpleCard from './Sidebardash';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useUserContext } from "../UserContext";
import { Box, Avatar } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    rightbar: {
        overflow: 'hidden',
        alignItems: 'center',
        padding: '10px 30px',
        background: '#E5EEFC',
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },

    },
}));
const Rightbar = () => {
    const classes = useStyles();
    const currentUser = useUserContext();
    return (
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.rightbar} >
            <Box component={Avatar} className="Post-user-avatar" alignSelf="flex-end" src={currentUser.photoURL} />
            <Box component={Typography} alignSelf="flex-start" color="textPrimary" fontWeight="bold" variant="h5" >
                Popular Projects
            </Box>
            <SimpleCard />
        </Box>
    )
}

export default Rightbar
