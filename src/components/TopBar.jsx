import logo from "../Logo.svg"
import { makeStyles } from '@material-ui/core/styles';
import { MenuRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topbar: {
        gridColumn: 'span 2',
        display: 'flex',
        alignItems: 'center',
        padding: '.1em 1em',
        zIndex:'5',
        boxShadow: '0px 2px 15px #47474722',
        borderRadius: '0px 0px 1em 1em',
        [theme.breakpoints.up('md')]: {
            display:'none'
        },
    },
    logo: {
        height: '50%',
        padding: '0em 1em'
    }
}));

const TopBar = ({ open, setOpen }) => {
    const classes = useStyles();
    return (
        <header className={classes.topbar}>
            <IconButton className={classes.exm} onClick={() => setOpen(!open)}><MenuRounded/></IconButton>
            <img src={logo} className={classes.logo} alt="KM" />
        </header>
    )
}

export default TopBar
