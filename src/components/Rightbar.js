import SimpleCard from './Sidebardash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    rightbar: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        alignItems: 'center',
        padding: '10px 20px 10px 10px',
        position: 'inherit',
        left: '970px',
        top: '0px',
        background: '#E5EEFC',
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
    },
}));
const Rightbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.rightbar} >
            <SimpleCard />
        </div>
    )
}

export default Rightbar
