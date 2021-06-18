import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import WorkOutline from '@material-ui/icons/WorkOutline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../man.svg"
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import { Link } from 'react-router-dom';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import Top from './Top';
import {School} from '@material-ui/icons'
// import { Add,Timelapse } from '@material-ui/icons';
import SimpleAccordion from './controls/SimpleAccordion';
import ProjectForm from './Actions/ProjectForm';
import ExperienceForm from './Actions/ExperienceForm'
import EducationForm from './Actions/EducationForm'
import CertificationForm from './Actions/CertificationForm'
import { db } from '../firebase';
// import { useUserContext } from '../UserContext';


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: theme.spacing(1),
        marginInline: theme.spacing(0.5),
        background: "#FFFFFF",
    },

    Box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(2),
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        overflow: 'hidden'
    },

    Grid2: {
        margin: theme.spacing(2),
        justify: "space-around",
    },

    Grid: {
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        padding: theme.spacing(2),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '30px',
        margin: theme.spacing(2)
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(1)
    },
    spotlight: {
    },
}));

function ProfileHeader(props) {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Grid item>
                <Avatar alt="Remy Sharp" src={props.avatar} className={classes.large} />
            </Grid>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography color="textPrimary" variant="h6" align='left'>
                            {props.name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' spacing={1}>
                            <Grid item>
                                <Typography variant="body2" component={Link} to='/followers'>
                                    {props.followers} followers
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" component={Link} to='/following'>
                                    {props.following} following
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

ProfileHeader.defaultProps = {
    avatar: man,
    name: "Name here",
    followers: 0,
    following: 0,
}

function Spotlight() {

    const spotlightitems = [
        { category: 'Projects', count: 4 },
        { category: 'Certifications', count: 10 },
        { category: 'Jobs done', count: 8 },
    ]

    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.Grid2}  >
            <Box>
                <Grid container direction="column" justify="space-around" alignItems="baseline" >
                    <Typography color="textSecondary" gutterBottom>
                        Spotlight
                    </Typography>
                    <Grid container direction="row" className={classes.spotlight} justify="space-around" alignItems="baseline" spacing={2} >
                        {
                            spotlightitems.map(item => (
                                <Box textAlign="center" component={Grid} item sm={4}>
                                    <Typography variant="h5" >{item.count}</Typography>
                                    <Typography variant="subtitle2" color="secondary">{item.category}</Typography>
                                </Box>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
}

function RecentActivities() {

    const items = [
        { startIcon: <EventNoteRoundedIcon fontSize="large" />, content: "Completed certification course Neural Networks and Deep Learning by deeplearning.ai on Coursera" },
        { startIcon: <EventNoteRoundedIcon fontSize="large" />, content: "Started workshop titled Fundamentals of Digital Marketing Google" }
    ]

    const classes = useStyles();
    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Grid item xs={12}>
                <Typography color="textSecondary" align="left" padding="20px">
                    Recent activities
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction='column' justify='flex-start'>
                    {
                        items.map(item => (
                            <Grid item xs={12} className={classes.Grid2}  >
                                <Box className={classes.Box}>
                                    <CardActions>
                                        <Button size="small" >{item.startIcon}</Button>
                                    </CardActions>
                                    <Typography align="left" color="textprimary" variant="body1" gutterBottom>
                                        {item.content}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" padding="20px" component={Link} to="/Myprofile">
                    see all activities...
                </Typography>
            </Grid>

        </Grid>

    )
}

function DetailsAccordion(props) {

    const [projectDetails, setprojectDetails] = useState([]);
    const [postDetails, setpostDetails] = useState([]);
    const [experienceDetails, setexperienceDetails] = useState([]);
    const [certificationDetails, setcertificationDetails] = useState([]);
    const [educationDetails, setEducationDetails] = useState([]);

    const [loading, setLoading] = useState(false);

    const ref = db.doc('profile/' + props.userdocumentID) //Reference to documents of the corresponding user

    useEffect(() => {
        //Function to get all projects of given user
        function getProject() {
            setLoading(true);
            ref.collection('projects').onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        heading: "Project title",
                        description: "Project description",
                        status: 'sample',
                        statusIcon: <CheckRoundedIcon />,
                    }
                    );
                });
                setprojectDetails(items);
                setLoading(false);
            });
        }

        //Function to get all education details of given user
        function getEducation() {
            setLoading(true);
            ref.collection('education').onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        heading: doc.data().degree,
                        description: doc.data().school,
                        status: 'sample',
                        statusIcon: <CheckRoundedIcon />,
                    }
                    );
                });
                setEducationDetails(items);
                setLoading(false);
            });
        }

        //Function to get all posts of given user
        function getPost() {
            setLoading(true);
            ref.collection('posts').onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        heading: "Post title",
                        description: "Post description",
                        status: 'sample',
                        statusIcon: <CheckRoundedIcon />,
                    }
                    );
                });
                setpostDetails(items)
                setLoading(false);
            });
        }

        //Function to get all experiences of given user
        function getExperiences() {
            setLoading(true);
            ref.collection('experience').onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        heading: doc.data().jobTitle,
                        description: doc.data().description,
                        status: 'sample',
                        statusIcon: <CheckRoundedIcon />,
                    }
                    );
                });
                setexperienceDetails(items)
                setLoading(false);
            });
        }

        //Function to get all certifications of given user
        function getCertifications() {
            setLoading(true);
            ref.collection('certification').onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        heading: doc.data().certificationName,
                        description: doc.data().description,
                        status: 'sample',
                        statusIcon: <CheckRoundedIcon />,
                    }
                    );
                });
                setcertificationDetails(items)
                setLoading(false);
            });
        }
        getProject();
        getPost();
        getExperiences();
        getCertifications();
        getEducation();
    }, [ref])

    if (loading) {
        return <h2>Loading...</h2>
    }

    const items = [
        //Post data
        {
            form: <ProjectForm userdocumentID={props.userdocumentID} />,
            title: 'Posts', panel: 'panel1',
            startIcon: <FolderOpenRoundedIcon fontSize="large" />,
            entries: postDetails,
        },
        //Experience data
        {
            form: <ExperienceForm userdocumentID={props.userdocumentID} />,
            title: 'Experiences',
            panel: 'panel2',
            startIcon: <WorkOutline fontSize="large" />,
            entries: experienceDetails,
        },

        {
            form: <EducationForm userdocumentID={props.userdocumentID} />,
            title: 'Education',
            panel: 'panel3',
            startIcon: <School fontSize="large" />,
            entries: educationDetails
        },
        //Certification data
        {
            form: <CertificationForm userdocumentID={props.userdocumentID} />,
            title: 'Certifications',
            panel: 'panel4',
            startIcon: <School fontSize="large" />,
            entries: certificationDetails,
        },
        //Project data
        {
            form: <ProjectForm userdocumentID={props.userdocumentID} />, title: 'Projects',
            panel: 'panel5',
            startIcon: <School fontSize="large" />,
            entries: projectDetails,
        },
    ]

    return (
        <SimpleAccordion items={items} userdocumentID={props.userdocumentID} />
    );
}

DetailsAccordion.defaultProps = {
    userdocumentID: "sampleuser"
}

function Profile(props) {
    const classes = useStyles();
    const [userDetails, setuserDetails] = useState({});
    const [loading, setLoading] = useState(false);

    const ref = db.collection('users').doc(props.userdocumentID);
    useEffect(() => {
        function getUser() {
            setLoading(true);
            ref.onSnapshot((querySnapshot) => {
                const userdata = querySnapshot.data();
                setuserDetails(userdata);
                console.log('document retrieved')
            })

            setLoading(false)
        }
        getUser();
    }, [ref])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid} >
                <ProfileHeader name={userDetails.name} avatar={userDetails.avatar} />
                <Spotlight />
                <RecentActivities />
                <DetailsAccordion userdocumentID={props.userdocumentID} />
            </Grid>
        </div >
    )
}

export default Profile

Profile.defaultProps = {
    userdocumentID: "7aROHQMUiZXrqavWooPmIyrJVDh2"
}
