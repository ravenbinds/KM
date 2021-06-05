import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../Logo.svg"
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import LinearProgressWithLabel from './prjectprogress';
import man from "../man.svg"
import Avatar from '@material-ui/core/Avatar';
// import profilepic from "../Profile.jpg"
import StarsIcon from '@material-ui/icons/Stars';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },

    root: {
        display: 'flex',
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        border: 0,
        borderRadius: '30px',
        flexDirection: 'column',
        margin: '8px 0px 8px 0px',
        boxShadow: '0px 4px 4px rgba(207, 231, 246, 0.25)',
        color: 'black',
        minwidth: '245px',
        minheight: '143px',
        padding: theme.spacing(2),
        justify: "space-around",
    },
    Grid: {
        padding: theme.spacing(1),
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    chip: {
        display: 'flex',
        background: '#8CECDC',
        fontSize: '12px',
        borderRadius: '0.5em',
        fontWeight: 'bold',
        height: '25px',
        width: '20',
        border: '1px',
        color: 'inherit',
        padding: theme.spacing(1),


    },
    pos: {
        marginBottom: 12,

    },
    button: {
        maxHeight: '39px',
        position: 'static',
        color: 'inherit',
        background: '#8C98FF',
        padding: theme.spacing(0.5),
        borderRadius: '0.5em',
        fontSize: '12px',

    },

}));

export default function SimpleCard() {
    const classes = useStyles();


    return (
        <Grid className={classes.root}>
            <Grid
                container
                justify="space-between"
                direction="row"
            >
                <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                <Box color="secondary.main" fontWeight="fontWeightBold">
                    Emotion Detection through Facial Expression
      </Box>
            </Grid>

            <Grid item xs={12} className={classes.Grid} align="left">Progress:</Grid>
            <Grid container direction="column">
                <Grid item xs={12} className={classes.Grid}><Chip className={classes.chip} label="Completed" /></Grid>
                <Grid container justify="space-between">
                    <Grid container xs={6}>
                        <StarsIcon style={{ color: "#000000", fontSize: "1.5em" }} /> stats</Grid>
                    <Button variant="contained" component={Link} to="/Projectpage" className={classes.button} >
                        View
                </Button> </Grid></Grid>
        </Grid>
    )

}
