import Post from "./Post/index";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import logo from "../Logo.svg"
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Rightbar from './Rightbar';
import man from "../man.svg"

const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

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


}));

const Contents = () => {
    const classes = useStyles();

    return (

        <div className="Contents">
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

            <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                CSE Department VAST
        </Typography>
            <div className="rowheading">

                <Typography align="left" color="textPrimary" variant="h6">
                    Posts

            </Typography>
                <div className="button" >
                    Button
                    </div>
            </div>

            <MoreVertRoundedIcon align="right" />

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
