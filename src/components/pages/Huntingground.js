
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { GroupSharp, EmojiObjects, Search, Work, KeyboardArrowRightSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GroundCard from '../GroundCard';
import { NavLink } from 'react-router-dom';
import Top from '../Top'
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

            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <GroundCard
                        icon={GroupSharp}
                        title="Collaborate With New Teams"
                        desc="Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches"
                        tag="#PROJECTCOLLABS"
                        link="/Huntingground/projectcollab"
                    />
                </Grid>
                <Grid item sm={6}>
                    <GroundCard
                        icon={Search}
                        title="Adopt Some Polishable Gems"
                        desc="Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches"
                        tag="#PROJECTADOPTS"
                        link="/Huntingground/projectadopt"
                    />
                </Grid>
                <Grid item sm={6}>
                    <GroundCard
                        icon={EmojiObjects}
                        title="Lookout For Mindblowing Ideas?"
                        desc="Dont stress your brain to get the rumoured inspiration. Come and find them ideas"
                        tag="#PROBLEMSTATEMENTS"
                        link="/Huntingground/"
                    />
                </Grid>
                <Grid item sm={6}>
                    <GroundCard
                        icon={Work}
                        title="Freelancers' For Hire"
                        desc="Find the team you can work with to realize your dream projects. Blah Blah Blah Motivation speeches"
                        tag="#PARTTIMEJOBS"
                        link="/Huntingground/"
                    />
                </Grid>
                <Grid item sm={12}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-around" my={3} height="100px" textAlign="center">
                        <Typography variant="h6">
                            Contribute your ideas to the Hunting Ground. And get your dream project off the ground.
                        </Typography>
                        <NavLink to="/createpages" style={{ textDecoration: "none" }} >
                            <Button
                                variant="contained"
                                color="primary"
                                endIcon={<KeyboardArrowRightSharp/>}
                            >
                                <Typography>Get Started</Typography>
                            </Button>
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>
        </div >

    )
}

export default Huntingground
