import Post from "./Post/index";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';  
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import man from "../man.svg"
import SearchIcon from '@material-ui/icons/Search';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

    button: {
        display: 'flex',
        maxWidth: '64',
        maxHeight: '39px',
        position: 'static',
        color: '#FFFFFF',
        background: '#8C98FF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
    },

    iconButton: {
        padding: 10,
        justifyContent: 'flex-end',
    },

    Paper: {
        display: 'flex',
        borderRadius: '400px 400px 400px 400px',
        maxWidth: 400,
        padding: '2px 4px',
        alignItems: 'right',
    },
}
));

const Contents = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
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
                    <Typography align="right" color="textPrimary" variant="h6" padding="40px">Hi blah</Typography>
                </Grid>

            </Grid>

            <Grid item xs={12} className="Grid">
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    CSE Department VAST
                </Typography>
            </Grid>

            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} sm={6} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h6">
                        Posts
                    </Typography>
                </Grid>
                <Button variant="contained" className={classes.button} >
                    Primary
                </Button>
            </Grid>

            <Grid container justify="flex-end" alignItems="center" className={classes.Grid}>
                <MoreVertRoundedIcon />
            </Grid>
            <div className="Contents-space">
                <Post nickname="Chris" avatar={man} caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            </div>
            <div className="Contents-space">
                <Post nickname="OG" avatar={man} caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            </div>
        </div>
    )
}

export default Contents
