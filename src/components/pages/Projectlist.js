import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import classNames from 'classnames'
import Top from '../Top';
import { db } from '../../firebase';
import { Button } from '@material-ui/core';
import Projectpage from './Projectpage';
import GetProject from './getProject';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({


    Grid: {
        padding: theme.spacing(1),

    },
    Grid2: {
        padding: theme.spacing(1),
        display: 'flex',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        margin: theme.spacing(1)
    },
    user: {
        fontWeight: '700',
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

const ProjectLists = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState([])

    useEffect(() => {
        db.collection("projects")

            .onSnapshot((snapshot) => {
                setProjects(snapshot.docs.map((doc) => doc.data()))
            });
    }, []);

    return (
        <div className="Contents">
            <Top />
            <Grid container justify="space-evenly" alignItems="flex-start">
                <Grid item xs={12} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Project List
                    </Typography>
                </Grid>
                <Grid container justify="space-evenly" alignItems="flex-start" >
                    {
                        projects.map(project => (
                            <Grid container justify="flex-start" alignItems="center" className={classes.Grid2}  >
                                <Grid item xs={12}  >
                                    <Typography color="primary" variant="h6" className={classes.user}>
                                        Project Name: {project.pname}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography color="textSecondary" variant="body1" >
                                        Owned by: {project.owner}
                                    </Typography></Grid>

                                <Grid container xs={12} justify="flex-end" alignItems="flex-end">
                                    <Button component={Link} to={{
                                        pathname: "/Projectpage",
                                        aboutProps: {
                                            pname: project.pname
                                        }
                                    }} className={classes.button} >
                                        View
                                    </Button>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </div >
    )
}

export default ProjectLists
