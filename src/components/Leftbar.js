import logo from "../Logo.svg"
import { mainListItems, secondaryListItems } from './Dashboard/listItems';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { ArrowBack } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    leftbar: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        position: 'static',
        left: '0px',
        overflow: 'hidden',
        top: '0px',
        background: '#FFFFFF',
        width: 'calc("fit-content" + 2px)',
        borderRadius: '0px 1.5em 1.5em 0px',
        boxShadow: '3px 0 14px #4747470f',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            transform: 'translateX(-100%)',
            boxShadow: 'none',
            zIndex: 5,
            // display: 'none',
            height: '100vh',
            transition: '.5s all cubic-bezier(0, 0.55, 0.45, 1)',
            "&[open]": {
                display: 'flex',
                boxShadow: '38px 0 50vw 100vw #000000aa',
                zIndex: 5,
                transform: 'translateX(0%)',
            }
        },
        "& .active": {
            color : '#985DFF',
            "& .MuiSvgIcon-root" : {
                fill: '#985DFF',
            },
            "& .MuiListItemText-root" : {
                fontWeight: 'bold'
            },
        },
        "& .MuiListSubheader-root" : {
            fontWeight: 'bold',
            color: 'black',
        }
    },
    logo : {
        width: '25%',
        minWidth: '30px',
        maxWidth: '8em',
        margin: '1em '
    },
    topsection: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    close: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    }
}));

const Leftbar = ({ open, setOpen }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.leftbar} open={open}>
            <div className={classes.topsection}>
                <img src={logo} className={classes.logo} alt="KM" />
                <IconButton className={classes.close} onClick={() => setOpen(!open)}><ArrowBack/></IconButton>
            </div>
            <Divider />
            <List className={classes.list} onClick={() => setOpen(!open)} primary>{mainListItems}</List>
            <Divider />
            <List className={classes.list} onClick={() => setOpen(!open)}>{secondaryListItems}</List>
        </Grid>
    )
}

export default Leftbar

