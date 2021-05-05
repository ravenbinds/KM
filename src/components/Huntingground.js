
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },
    iconButton: {
        padding: 10,
        justifyContent: 'flex-end',
    },


    iconButton: {
        padding: 10,
        justifyContent: 'flex-end',
    },
    Paper: {
        display: 'flex',
        borderRadius: '400px 400px 400px 400px',
        padding: '2px 4px',
        alignItems: 'right',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
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
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                    <Paper component="form" className={classes.Paper}>

                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />

                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <Typography align="right" color="textPrimary" variant="h6" padding="40px">
                        Hi blah
         </Typography>
                </Grid>
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
                                <Button variant="contained" className={classes.button} >
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
                                <Button variant="contained" className={classes.button} >
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
                        <Box mt={3} component={Link} to="/Huntingground">
                            Click here
                            </Box>
                    </Box>

                </Grid>


            </Grid>


        </div >

    )
}

export default Huntingground
