import { Box, IconButton, Button, Avatar, Menu, MenuItem } from '@material-ui/core'; 
import app from 'firebase'
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDropDown, NotificationsOutlined } from '@material-ui/icons';
import { useState } from "react";
import { useUserContext } from "../../UserContext";


const useStyles = makeStyles((theme) => ({
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

const UserDropDown = () => {
    const classes = useStyles();

    const currentUser = useUserContext();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display="flex" flexDirection="row" alignItems="center" ml="auto" >
            <IconButton component={NavLink} to='/Notifications' size="small"><NotificationsOutlined /></IconButton>
            <Button className={classes.userDropdown} disableElevation onClick={handleClick}>
                <ArrowDropDown style={{ color: '#aaa' }} />
                <Avatar className="photo" src={currentUser.photoURL} />
            </Button>

            <Menu
                id="simple-menu"
                elevation={1}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} dense="true" component={NavLink} to="/Myprofile">My account</MenuItem>
                <MenuItem onClick={handleClose} dense="true" onClick={() => app.auth().signOut()}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default UserDropDown;
