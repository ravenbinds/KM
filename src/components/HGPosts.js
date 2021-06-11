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

const useStyles = makeStyles((theme) => ({

    large: {

        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    Grid: {
        display: 'flex',
        padding: theme.spacing(1),
        marginTop: theme.spacing(1)
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
    const {username, title, description, tag, category, seeklist, button, buttonText} = props;
    const classes = useStyles();
    let isProjectCollab = false
    if (category === '1') {
        isProjectCollab = true
    }
    return (
        <Grid item xs={12} className={classes.Grid}>
            <Box className={classes.Box}>
            <Grid item xs={12} alignItems="flex-start" justify="flex-start">
                <Grid container direction="row" justify="flex-start">
                    <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                    <Box mt={2} ml={2}>
                        <Typography color="textPrimary" variant="h6">
                        {username}
                        </Typography>   
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} alignItems="flex-start" justify="flex-start">
                <Typography color="textPrimary" align="left" variant="h6">
                {title}
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                className={classes.Grid}
            >
                <Box mt={3} width={0.5}>
                <Typography color="textPrimary" variant="body2" align="left">
                    {description}
                </Typography>
                <Box mt={3} width={0.5}>
                    <Typography align="left" color="textPrimary" variant="body1">
                    {tag}
                    </Typography>
                </Box>
                </Box>
                
                <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.Box}
                xs={5}
                >
                {isProjectCollab && seeklist && <div>
                    <Typography>
                        Looking for:    
                    </Typography>
                    <List dense>
                    {   
                        seeklist && 
                        seeklist.map(item=>(
                            <ListItem>
                                <ListItemIcon>+</ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                    </List>   
                </div>
                }    
                <Grid container direction="row" justify="space-between">
                    <Button variant="contained" className={classes.button}>
                    See more
                    </Button>
                    <Button variant="contained" className={classes.button}>
                    {buttonText}
                    </Button>
                </Grid>
                </Grid>
            </Grid>
            </Box>
        </Grid>
    );
}

export default HGPosts

HGPosts.defaultProps = {
    username: 'Username', title: 'Project Name', description: 'Description', tag: 'DEFAULTTAG', category: '0', seeklist: null, button: '#', buttonText: "Apply"
}