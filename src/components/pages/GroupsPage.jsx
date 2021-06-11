import { Box, Button, Typography, Icon } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Top from '../Top';
import { Add, SpeakerNotesOffRounded } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import GroupCard from '../GroupCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    groups: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr 1fr"
        },
    }
}));

const GroupsPage = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Top/>
            <Box py={3} display="flex" flexDirection="row" justifyContent="space-between">
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                        Your Groups
                </Typography>
                <Button variant="outlined" elavation="true" startIcon={<Add/>}>
                    <Typography>
                        New Group
                    </Typography>
                </Button> 
            </Box>

            <Box className={classes.groups}>
                <GroupCard
                    groupname="CSE Dept."
                />
                <GroupCard
                    groupname="FOSSers"
                />
                <GroupCard
                    groupname="VAST"
                />
            </Box>

            <Grid container>
                <Grid item xs={12}>
                        <Box my={3} >
                            <Typography variant="h5">
                                Announcements
                            </Typography>
                        </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" my={3}  minHeight="150px" textAlign="center">
                    <SpeakerNotesOffRounded style={{ fontSize: "4rem", color: "#474747" }}/>
                        <Typography variant="h6">
                            No Announcements Yet!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default GroupsPage
