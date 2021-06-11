import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../../man.svg"
import Avatar from '@material-ui/core/Avatar';
import Top from '../Top'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HGPosts from '../HGPosts';
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
    const hgpost = [
        { username: "Alfred West", avatar: man, title: "AUTO IRRIGATION SYSTEM", description: "Ground level irrigation system installation halted as the pandemic started. This project is now freezed. If you wish to continue this project, apply here. Resource information and permits available.", tag: "#PROJECTADOPTS" },
        { username: "Alfred West", avatar: man, title: "AUTO IRRIGATION SYSTEM", description: "Ground level irrigation system installation halted as the pandemic started. This project is now freezed. If you wish to continue this project, apply here. Resource information and permits available.", tag: "#PROJECTADOPTS" }
    ]

    return (
        <div className="Contents">
            <Top />
            <Grid container justify="flex-start" alignItems="flex-start" className={classes.Grid}>
                <Grid item xs={12} className={classes.Grid}>
                    <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Hunting ground
                    </Typography></Grid>
                <Grid item xs={12} >
                    <Grid container justify="flex-start" alignItems="flex-start" spacing={2}>
                        {
                            hgpost.map(post => (
                                <Grid item xs={12}>

                                    <HGPosts username={post.username} title={post.title} tag={post.tag} category='2' description={post.description} buttonText='Adopt' />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default Projectadopt