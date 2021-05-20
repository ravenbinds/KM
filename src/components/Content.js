import Post from "./Post/index";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import man from "../man.svg"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Top from './Top';
const useStyles = makeStyles((theme) => ({


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

    Grid: {
        padding: theme.spacing(1),

    },

}));

const Contents = () => {
    const classes = useStyles();

    return (

        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    CSE Department VAST
        </Typography>
            </Grid>
            <Grid container direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12} sm={6} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h6">
                        Posts

                    </Typography>
                </Grid>
                <Button variant="contained" className={classes.button} >
                    Primary
                </Button>
            </Grid>
            <Grid container justify="flex-end"
                alignItems="center" className={classes.Grid}>
                <MoreVertRoundedIcon />
            </Grid>


            <Grid className="Contents-space">
                <Post nickname="Chris" avatar={man} caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            </Grid>
            <Grid className="Contents-space">
                <Post nickname="OG" avatar={man} caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            </Grid>

        </div>

    )
}

export default Contents
