
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { GroupSharp, EmojiObjects, Search, Work} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SimpleModal from '../controls/SimpleModal'
import GroundCard from '../GroundCard';

import Top from '../Top'
import CreateHGPost from '../Actions/CreateHGPost';
const useStyles = makeStyles((theme) => ({
  
}));

const Huntingground = () => {
    const classes = useStyles();

    return (
        <div className="Contents">

            <Top />

            <Box py={3}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    Hunting ground
                </Typography>
            </Box>

            <Grid container>
                <Grid item xs={6}>
                    <GroundCard
                        icon={GroupSharp}
                        title="Collaborate With New Teams"
                        desc="Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches"
                        tag="#PROJECTCOLLABS"
                    />
                </Grid>
                <Grid item xs={6}>
                    <GroundCard
                        icon={Search}
                        title="Adopt Some Polishable Gems"
                        desc="Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches"
                        tag="#PROJECTADOPTS"
                    />
                </Grid>
                <Grid item xs={6}>
                    <GroundCard
                        icon={EmojiObjects}
                        title="Lookout For Mindblowing Ideas?"
                        desc="Dont stress your brain to get the rumoured inspiration. Come and find them ideas"
                        tag="#PROBLEMSTATEMENTS"
                    />
                </Grid>
                <Grid item xs={6}>
                    <GroundCard
                        icon={Work}
                        title="Freelancers' For Hire"
                        desc="Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches"
                        tag="#PARTTIMEJOBS"
                    />
                </Grid>
            </Grid>
        </div >

    )
}

export default Huntingground
