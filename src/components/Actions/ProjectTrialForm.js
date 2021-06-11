import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import { Add } from '@material-ui/icons';
import { db } from '../../firebase';

import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DateTimePicker';
import Checkbox from '../FormsUI/Checkbox';
import Button from '../FormsUI/Button';
import { Typography } from '@material-ui/core';

function ProjectTrialForm(props) {

    // const classes = useStyles()

    function sendInfo(values) {
        // e.preventDefault();
            db.collection("projects").doc()
                .set({
                    pname: values.projectName,
                    description: values.description,
                    owner: values.owner,
                    teamMembers: values.teammembers,
                    startDate: values.startDate,
                    status: values.status,
                    mentor: values.mentor,
                });

        // setValues("");
    }

    const INITIAL_FORM_VALUES = {
        projectName: '',
        description: '',
        owner: props.userdocumentID,
        teammembers: '',
        startDate: new Date(),
        status: '',
        mentor: '',
        links: '',
        tags: '',
    };

    const FORM_VALIDATION = Yup.object().shape(
        {
        projectName: Yup.string().required('Please enter a Project title'),
        description: Yup.string().required('Describe a bit please!'),
        teammembers: Yup.string(),
        startDate: Yup.date().required('Please enter start date'),
        status: Yup.string().required('Required'),
        // status: Yup.string().oneOf(['Completed','Incomplete','Freezed']).required('Required'),
        mentor: Yup.string(),
        // links: '',
        // tags: '',
    }
    )

    const [isComplete, setIsComplete] =useState(false);

    return (
        <Formik
            initialValues = {{...INITIAL_FORM_VALUES}}
            validationSchema = {FORM_VALIDATION}
            onSubmit={values => {
                console.log('Project value: ',values);
                sendInfo(values);
            }}
        >
            <Form>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Textfield name='projectName' label='Project Name'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield name='description' label='Description'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield name='teammembers' label='Team members'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Select name='status' label='Project status' options={['Completed','Incomplete','Freezed']} />
                    </Grid>
                    <Grid item xs={6}>
                        <Checkbox name='isCompleted' label='Completed?' onChange={()=>{setIsComplete(true)}} />
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
                    }
                    <Grid item xs={6}>
                        <DateTimePicker name='startDate' label='Start Date'/>
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
        </Formik>
        
    )
}

export default ProjectTrialForm

ProjectTrialForm.defaultProps ={
    userdocumentID: 'sampleuser'
}

