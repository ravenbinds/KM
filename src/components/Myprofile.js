import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
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
import { Add, School, Timelapse} from '@material-ui/icons';
import SimpleMenu from './controls/SimpleMenu'
import SimpleAccordion from './controls/SimpleAccordion';

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

    Grid: {
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        padding: theme.spacing(2),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '30px',
        margin: theme.spacing(2)
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

    const menuitems = [
        {title:'Add Project', link:'/ProjectForm'},
        {title:'Add Experience', link:'#'},
        {title:'Add Certifications', link:'#'}
    ]
    return (
        <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                        <Grid item xs={6} sm={3} alignItems="flex-start" justify="flex-start">
                            <Typography color="textPrimary" variant="h6" >
                                Name
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <SimpleMenu items={menuitems}/>
                        </Grid>
                        <Grid item xs={2} sm={3}>
                            <Button size="small" variant="outlined" component={Link} to="/AddProfileSection"><Add/></Button>
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

    const items = [
        {startIcon: <EventNoteRoundedIcon fontSize="large"/>, content: "Completed certification course Neural Networks and Deep Learning by deeplearning.ai on Coursera"},
        {startIcon: <EventNoteRoundedIcon fontSize="large"/>, content: "Started workshop titled Fundamentals of Digital Marketing Google"}
    ]

    const classes = useStyles();
    return(
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Typography color="textSecondary" align="left" padding="20px">
                        Recent activities
                    </Typography>
                    {
                        items.map(item=>(
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
                    <Typography variant="subtitle2" padding="20px" component={Link} to="/Myprofile">
                        see all activities...
                    </Typography>
        </Grid>
        
    )
}


function DetailsAccordion (){

    const items = [
        {title:'Posts',panel:'panel1', startIcon:<FolderOpenRoundedIcon fontSize="large"/>, entries: [{heading:"Abc", description:"Abcd", status:"Incomplete", statusIcon:<Timelapse/>}, {heading:"Abc", description:"Abcd", status:"Completed", statusIcon:<CheckRoundedIcon/>}]},
        {title:'Experiences',panel:'panel2', startIcon:<WorkOutline fontSize="large"/>, entries: [{heading:"Abc", description:"Abcd", status:"Compl", statusIcon:<CheckRoundedIcon/>}]},
        {title:'Education',panel:'panel3', startIcon:<School fontSize="large"/>, entries: [{heading:"Abc", description:"Abcd", status:"Compl", statusIcon:<CheckRoundedIcon/>}]},
        {title:'Certifications',panel:'panel4', startIcon:<School fontSize="large"/>, entries: [{heading:"Abc", description:"Abcd", status:"Compl", statusIcon:<CheckRoundedIcon/>}]},
        {title:'Projects',panel:'panel5', startIcon:<School fontSize="large"/>, entries: [{heading:"Abc", description:"Abcd", status:"Compl", statusIcon:<CheckRoundedIcon/>}]},
        
    ]

    const classes = useStyles();

    return (
        <Grid container direction="column" justify="flex-start" alignItems="stretch">
            <Typography color="textSecondary" align="left" padding="20px">
                        Details
            </Typography>
            <Grid item xs={12} className={classes.Grid2}>
                <SimpleAccordion items={items}/>
            </Grid>
        </Grid>
    );
    }

const Myprofile = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Top />
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
                <DetailsAccordion/>
            </Grid>
        </div >
    )
}

export default Myprofile
