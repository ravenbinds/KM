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
import man from "../../man.svg"
import MuiLink from '@material-ui/core/Link';
import { Link, Route } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },
    large: {

        width: theme.spacing(7),
        height: theme.spacing(7),
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
        overflow: 'hidden',

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
const Projectcollab = () => {
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
                                CIVIL LAB REDECOR PROJECT</Typography></Grid>


                        <Grid container direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            className={classes.Grid}>
                            <Box mt={3} width={0.5}>

                                <Typography color="textPrimary" variant="body2" align="left" >
                                    Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity
</Typography><Box mt={3} width={0.5}>
                                    <Typography align="left" color="textPrimary" variant="body1">
                                        #PROJECTCOLLABS

                    </Typography>


                                </Box>
                            </Box>
                            <Grid container direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.Box} xs={5}>
                                Looking for:
                                <List dense >
                                    <ListItem >
                                        <ListItemIcon>
                                            +
                                        </ListItemIcon>
                                        <ListItemText primary="3 team members" />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            +
                                        </ListItemIcon>
                                        <ListItemText primary="Mentor" />
                                    </ListItem><ListItem >
                                        <ListItemIcon>
                                            +
                                        </ListItemIcon>
                                        <ListItemText primary="Recommendations" />
                                    </ListItem>


                                </List>

                                <Grid container direction="row" justify="space-between">
                                    <Button variant="contained" className={classes.button} >
                                        See more
                </Button>
                                    <Button variant="contained" className={classes.button} >
                                        Apply
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
                                CIVIL LAB REDECOR PROJECT</Typography></Grid>


                        <Grid container direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            className={classes.Grid}>
                            <Box mt={3} width={0.5}>

                                <Typography color="textPrimary" variant="body2" align="left" >
                                    Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity
</Typography><Box mt={3} width={0.4}>
                                    <Typography align="left" color="textPrimary" variant="body1">
                                        #PROJECTCOLLABS

</Typography>


                                </Box>
                            </Box>
                            <Grid container direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.Box} xs={5}>
                                Looking for:
            <List dense >
                                    <ListItem >
                                        <ListItemIcon>
                                            +
                    </ListItemIcon>
                                        <ListItemText primary="3 team members" />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            +
                    </ListItemIcon>
                                        <ListItemText primary="Mentor" />
                                    </ListItem><ListItem >
                                        <ListItemIcon>
                                            +
                    </ListItemIcon>
                                        <ListItemText primary="Recommendations" />
                                    </ListItem>


                                </List>

                                <Grid container direction="row" justify="space-between">
                                    <Button variant="contained" className={classes.button} >
                                        See more
</Button>
                                    <Button variant="contained" className={classes.button} >
                                        Apply
</Button></Grid></Grid>

                        </Grid>


                    </Box>

                </Grid>


            </Grid >


        </div >

    )
}

export default Projectcollab


{/* <Grid container direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                            className={classes.Grid}>
                            <Grid item xs={12} sm={6} >

                            </Grid>
                            <Box className={classes.Box} width={0.4}>


                                <Typography color="textPrimary" variant="body2" >
                                    Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity
    </Typography></Box>

                            <Box className={classes.Box} width={0.5}>
                                <Grid item xs={8} sm={4} justify="space-between">
                                    <IconButton type="submit" className={classes.iconButton} aria-label="hg">
                                        <TrackChangesRoundedIcon fontSize="large" />
                                    </IconButton>
                                    <Button variant="contained" className={classes.button} >
                                        Take Me there
                </Button>
                                </Grid>
                            </Box>
                        </Grid> */}
