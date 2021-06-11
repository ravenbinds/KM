import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../man.svg"
import Avatar from '@material-ui/core/Avatar';
import { List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Add } from '@material-ui/icons';
import SimpleModal from './controls/SimpleModal';

const useStyles = makeStyles((theme) => ({

    large: {

        width: theme.spacing(3),
        height: theme.spacing(3),
    },

    Grid: {
        display: 'flex',
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),

    },

    Box: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(1),
        flexDirection: 'column',
        background: '#FFFFFF',
        border: '1px solid #985DFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },
    Box1: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(0.8),
        background: '#FFFFFF',
        boxSizing: 'border-box',
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

function HGPosts(props) {
    const { username, title, description, tag, category, seeklist, button, buttonText } = props;
    const classes = useStyles();
    let isProjectCollab = false
    let isFreelance = false

    if (category === '1') {
        isProjectCollab = true
    }
    if (category === '3') {
        isFreelance = true
    }
    return (
        <Grid container justify="flex-start" alignItems="flex-start" className={classes.Grid}>
            <Grid item xs={12} className={classes.Box}>
                <Grid item xs={12} className={classes.Box1}>
                    <Typography color="primary" variant="h5" align="left" >
                        {title}
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction="row"
                    className={classes.Grid}
                >
                    <Grid item xs={8} className={classes.Box1}>
                        <Typography variant="body1">
                            {description}
                        </Typography>  </Grid>



                    <Grid item xs={4}  >

                        {isProjectCollab && seeklist && <div>
                            <Grid
                                container
                                direction="column"
                                justify="flex-start"
                                alignItems="flex-start"

                            >
                                <Grid item xs={12} className={classes.Box} >
                                    <Grid container direction="column"
                                        justify="flex-start"
                                        alignItems="flex-start" >
                                        <Grid item xs={12} >
                                            <Typography>
                                                Looking for:
                                </Typography></Grid>
                                        <Grid item xs={12} >

                                            {seeklist &&
                                                seeklist.map(item => (
                                                    <div>
                                                        <Grid item xs={12} className={classes.Grid}>
                                                            <Typography variant="body1">+{item}</Typography></Grid>
                                                    </div>

                                                ))
                                            }</Grid>

                                    </Grid>
                                </Grid>

                            </Grid>

                        </div>

                        }

                        {isFreelance && seeklist && <div>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                className={classes.Box1}

                            >
                                <Grid item xs={12} >
                                    <Typography>
                                        Looking for:
                                </Typography></Grid>
                                <Grid item xs={12} >
                                    <Grid direction="row"
                                        justify="flex-start"
                                        alignItems="flex-start">
                                        {
                                            seeklist &&
                                            seeklist.map(item => (
                                                <ListItem>
                                                    <ListItemIcon>+</ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>

                        </div>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Typography align="left" color="primary" variant="body1">
                        {tag}
                    </Typography>

                </Grid>
                <Grid container direction="row" justify="space-between" >
                    <Grid item>
                        <Grid container direction="row" justify="space-between" >
                            <Grid item className={classes.Box1}>
                                <Avatar alt="Remy Sharp" className={classes.large} />
                            </Grid>
                            <Grid item className={classes.Box1}>
                                <Typography variant="body1">
                                    {username}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction="row" justify="space-between">
                            <Grid item className={classes.Box1}>

                                <SimpleModal title={"title"} button="More info" variant='outlined' color="textSecondary" />
                            </Grid>  <Grid item className={classes.Box1}>
                                <SimpleModal title={"title"} button={buttonText} variant='outlined' /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    );
}

export default HGPosts

HGPosts.defaultProps = {
    username: 'Username', title: 'Project Name', description: 'Description', tag: 'DEFAULTTAG', category: '0', seeklist: null, button: '#', buttonText: "Apply"
}