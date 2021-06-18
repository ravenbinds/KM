import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Top from '../Top';
import HGPosts from '../HGPosts';
import {useState, useEffect} from 'react'
import {db} from '../../firebase'
import { withRouter } from 'react-router-dom'

const HGPage = (props) => {

    const category = props.location.state.category;

    const [hgposts,setHgPosts] = useState([]);
    const [loading,setLoading] = useState(false);

    const ref = db.collection('HuntingGround') //instead of YpDaruUKtfj8RENfJV86 we can add user Id here

    function getHgPosts() {
        setLoading(true);
        ref.where('category','==',category).orderBy("timestamp", 'desc').onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    // console.log('values, ',doc.data())
                    items.push({
                        username: doc.data().nickname,
                        title: doc.data().title,
                        description: doc.data().description,
                        tag: doc.data().category,
                        seeklist: doc.data().seeklist,
                        avatar: doc.data().avatar,
                        seeking: doc.data().seeking,
                        hgid: doc.data().hgid,
                        userid: doc.data().userid,
                    }
                    );
                });
                setHgPosts(items);
                setLoading(false);
            });
        }

    useEffect(() => {
        // console.log('location ',props.location)
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
            {
                (hgposts.length>0) ? (
                        <Grid container direction='column' justify="flex-start" alignItems="stretch" spacing={3}>
                            {
                                hgposts.map(post => (
                                    <Grid item xs={12}>
                                        <HGPosts post={post} buttonText='Apply' />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        ) 
                        :
                        (
                            <Typography>Nothing to see here</Typography>
                        )
                }
        </div >
    )
}

export default withRouter(HGPage)

HGPage.defaultProps = {
    category: '#PROJECTCOLLABS'
}
