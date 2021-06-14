import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import LiveHelpIcon from '@material-ui/icons/LiveHelpRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import { NavLink } from 'react-router-dom';
export const mainListItems = (
    <div>
        <ListSubheader disableSticky>Account</ListSubheader>
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
            <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button component={NavLink} to="/groups">
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button component={NavLink} to="/Huntingground">
            <ListItemIcon>
                <TrackChangesRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Hunting Ground" />
        </ListItem>
        <ListItem button component={NavLink} to="/createpages">
            <ListItemIcon>
                <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="Support Requests" />
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
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="CSE dept" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="FOSSers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="VAST" />
        </ListItem>
    </div>
);