import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { List, ListItem, ListItemIcon, ListItemText, Box, Chip, Button, Typography } from '@material-ui/core';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SpeedRoundedIcon from '@material-ui/icons/SpeedRounded';
import Milestones from './milestones';
import man from "../../man.svg"
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Top from '../Top';
import { db } from '../../firebase';
const useStyles = makeStyles((theme) => ({


    Box: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(2),
        flexDirection: 'column',
        background: "#FFFFFF",
        border: '1px solid #985DFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },
    Grid: {
        padding: theme.spacing(1),

    },
    Grid2: {
        padding: theme.spacing(2),
        display: 'flex',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
    },
    Grid1: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
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
const Projectpage = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState([])
    useEffect(() => {
        db.collection("projects")

            .onSnapshot((snapshot) => {
                setProjects(snapshot.docs.map((doc) => doc.data()))
            });
    }, []);
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            {
                projects.map(project => (
                    <Grid item xs={12} className={classes.Grid}>
                        <Typography align="left" color="textPrimary" variant="h6" padding="40px">
                            #Projects
                 </Typography>

                        <Grid container direction="column" justify="center" alignItems="center" className={classes.Grid1}>
                            <Box color="primary.main" fontSize="h5.fontSize">
                                {project.pname}</Box>
                            <Grid item xs={12} className={classes.Grid}>

                                <Box color="secondary.main" fontSize="subtitle1.fontSize">

                                    {project.description}
                                </Box>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" className={classes.Grid}>
                                <Grid item xs={2} >
                                    Project Status:</Grid>
                                <Grid container xs={2} >
                                    <SpeedRoundedIcon />
                                    {project.status}</Grid>
                            </Grid>
                            <Grid container justify="center" alignItems="center" >
                                <Button variant="contained" component={Link} to="/Huntingground/projectcollab" className={classes.button} >
                                    Track this project                </Button></Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.Grid}>
                        </Grid>
                        <Grid item xs={12} className={classes.Grid1} alignItems="flex-start">

                            <Milestones /></Grid>

                        <Box className={classes.Box} mt={2} >
                            <Grid container xs={3} className={classes.Grid} justify="space-between" >

                                <TrackChangesRoundedIcon fontSize="large" color="primary" />
                                <Box color="secondary.main" fontSize={17}>ON THE HUNT
                            </Box></Grid>

                            <Grid container xs={12} direction="row" justify="space-between" alignItems="flex-end">

                                <List dense > Looking for:
                                <ListItem >
                                        <ListItemIcon>
                                            +
                    </ListItemIcon>
                                        <ListItemText primary="Logo Designer" />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            +
                    </ListItemIcon>
                                        <ListItemText primary="Software Tester" />
                                    </ListItem>

                                </List>

                                <Button variant="contained" component={Link} to="/Projectpage" className={classes.button} >
                                    Apply              </Button>
                            </Grid>
                        </Box>
                        <Grid item xs={12} className={classes.Grid}>
                        </Grid>
                        <Grid container className={classes.Grid2} background="primary" alignItems="flex-start" >

                            <Box color="secondary.main" fontSize={17}>TEAM
                            </Box>
                            <Grid item xs={12} className={classes.Grid2} >
                                <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                                <Box mt={1} ml={2}>

                                    <Typography color="textPrimary" variant="body1" >
                                        {project.teamMembers}
                                    </Typography></Box>
                            </Grid>


                            <Grid item xs={12} className={classes.Grid}>
                            </Grid>

                            <Box color="secondary.main" fontSize={17}>MENTOR
                            </Box>
                            <Grid item xs={12} className={classes.Grid2} >
                                <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                                <Box mt={1} ml={2}>

                                    <Typography color="textPrimary" variant="body1" >
                                        {project.mentor}
                                    </Typography></Box>
                            </Grid>

                            <Grid item xs={12} className={classes.Grid}>
                            </Grid>
                            <Box color="secondary.main" fontSize={17}>LINKS
                            </Box>

                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>
                                <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>

                                    <GitHubIcon />
                                    <Box ml={4} >
                                        https://github.com/xionghc/Facial-Expression-Recognition</Box>
                                </Grid>
                                <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>

                                    <YouTubeIcon />
                                    <Box ml={4} >
                                        https://youtu.be/fkgpvkqcoJc</Box>
                                </Grid></Grid>

                            <Box color="secondary.main" fontSize={17}>TAGS
                            </Box>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>

                                <Chip
                                    label="#machinelearning"
                                    onClick={handleClick}
                                    variant="outlined"
                                />
                                <Chip
                                    label="#python"
                                    onClick={handleClick}
                                    variant="outlined"
                                /><Chip
                                    label="#mainproject"
                                    onClick={handleClick}
                                    variant="outlined"
                                />

                            </Grid>




                            <Box color="secondary.main" mt={2} mb={2} fontSize={17}>GALLERY
                            </Box>
                            <Grid container direction="row" justify="center" alignItems="center" className={classes.Grid}>
                                Nothing to see here

                        </Grid>

                            <Box color="secondary.main" mt={2} mb={2} fontSize={17}>SUPPORTED BY
                            </Box>
                            <Grid container direction="row" justify="center" alignItems="center" className={classes.Grid}>
                                Nothing to see here
                        </Grid>

                            <Box color="secondary.main" mt={2} mb={2} fontSize={17}>STAKEHOLDERS
                            </Box>
                            <Grid container direction="row" justify="center" alignItems="center" className={classes.Grid}>
                                Nothing to see here

                        </Grid>

                            <Box color="secondary.main" mt={2} mb={2} fontSize={17}>STATS
                            </Box>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>
                                Tracked by
                        </Grid>
                        </Grid>

                    </Grid>
                ))}

        </div >
    )
}

export default Projectpage
