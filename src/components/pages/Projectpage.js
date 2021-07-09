import { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { List, ListItem, ListItemIcon, ListItemText, Box, Chip, Button, Typography } from '@material-ui/core';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Milestones from './milestones';
import man from "../../man.svg"
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Top from '../Top';
import { db } from '../../firebase';
import UserCard from './UserCard'
import { AccessTime, AddRounded, Adjust, CheckCircleOutline, HelpOutlineOutlined } from "@material-ui/icons";
import { useUserContext } from "../../UserContext";
import SimpleModal from "../controls/SimpleModal";
import AddLink from '../Actions/AddLink'

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

function ProjectDescription({project}) {
    var statusIcon
    if (project.status === 'Completed') {
        statusIcon = <CheckCircleOutline/>
    }
    else if (project.status === 'Incomplete') {
        statusIcon = <AccessTime/>
    }
    else if (project.status === 'Freezed') {
        statusIcon = <Adjust/>
    }
    else {
        statusIcon = <HelpOutlineOutlined/>
    }
    return(
        <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
            <Grid item xs={12}>
                <Typography variant='h5' color='primary'>{project.pname}</Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='subtitle1'  color='secondary'>{project.description}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>Project status: {statusIcon} {project.status}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant='contained' color='primary'>
                    Track this project
                </Button>
            </Grid>
        </Grid>
    )
}

function OnTheHunt() {
    const classes = useStyles();
    return(
        <Box className={classes.Box} mt={2} >
            <Grid container xs={3} className={classes.Grid} justify="space-between" >
                <TrackChangesRoundedIcon fontSize="large" color="primary" /> ON THE HUNT
            </Grid>

            <Grid container xs={12} direction="row" justify="space-between" alignItems="flex-end">
                <List dense > Looking for:
                    <ListItem >
                        <ListItemIcon>+</ListItemIcon>
                        <ListItemText primary="Logo Designer" />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>+</ListItemIcon>
                        <ListItemText primary="Software Tester" />
                    </ListItem>
                </List>
                <Button variant="contained" component={Link} to="/Projectpage" className={classes.button} >Apply</Button>
            </Grid>
        </Box>
    )
}

function ShowLink({icon,link}) {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>
            <Grid item xs={2}> {icon} </Grid>
            <Grid item xs={10}> {link} </Grid>
        </Grid>
    )
}

function OtherDetails({project}) {
    const classes = useStyles();
    const currentUser = useUserContext();
    var isOwner = false
    if(currentUser.uid===project.owner){
        isOwner = true
    }
    function check() {
        console.log('Members: ',project.teamMembers)
    }
    check();
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (
        <Grid container className={classes.Grid2} alignItems="flex-start" spacing={1} >
            {/* TEAM */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>TEAM</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <UserCard nickname={project.teamMembers}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* MENTOR */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>MENTOR</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <UserCard nickname={project.mentor}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* LINKS */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>LINKS</Typography>
                        
                    </Grid>
                    <Grid item xs={12}>
                        {
                            project.links && 
                                project.links.github && 
                                    <ShowLink icon={<GitHubIcon/>} link={project.links.github}/>
                        }    
                        {   project.links &&  
                                project.links.youtube &&
                                    <ShowLink icon={<YouTubeIcon/>} link={project.links.youtube}/>
                        }
                        { isOwner &&
                            <SimpleModal body={<AddLink/>} title={'Add link'} isIconButton={true} icon={<AddRounded/>} iconSize={'small'}/>
                        }
                    </Grid>
                </Grid>
            </Grid>
            {/* TAGS */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>TAGS</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid} spacing={1}>
                            <Grid item>
                                <Chip label="#machinelearning" onClick={handleClick} variant="outlined"/>
                            </Grid>
                            <Grid item>
                                <Chip label="#python" onClick={handleClick} variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label="#mainproject" onClick={handleClick} variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* GALLERY */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>GALLERY</Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        Nothing to see here
                    </Grid>
                </Grid>
            </Grid>
            {/* SUPPORTED BY */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>SUPPORTED BY</Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        Nothing to see here
                    </Grid>
                </Grid>
            </Grid>
            {/* STAKEHOLDERS */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>STAKEHOLDERS</Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        Nothing to see here
                    </Grid>
                </Grid>
            </Grid>
            {/* STATS */}
            <Grid item xs={12}>
                <Grid container direction='column'>
                    <Grid item xs={12}>
                        <Typography>STATS</Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        Tracked by {project.tracking}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const Projectpage = (props) => {
    const classes = useStyles();
    const [projects, setProjects] = useState([])


    useEffect(() => {
        db.collection("projects")
            .where('pname', '==', (props.pname))
            .onSnapshot((snapshot) => {
                setProjects(snapshot.docs.map((doc) => doc.data()))
            });
    }, []);

    

    return (
        <div className="Contents">
            <Top />
            {
                projects.map(project => (
                    <Grid container className={classes.Grid} spacing={1}>
                        <Grid item>
                            <Typography align="left" color="textPrimary" variant="h6" padding="40px">
                                {project.username}'s Projects
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <ProjectDescription project={project}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Milestones startdate={project.startDate} projectid={project.projectid} owner={project.owner}/>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <OnTheHunt/>
                        </Grid> */}
                        <Grid item xs={12}>
                            <OtherDetails project={project}/>
                        </Grid>
                    </Grid>
                ))}
        </div >
    )
}

export default Projectpage

Projectpage.defaultProps = {
    pname: 'Emotion Detection through Facial Expression',
}
