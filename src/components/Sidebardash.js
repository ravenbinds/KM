import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import LinearProgress from '@material-ui/core/LinearProgress';
import LinearProgressWithLabel from './projectprogress';
// import man from "../man.svg"
// import Avatar from '@material-ui/core/Avatar';
import StarsIcon from '@material-ui/icons/Stars';
import Chip from '@material-ui/core/Chip';
import { db } from '../firebase';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },

    root: {
        display: 'flex',
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        border: '0',
        borderRadius: '30px',
        flexDirection: 'column',
        margin: '8px 0px 8px 0px',
        boxShadow: '0px 4px 4px rgba(207, 231, 246, 0.25)',
        color: 'black',
        padding: theme.spacing(2),
        justify: "space-around",
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
        fontFamily: theme.typography.fontFamily,

    },
    pos: {
        marginBottom: 12,

    },
    button: {
        maxHeight: '39px',
        color: '#FFFFFF',
        background: '#8C98FF',
        padding: theme.spacing(0.5),
        borderRadius: '0.5em',
        fontSize: '12px',
    },
    Grid: {
        padding: theme.spacing(0.5),
    },

}));

const SimpleCard = (props) => {
    const classes = useStyles();
    const [projects, setProjects] = useState([])
    useEffect(() => {
        db.collection("projects").where('pname', '==', (props.pname))
            .onSnapshot((snapshot) => {
                setProjects(snapshot.docs.map((doc) => doc.data()))
            });
    }, [props.pname]);

    return (
        <div>
            {
                projects.map(project => (
                    <Grid className={classes.root}>

                        <Grid
                            container
                            justify="space-between"
                            direction="column"
                        >
                            <Grid item component={Typography} variant="h6">
                                {project.pname}
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className={classes.Grid} align="left">

                            <Typography variant="body2">Progress:  </Typography> <LinearProgressWithLabel value={project.progress} />
                        </Grid>
                        <Grid item xs={12} className={classes.Grid}>

                            <Chip className={classes.chip} label={project.status} /></Grid>



                        <Grid container direction="row" justify="flex-start" className={classes.Grid} >
                            <Grid item>
                                <StarsIcon style={{ color: "#000000", fontSize: "1.5em" }} /> </Grid>
                            <Grid item xs={2} component={Typography}>
                                {project.tracking}
                            </Grid>
                            <Grid item xs align="right">
                                <Button component={Link} to={{
                                    pathname: "/Projectpage",
                                    aboutProps: {
                                        pname: projects.pname
                                    }
                                }} className={classes.button} >View</Button>


                            </Grid>
                        </Grid>

                    </Grid>))
            }
        </div >
    )

}
export default SimpleCard;


SimpleCard.defaultProps = {
    pname: 'Emotion Detection through Facial Expression',
}
