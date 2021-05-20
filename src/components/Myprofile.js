import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../man.svg"
import Avatar from '@material-ui/core/Avatar';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import { Link } from 'react-router-dom';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import Top from './Top';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    heading: {
        fontSize: theme.typography.pxToRem(16),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: '#00296B',
    },

    root: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        padding: theme.spacing(1),
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
        padding: theme.spacing(2),
        justify: "space-around",

    },
    Grid1: {
        padding: theme.spacing(2),
        flexDirection: 'row',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
    Grid: {
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        padding: theme.spacing(2),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '30px',
    },
    Paper1: {

        borderRadius: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(8),
            height: theme.spacing(8),
        },


    },

    large: {

        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));


function ProfileHeader() {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                        <Grid item xs={6} sm={3} alignItems="flex-start" justify="flex-start">
                            <Typography color="textPrimary" variant="h6" >
                                Name
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton>

                            </IconButton>
                        </Grid>
                    </Grid>
    );
}

function Spotlight() {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.Grid2}  >
            <Box className={classes.Box}>
                <Grid container direction="row" justify="space-around" alignItems="baseline" >
                    <Typography color="textSecondary" gutterBottom> 
                        Spotlight
                    </Typography>
                                <Card className={classes.root}>
                                    <Typography color="textSecondary" gutterBottom>
                                        31
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" > Projects</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.root}>
                                    <Typography color="textSecondary" gutterBottom>
                                        13
                                    </Typography>
                                    <CardActions>
                                        <Button size="small">Certifications</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.root}>
                                    <Typography color="textSecondary" gutterBottom>
                                        12
                                    </Typography>
                                    <CardActions>
                                        <Button size="small">Jobs done</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Box>
                    </Grid>
    );
}

function RecentActivities() {
    const classes = useStyles();
    return(
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Typography color="textSecondary" align="left" padding="20px">
                        Recent activities
                    </Typography>
                    <Grid item xs={12} className={classes.Grid2}  >
                        <Box className={classes.Box}>
                            <CardActions>
                                <Button size="small" > <EventNoteRoundedIcon fontSize="large" /></Button>
                            </CardActions>
                            <Typography align="left" color="textprimary" variant="body1" gutterBottom>
                                Completed certification course Neural Networks and Deep Learning by deeplearning.ai on Coursera
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.Grid2}  >
                        <Box className={classes.Box}>
                            <CardActions>
                                <Button size="small" > <EventNoteRoundedIcon fontSize="large" /></Button>
                            </CardActions>
                            <Typography align="left" color="textprimary" gutterBottom>
                                Started workshop titled Fundamentals of Digital Marketing Google
                            </Typography>
                        </Box>
                    </Grid>

                    <Typography variant="subtitle2" padding="20px" component={Link} to="/Myprofile">
                        see all activities...
                    </Typography>
        </Grid>
        
    )
}


function DetailsAccordion (){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Typography color="textSecondary" align="left" padding="20px">
                        Details
                    </Typography>
        <Grid item xs={12} className={classes.Grid2}  >
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>Posts</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Button>Add</Button>
                                <Box className={classes.Box}>
                                    <Grid item xs={1} className={classes.Grid2}  >
                                        <FolderOpenRoundedIcon fontSize="large" />
                                    </Grid>
                                    <Grid item xs={10} className={classes.Grid2}  >
                                        <Typography>Emotion Detection through Facial Expression.</Typography>
                                    </Grid>
                                    <Grid item xs={3} flexDirection='row'>
                                        <Typography><CheckRoundedIcon />Completed</Typography>
                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}>Experiences</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box className={classes.Box}>
                                    <Grid item xs={1} className={classes.Grid2}  >
                                        <FolderOpenRoundedIcon fontSize="large" />
                                    </Grid>
                                    <Grid item xs={10} className={classes.Grid2}  >
                                        <Typography>
                                            Emotion Detection through Facial Expression.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} flexDirection='row'>
                                        <Typography>
                                            <CheckRoundedIcon />Completed
                                        </Typography>           
                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}>Education</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box className={classes.Box}>
                                    <Grid item xs={1} className={classes.Grid2}  >
                                        <FolderOpenRoundedIcon fontSize="large" />
                                    </Grid>
                                    <Grid item xs={10} className={classes.Grid2}  >
                                        <Typography>
                                            Emotion Detection through Facial Expression.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} flexDirection='row'>
                                        <Typography>
                                            <CheckRoundedIcon />Completed</Typography>
                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography className={classes.heading}>Certifications</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box className={classes.Box}>
                                    <Grid item xs={1} className={classes.Grid2}  >
                                        <FolderOpenRoundedIcon fontSize="large" />
                                    </Grid>
                                    <Grid item xs={10} className={classes.Grid2}  >
                                        <Typography>
                                            Emotion Detection through Facial Expression.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} flexDirection='row'>
                                        <Typography>
                                            <CheckRoundedIcon />Completed
                                        </Typography>       
                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel5bh-content"
                                id="panel5bh-header"
                            >
                                <Typography className={classes.heading}>Projects</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box className={classes.Box}>
                                    <Grid item xs={1} className={classes.Grid2}  >
                                        <FolderOpenRoundedIcon fontSize="large" />
                                    </Grid>
                                    <Grid item xs={10} className={classes.Grid2}  >
                                        <Typography>
                                            Emotion Detection through Facial Expression.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} flexDirection='row'>
                                        <Typography>
                                            <CheckRoundedIcon />Completed
                                        </Typography>
                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        </Grid>
        </Grid>
    );
    }

const Myprofile = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid2}  >
                <Grid item xs={12} className={classes.Grid} >
                    <ProfileHeader/>
                    <Spotlight/>
                    <RecentActivities/>
                
                    <Typography color="textSecondary" align="left" padding="20px">
                        Details
                    </Typography>
                    <Grid item xs={12} className={classes.Grid2}  >
                        <Box className={classes.Box}>
                            <Typography color="textprimary" variant="body1" align="left" padding="20px">
                                Experience
                            </Typography>
                            <Grid item xs={12} className={classes.Grid2}  >
                                <Typography align="left" color="textSecondary" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae praesent quisque egestas egestas eleifend congue nibh neque. Consequat elementum non adipiscing eget posuere.
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} className={classes.Grid2}  >
                    </Grid>
                    <Grid item xs={12} className={classes.Grid2}  >
                    </Grid>
                    
                    <DetailsAccordion/>
                </Grid>
            </Grid>
        </div >
    )
}

export default Myprofile
