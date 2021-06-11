import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../../man.svg"
import Avatar from '@material-ui/core/Avatar';
import Top from '../Top';
import Divider from '@material-ui/core/Divider';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HGPosts from '../HGPosts';


const useStyles = makeStyles((theme) => ({
    Grid: {
        display: 'flex',
        padding: theme.spacing(1),

    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const Projectcollab = () => {
    const classes = useStyles();

    const hgpost = [
        { username: 'Alfred West', title: 'CIVIL LAB REDECOR PROJECT', description: ' Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity', tag: '#PROJECTCOLLABS', category: '1', seeklist: ["3 team members", "Mentor", "Recommendations"] },
        { username: 'Alfred West', title: 'CIVIL LAB REDECOR PROJECT', description: ' Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity', tag: '#PROJECTCOLLABS' },
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
                                    <HGPosts username={post.username} title={post.title} tag={post.tag} category='1' description={post.description} seeklist={post.seeklist} button='#' buttonText='Apply' />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default Projectcollab
