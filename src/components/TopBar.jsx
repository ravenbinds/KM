import logo from "../logo.svg"
import { makeStyles } from '@material-ui/core/styles';
import { MenuRounded, ArrowDropDown, NotificationsOutlined } from '@material-ui/icons';
import { IconButton, Avatar, Box, Button, Grow, Paper, Popper, Menu, MenuItem } from '@material-ui/core';
import UserDropDown from "./controls/UserDropDown";

const useStyles = makeStyles((theme) => ({
    topbar: {
        gridColumn: 'span 2',
        display: 'flex',
        alignItems: 'center',
        padding: '.1em 1em',
        zIndex: '5',
        boxShadow: '0px 2px 15px #47474722',
        borderRadius: '0px 0px 1em 1em',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    logo: {
        height: '50%',
        padding: '0em 1em'
    },
    userDropdown: {
        marginLeft: "auto",
        padding: "0",
        borderRadius: "500px",
        "& .photo": {
            height: "6vh",
            width: "6vh",
        },
    },
}));

const TopBar = ({ open, setOpen }) => {
    const classes = useStyles();

    return (
        <header className={classes.topbar}>
            <IconButton className={classes.exm} onClick={() => setOpen(!open)}><MenuRounded /></IconButton>
            <img src={logo} className={classes.logo} alt="KM" />
            <UserDropDown />
        </header>
    )
}

export default TopBar
