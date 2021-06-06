
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SimpleModal from '../controls/SimpleModal'

import Top from '../Top'
import CreateHGPost from '../Actions/CreateHGPost';
const useStyles = makeStyles((theme) => ({
    Grid: {
        padding: theme.spacing(1),

    },

    Box: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(2),
        flexDirection: 'column',
        background: '#FFFFFF',
        border: '1px solid #985DFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },
    Box2: {
        display: 'flex',
        alignItems: 'left',
        padding: theme.spacing(2),
        flexDirection: 'column',
        background: '#985DFF',
        border: '1px solid #985DFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
const Huntingground = () => {
    const classes = useStyles();

    return (
        <div className="Contents">

            <Top />


            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    Hunting ground
            </Typography>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>

                <Box className={classes.Box}>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="body2" >
                            Ground#1
                                </Typography></Grid>
                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="h6" >
                            COLLABORATE WITH NEW TEAMS</Typography></Grid>

                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>
                    <Grid item xs={12} justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="body2" >
                            Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches</Typography></Grid>
                    <Grid container direction="row"
                        justify="space-between"
                        alignItems="flex-end"
                        className={classes.Grid}>
                        <Grid item xs={12} sm={6} >
                            <Typography align="left" color="textPrimary" variant="body2">
                                #PROJECTCOLLABS

                    </Typography>
                        </Grid>
                        <Grid item xs={8} sm={4} justify="space-between">
                            <IconButton type="submit" className={classes.iconButton} aria-label="hg">
                                <TrackChangesRoundedIcon fontSize="large" />
                            </IconButton>
                            <Button variant="contained" component={Link} to="/Huntingground/projectcollab" className={classes.button} >
                                Take Me there
                </Button>
                        </Grid>
                    </Grid>


                </Box>

            </Grid>

            <Grid item xs={12} className={classes.Grid}>

                <Box color="primary.contrastText" className={classes.Box2}>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography align="left" variant="body2" >
                            Ground#2            </Typography></Grid>
                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography align="left" variant="h6" >
                            ADOPT SOME POLISHABLE GEMS</Typography></Grid>

                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>
                    <Grid item xs={12} justify="flex-start">

                        <Typography align="left" variant="body2" >
                            Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches</Typography></Grid>
                    <Grid container direction="row"
                        justify="space-between"
                        alignItems="flex-end"
                        className={classes.Grid}>
                        <Grid item xs={12} sm={6} >
                            <Typography align="left" variant="body2">
                                #PROJECTADOPTS

</Typography>
                        </Grid>
                        <Grid item xs={8} sm={4} justify="space-between">
                            <IconButton type="submit" className={classes.iconButton} aria-label="hg">
                                <TrackChangesRoundedIcon fontSize="large" />
                            </IconButton>
                            <Button variant="contained" component={Link} to="/Huntingground/projectadopt" className={classes.button} >
                                Take Me there
</Button>
                        </Grid>
                    </Grid>


                </Box>

            </Grid>

            <Grid item xs={12} className={classes.Grid}>

                <Box className={classes.Box}>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="body2" >
                            Ground#3
                                </Typography></Grid>
                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="h6" >
                            LOOKOUT FOR SOME MINDBLOWING IDEAS?? </Typography></Grid>

                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>
                    <Grid item xs={12} justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="body2" >
                            Dont stress your brain to get the rumoured inspiration. There are couch potatoes to help you with the thinking. Come and find them ideas.</Typography></Grid>
                    <Grid container direction="row"
                        justify="space-between"
                        alignItems="flex-end"
                        className={classes.Grid}>
                        <Grid item xs={12} sm={6} >
                            <Typography align="left" color="textPrimary" variant="body2">
                                #PROBLEMSTATEMENTS

                    </Typography>
                        </Grid>
                        <Grid item xs={8} sm={4} justify="space-between">
                            <IconButton type="submit" className={classes.iconButton} aria-label="hg">
                                <TrackChangesRoundedIcon fontSize="large" />
                            </IconButton>
                            <Button variant="contained" className={classes.button} >
                                Take Me there
                </Button>

                        </Grid>
                    </Grid>

                </Box>



            </Grid>


            <Grid container flexDirection="row" className={classes.Grid}>
                <Box className={classes.Box} width={1 / 2}>
                    <Typography color="textPrimary" align="left" variant="h6" >
                        FREELANCER’S CORNER
                            </Typography>
                    <Box mt={5}>
                        #PARTTIMEJOBS</Box>

                </Box>
                <Box className={classes.Box} fontWeight="fontWeightMedium" color="info.main" width={1 / 2}>
                    <Typography align="left" >
                        Contribute your ideas to the Hunting Ground. And get your dream project started.
                            </Typography>
                    <Box mt={3} component={Link} to="/createpages">
                     Click here
                    </Box>
                    <SimpleModal body = {<CreateHGPost/>} title="Contribute to Hunting Ground" button="Click here"/>
                </Box>

            </Grid>




        </div >

    )
}

export default Huntingground
