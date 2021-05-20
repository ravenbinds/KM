import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TrackChangesRoundedIcon from '@material-ui/icons/TrackChangesRounded';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../../man.svg"
import Avatar from '@material-ui/core/Avatar';
import Top from '../Top'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
const useStyles = makeStyles((theme) => ({

    large: {

        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    Grid: {
        display: 'flex',
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
        flexDirection: 'row',
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

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const Projectadopt = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>

                <Typography align="right" color="textPrimary" variant="h5" padding="40px">
                    Hunting ground</Typography>


                {/* <Breadcrumbs aria-label="breadcrumb">
                        <Route path="/" render={() => (<MuiLink component={Link} to="/Huntingground">Huntinground   </MuiLink>)} />

                        <Typography color="textPrimary">Projectcollab</Typography>
                    </Breadcrumbs> */}
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
            </Grid>





            <Grid item xs={12} className={classes.Grid}>

                <Box className={classes.Box} >

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Grid
                            container
                            direction="row"
                            justify="flex-start"

                        >

                            <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                            <Box mt={2} ml={2}>

                                <Typography color="textPrimary" variant="h6" >
                                    Alfred West
            </Typography></Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="h6" >
                            AUTO IRRIGATION SYSTEM</Typography></Grid>


                    <Grid container direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        className={classes.Grid}>
                        <Box mt={3} width={0.5}>

                            <Typography color="textPrimary" variant="body2" align="left" >
                                Ground level irrigation system installation halted as the pandemic started. This project is now freezed. If you wish to continue this project, apply here. Resource information and permits available.
</Typography><Box mt={3} width={0.5}>
                                <Typography align="left" color="textPrimary" variant="body1">
                                    #PROJECTADOPTS

                    </Typography>


                            </Box>
                        </Box>
                        <Grid container direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                            className={classes.Box} item xs={5}>
                            <IconButton type="submit" className={classes.iconButton} aria-label="hg">
                                <TrackChangesRoundedIcon fontSize="large" />
                            </IconButton>

                            <Grid container direction="row" justify="space-between">
                                <Button variant="contained" className={classes.button} >
                                    See more
                </Button>
                                <Button variant="contained" className={classes.button} >
                                    Adopt
                </Button></Grid></Grid>

                    </Grid>


                </Box>

            </Grid>

            <Grid item xs={12} className={classes.Grid}>

                <Box className={classes.Box} >

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Grid
                            container
                            direction="row"
                            justify="flex-start"

                        >

                            <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                            <Box mt={2} ml={2}>

                                <Typography color="textPrimary" variant="h6" >
                                    Alfred West
            </Typography></Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.Grid}>
                    </Grid>

                    <Grid item xs={12} alignItems="flex-start" justify="flex-start">

                        <Typography color="textPrimary" align="left" variant="h6" >
                            AUTO IRRIGATION SYSTEM</Typography></Grid>


                    <Grid container direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        className={classes.Grid}>
                        <Box mt={3} width={0.5}>

                            <Typography color="textPrimary" variant="body2" align="left" >
                                Ground level irrigation system installation halted as the pandemic started. This project is now freezed. If you wish to continue this project, apply here. Resource information and permits available.
</Typography><Box mt={3} width={0.5}>
                                <Typography align="left" color="textPrimary" variant="body1">
                                    #PROJECTADOPTS

                    </Typography>


                            </Box>
                        </Box>
                        <Grid container direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                            className={classes.Box} item xs={5}>
                            <IconButton type="submit" className={classes.iconButton} aria-label="hg">
                                <TrackChangesRoundedIcon fontSize="large" />
                            </IconButton>

                            <Grid container direction="row" justify="space-between">
                                <Button variant="contained" className={classes.button} >
                                    See more
                </Button>
                                <Button variant="contained" className={classes.button} >
                                    Adopt
                </Button></Grid></Grid>

                    </Grid>


                </Box>

            </Grid>




        </div >

    )
}

export default Projectadopt