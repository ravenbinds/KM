
import Grid from '@material-ui/core/Grid';
import Timeline from '@material-ui/lab/Timeline';
import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { useUserContext } from '../../UserContext';
import SimpleModal from '../controls/SimpleModal';
import AddMilestone from '../Actions/AddMilestone'

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

const Milestones = (props) => {
    const classes = useStyles();
    const startdate = props.startDate

    const currentUser = useUserContext();
    
    const [milestones,setMilestones] = useState([]);
    var isOwner = false
    
    const ref = db.collection('projects').doc(props.projectid).collection('milestones')
    function getMilestones() {
        ref.orderBy('timestamp').onSnapshot((querySnapshot)=> {
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push({
                    text: doc.data().text,
                    timestamp: doc.data().timestamp,
                })
            })
            setMilestones(items);
        })        
    }

    if(currentUser.uid===props.owner){
        isOwner =  true
    }

    useEffect(()=> {
        getMilestones();
    },[]);

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.Grid}>
            <Grid item xs={12}>
                <Grid container direction="row" alignItems='center' justify='space-between'>
                    <Grid item>
                        <Box color="secondary.main" fontSize={17}>MILESTONES</Box>
                    </Grid>
                    <Grid item>
                        {isOwner && <SimpleModal body={<AddMilestone projectid={props.projectid}/>} title={'Add Milestone'} buttonText={'Add milestone'} variant='outlined'/>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Timeline align="alternate">
                    {
                        milestones && milestones.map(item=> (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary"/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent >{item.text}
                                    <Box color="secondary.text" fontSize={13}>{item.timestamp}</Box>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary"/>
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
        </Grid>
    )
}

export default Milestones
Milestones.defaultProps = {
    startDate: 'DEcember 25',
}
