import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';
export const mainListItems = (
    <div>
        <ListSubheader disableSticky>Accounts</ListSubheader>
        <ListItem button component={NavLink} to="/" exact={true}>
            <ListItemIcon>
                <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={NavLink} to="/Myprofile">
            <ListItemIcon>
                <FaceRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="My profile" />
        </ListItem>
        <ListItem button component={NavLink} to="/Huntingground">
            <ListItemIcon>
                <TrackChangesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Hunting ground" />
        </ListItem>
        <ListItem button component={NavLink} to="/Notifications">
            <ListItemIcon>
                <NotificationsNoneRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button component={NavLink} to="/Settings">
            <ListItemIcon>
                <SettingsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader disableSticky>Your groups</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="CSE dept" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="FOSSers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="VAST" />
        </ListItem>
    </div>
);