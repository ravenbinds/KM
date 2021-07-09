import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from 'yup'
import { db } from '../../firebase';
import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DateTimePicker';
import Checkbox from '../FormsUI/Checkbox';
import Button from '../FormsUI/Button';
import { Typography } from '@material-ui/core';
import {useUserContext} from '../../UserContext'
import { uuid } from 'uuidv4';
import { Add, Remove } from '@material-ui/icons';
import { IconButton, InputAdornment } from '@material-ui/core';

function ProjectForm(props) {

    const currentUser = useUserContext();
    // const [userDetails, setUserDetails] = useState([]);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    // function getUserDetails(listofusers) 
    // {   const items = [];
    //     const teammembers = ["diju19599@gmail.com","cartalover@gmail.com"]
    //     listofusers.map(member=>{
    //         console.log('memner: ',member)
    //         db.collection('users').where('email','==',member).onSnapshot((querySnapshot)=> {
    //             querySnapshot.forEach((doc)=> {
    //                 items.push({
    //                         avatar: doc.data().avatar,
    //                         nickname: doc.data().nickname
    //                     })
    //                 })
    //             })
    //     })
    //     setUserDetails(items);
    //     console.log('Users: ',userDetails);        
    // }

    function sendInfo(values) {
        const newId = uuid()
        var dateString = new Date();
        db.collection("projects").doc(newId)
        .set({
            pname: values.projectName,
            description: values.description,
            owner: currentUser.uid,
            email: currentUser.email,
            owneravatar: currentUser.photoURL,
            username: currentUser.displayName,
            teamMembers: values.teamMembers,
            startDate: values.startDate,
            status: values.status,
            mentor: values.mentor,
            projectid: newId,
            progress: "0", //change according to status
            tracking: "0" //should be calculated rather than assigned...?
        });
        db.collection("projects").doc(newId).collection("milestones").add({
            timestamp: formatDate(dateString),
            text: "Opened on"
        });
        // getUserDetails(values.teamMembers);
        // userDetails.map(item=>{
        //     db.collection("projects").doc(newId).collection("teamMembers").add(item);
        // })
    }

    const INITIAL_FORM_VALUES = {
        projectName: '',
        description: '',
        // teammembers: '',
        startDate: new Date(),
        status: '',
        mentor: '',
        links: '',
        tags: '',
        teamMembers: [""],
    };

    const FORM_VALIDATION = Yup.object().shape(
        {
            projectName: Yup.string().required('Please enter a Project title'),
            description: Yup.string().required('Describe a bit please!'),
            // teammembers: Yup.string(),
            startDate: Yup.date().required('Please enter start date'),
            status: Yup.string().required('Required'),
            // status: Yup.string().oneOf(['Completed','Incomplete','Freezed']).required('Required'),
            mentor: Yup.string(),
            teamMembers: Yup.array(),
            // links: '',
            // tags: '',
        }
    )

    const [isComplete, setIsComplete] = useState(false);

    return (
        <Formik
            initialValues={INITIAL_FORM_VALUES }
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, {resetForm}) => {
                console.log('Project value: ', values);
                sendInfo(values);
                resetForm(INITIAL_FORM_VALUES)
            }}
        > 
        {({values, errors})=> (
            <Form>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Textfield name='projectName' label='Project Name' />
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield multiline rows={2} name='description' label='Description' />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Textfield name='teammembers' label='Team members' />
                    </Grid> */}
                    <Grid item xs={12}>
                        #TEAMMEMBERS
                    </Grid>
                    <Grid item xs={12}>
                        <FieldArray name='teamMembers'>
                            {
                                (fieldArrayProps)=> {
                                    return <Grid container spacing={1}>
                                    {
                                        fieldArrayProps.form.values.teamMembers.map((teamMembersItem, index)=> (
                                            <Grid item xs={12} key={index}>
                                                <Grid container direction='row' alignItems='center' justify='space-between'>
                                                    <Grid item xs={10}>
                                                        <Textfield name = {`teamMembers[${index}]`} placeholder='Team Member' onKeyPress={(event)=> {if(event.key === 'Enter'){fieldArrayProps.push(index)}}}/>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <IconButton onClick={()=> fieldArrayProps.remove(index)}><Remove/></IconButton>
                                                        <IconButton onClick={()=> fieldArrayProps.push(index)}><Add/></IconButton>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                }
                            }
                        </FieldArray>
                    </Grid>
                    <Grid item xs={12}>
                        <Select name='status' label='Project status' options={{'Completed':'Completed', 'Incomplete':'Incomplete', 'Freezed':'Freezed'}} />
                    </Grid>
                    {/* <Grid item xs={6}>
                        <Checkbox name='isCompleted' label='Completed?' onChange={() => { setIsComplete(true) }} />
                    </Grid>
                    {
                        isComplete ?
                            <Grid item xs={6}>
                                <Typography>Complete</Typography>
                            </Grid>
                            :
                            <Grid item xs={6}>
                                <Typography>Not complete</Typography>
                            </Grid>
                    } */}
                    <Grid item xs={6}>
                        <DateTimePicker name='startDate' label='Start Date' />
                    </Grid>
                    {/* status */}
                    {/* if completed then completed date */}
                    <Grid item xs={12}>
                        <Textfield name='mentor' label='Mentor' />
                    </Grid>
                    {/* links */}
                    {/* tags */}
                    <Grid item xs={12}>
                        <Button>Submit</Button>
                    </Grid>
                </Grid>
            </Form>
        )}
        </Formik>
    )
}

export default ProjectForm

ProjectForm.defaultProps = {
    userdocumentID: 'sampleuser'
}

