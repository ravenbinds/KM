import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../../man.svg"
import { Link, Route } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Top from '../Top';
import Divider from '@material-ui/core/Divider';
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

    const hgpost = [
        {username: 'Alfred West', title: 'CIVIL LAB REDECOR PROJECT', description: ' Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity', tag: '#PROJECTCOLLABS', category: '1', seeklist: ["3 team members","Mentor","Recommendations"] },
        {username: 'Alfred West', title: 'CIVIL LAB REDECOR PROJECT', description: ' Lab redecoration project. With the upcoming random event, the civil lab room no 2323 is undergoing renovation.Final redecoration along with calculated furniture placing required for ensuring maximum comfort, safety and productivity', tag: '#PROJECTCOLLABS' },
    ]

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="right" color="textPrimary" variant="h5" padding="40px">
                    Hunting ground
                </Typography>
                    {/* <Breadcrumbs aria-label="breadcrumb">
                        <Route path="/" render={() => (<MuiLink component={Link} to="/Huntingground">Huntinground   </MuiLink>)} />

                        <Typography color="textPrimary">Projectcollab</Typography>
                    </Breadcrumbs> */}
            </Grid>
            {
                hgpost.map(post=>(
                    <HGPosts username={post.username} title={post.title} tag={post.tag} category='1' description={post.description} seeklist={post.seeklist} button='#' buttonText='Apply'/>
                ))
            }
        </div >
    )
}

export default Projectcollab
