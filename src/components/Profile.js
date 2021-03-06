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
import { AccessTime, Adjust, School } from '@material-ui/icons'
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
    button: {
        maxHeight: '39px',
        color: '#FFFFFF',
        background: '#8C98FF',
        padding: theme.spacing(0.5),
        borderRadius: '0.5em',
        fontSize: '12px',
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
    const [follower, setfollower] = useState(0)
    const [following, setfollowing] = useState(0)

    db.collection("followers").where("followingWho", "==", props.userdocumentID)
        .onSnapshot((querySnapshot) => {
            setfollower(querySnapshot.size);
            setfollowing(querySnapshot.size);

        });
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
                                <Typography variant="body2" component={Link} to={{
                                    pathname: "/followers",
                                    aboutProps: {
                                        userid: props.userdocumentID,

                                    }
                                }}>
                                    {follower} followers
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" component={Link} to={{
                                    pathname: "/following",
                                    aboutProps: {
                                        userid: props.userdocumentID,

                                    }
                                }}>
                                    {following} following
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

function Spotlight(props) {
    const [projectNo, setprojectNo] = useState(0);
    const [certificationNo, setcertificationNo] = useState(0);
    const [jobNo, setjobNo] = useState(0);

    const ref = db.doc('profile/' + props.userdocumentID)
    ref.collection('certification').onSnapshot((querySnapshot) => {
        setcertificationNo(querySnapshot.size);

    });

    ref.collection('experience').onSnapshot((querySnapshot) => {
        setjobNo(querySnapshot.size);

    });
    const spotlightitems = [
        { category: 'Projects', count: projectNo },
        { category: 'Certifications', count: certificationNo },
        { category: 'Jobs done', count: jobNo },

    ]
    db.collection('projects').where("owner", "==", props.userdocumentID)
        .onSnapshot((querySnapshot) => {
            setprojectNo(querySnapshot.size);
        }
        );

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

    const ref = db.doc('profile/' + props.userdocumentID)
    //instead of YpDaruUKtfj8RENfJV86 we can add user Id here
    //Function to get all projects of given user
    function getProject() {
        setLoading(true);
        db.collection('projects').where("owner", "==", props.userdocumentID).onSnapshot((querySnapshot) => {

            const items = [];
            querySnapshot.forEach((doc) => {

                var statusIconWill
                if (doc.data().status == 'Completed') {
                    statusIconWill = <CheckRoundedIcon />
                }
                else if (doc.data().status == 'Incomplete') {
                    statusIconWill = <AccessTime />
                }
                else {
                    statusIconWill = <Adjust />
                }
                items.push({
                    heading: doc.data().pname,
                    description: doc.data().description,
                    status: doc.data().status,
                    statusIcon: statusIconWill,
                    link: true,
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
                    link: false,
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
        db.collection('posts').where("userid", "==", props.userdocumentID)
            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        heading: doc.data().caption,
                        description: doc.data().timestamp,
                        status: <Button component={Link} to={{
                            pathname: "/Post",
                            aboutProps: {
                                docid: doc.data().docid,
                                nickname: doc.data().nickname,
                                avatar: doc.data().avatar,
                                caption: doc.data().caption,
                                image: doc.data().image,
                                likes: doc.data().likes,
                                share: doc.data().share,
                                comment: doc.data().comment,
                                timestamp: doc.data().timestamp,
                            }
                        }}  >
                            View
                        </Button>,
                        statusIcon: <CheckRoundedIcon />,
                        link: false,
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
                    link: false,
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
                    link: false,
                }
                );
            });
            setcertificationDetails(items)
            setLoading(false);
        });
    }

    useEffect(() => {
        getProject();
        getPost();
        getExperiences();
        getCertifications();
        getEducation();
    }, [])

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
    function getUser() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const userdata = querySnapshot.data();
            setuserDetails(userdata);
            console.log('document retrieved')
        })

        setLoading(false)
    }

    useEffect(() => {
        getUser();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid} >
                <ProfileHeader name={userDetails.name} avatar={userDetails.avatar} userdocumentID={props.userdocumentID} />
                <Spotlight userdocumentID={props.userdocumentID} />
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
