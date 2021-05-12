
import Grid from '@material-ui/core/Grid';
import Timeline from '@material-ui/lab/Timeline';
import { makeStyles } from '@material-ui/core/styles';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({

    Grid: {
        padding: theme.spacing(2),
        display: 'flex',
        background: '#FFFFFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },
}));

const Milestones = () => {
    const classes = useStyles();

    return (

        <Grid
            container
            direction="row"
            justify="space-between" alignItems="flex-start" className={classes.Grid}

        ><Grid item xs={12}><Box color="secondary.main" fontSize={17}>MILESTONES</Box></Grid>
            <Timeline align="alternate">
                <TimelineItem >
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >Opened on December 20,1985
                    <Box color="secondary.text" fontSize={13}>December 20,1985 2.17AM</Box>
                    </TimelineContent>

                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Launched product website
                    <Box color="secondary.text" fontSize={13}>December 20,1985 2.17AM</Box>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Launched product website
                    <Box color="secondary.text" fontSize={13}>December 20,1985 2.17AM</Box>

                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Completed
                    <Box color="secondary.text" fontSize={13}></Box>

                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Grid>
    )
}

export default Milestones
