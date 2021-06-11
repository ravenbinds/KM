import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Top from '../Top';
import HGPosts from '../HGPosts';


const useStyles = makeStyles((theme) => ({
    Grid: {
        display: 'flex',
        padding: theme.spacing(1),

    },
}));
const Freelance = () => {
    const classes = useStyles();

    const hgpost = [
        { username: 'Alfred West', title: 'CIVIL LAB REDECOR PROJECT', description: ' Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity', tag: '#FREELANCE', category: '3', seeklist: ["ARCHITECT", "AUTOCAD profiency", "Must have prior experience"] },

    ]

    return (
        <div className="Contents">
            <Top />
            <Grid container justify="flex-start" alignItems="flex-start" className={classes.Grid}>
                <Grid item xs={12} >
                    <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Hunting ground
                </Typography></Grid>
                <Grid item xs={12} >
                    <Grid container justify="flex-start" alignItems="flex-start" spacing={1}>

                        {
                            hgpost.map(post => (
                                <Grid item xs={12} >
                                    <HGPosts username={post.username} title={post.title} tag={post.tag} category='3' description={post.description} seeklist={post.seeklist} button="#" buttonText='Adopt' />
                                </Grid>
                            ))
                        }

                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default Freelance
