import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import man from "../../man.svg"
import Avatar from '@material-ui/core/Avatar';
import Top from '../Top';
import HGPosts from '../HGPosts';
import {useState, useEffect} from 'react'
import {db} from '../../firebase'
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    Grid: {
        display: 'flex',
        padding: theme.spacing(1),
    },
}));

const HGPage = (props) => {
    const classes = useStyles();

    const category = props.location.state.category;

    const [hgposts,setHgPosts] = useState([]);
    const [loading,setLoading] = useState(false);

    const ref = db.collection('HuntingGround') //instead of YpDaruUKtfj8RENfJV86 we can add user Id here

    function getHgPosts() {
        setLoading(true);
        ref.where('category','==',category).onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push({
                        username: 'Sample User',
                        title: doc.data().title,
                        description: doc.data().description,
                        tag: doc.data().category,
                        seeklist: doc.data().seeklist
                    }
                    );
                });
                setHgPosts(items);
                setLoading(false);
            });
        }

    useEffect(() => {
        console.log('location ',props.location)
        getHgPosts();
    },[]);

    if(loading){
        return <h6>Loading...</h6>
    }

    return (
        <div className="Contents">
            <Top />
            <Box py={3}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    Hunting ground
                </Typography>
            </Box>
            <Grid container justify="flex-start" alignItems="flex-start" spacing={1}>
                {
                    (hgposts.length>0) ? (
                        <Grid item xs={12} >
                            <Grid container justify="flex-start" alignItems="flex-start" spacing={2}>
                            {
                                hgposts.map(post => (
                                    <Grid item xs={12}>
                                        <HGPosts username={post.username} title={post.title} tag={post.tag} category='1' description={post.description} seeklist={post.seeklist} button='#' buttonText='Apply' />
                                    </Grid>
                                ))
                            }
                            </Grid>
                        </Grid>
                        ) 
                        :
                        (<Grid item xs={12} align='center'>
                            <Typography>Nothing to see here</Typography>
                        </Grid>)
                }
            </Grid>
        </div >
    )
}

export default withRouter(HGPage)

HGPage.defaultProps = {
    category: '#PROJECTCOLLABS'
}
