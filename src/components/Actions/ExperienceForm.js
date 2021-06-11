import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { db } from '../../firebase';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DateTimePicker';
import Button from '../FormsUI/Button';
// import Checkbox from '../FormsUI/Checkbox';
// import { Typography } from '@material-ui/core';

function ExperienceForm(props) {
  
  function sendInfo(values) {
    db.collection("profile/"+props.userdocumentID+"/experience").doc()
      .set({
        company: values.company,
        jobTitle: values.jobTitle,
        description: values.description,
        startDate: values.startDate,
        endDate: values.endDate,
        employmentType: values.employmentType,
      })
  }
  

  const INITIAL_FORM_VALUES = {
    company: '',
    jobTitle: '',
    description: '',
    startDate: new Date(),
    endDate: '',
    employmentType: ''
  };

  const FORM_VALIDATION = Yup.object().shape(
    {
      company: Yup.string().required('Required'),
      jobTitle: Yup.string().required('Required'),
      description: Yup.string(),
      startDate: Yup.date().required(),
      endDate: Yup.date(),
      // employmentType: Yup.string().oneOf(['Full Time','Part time','Intern']),
      employmentType: Yup.string(),
    }
  )


  return (
    <Formik
      initialValues = {{INITIAL_FORM_VALUES}}
      validationSchema = {FORM_VALIDATION}
      onSubmit = {values => {
        console.log('Experience value: ',values);
        sendInfo(values);
    }}
    >
      <Form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Textfield name='company' label='Company'/>
          </Grid>
          <Grid item xs={12}>
            <Textfield name='jobTitle' label='Job Title'/>
          </Grid>
          <Grid item xs={12}>
            <Textfield multiline name='description' label='Description'/>
          </Grid>
          <Grid item xs={6}>
            <DateTimePicker name='startDate' label='Start Date'/>
          </Grid>
          <Grid item xs={6}>
            <DateTimePicker name='endDate' label='End date'/>
          </Grid>
          <Grid item xs={12}>
            <Select name='employmentType' label='Employment status' options={['Full Time','Part time','Intern']}/>
          </Grid>
          <Grid item xs={12}>
            <Button>Submit</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default ExperienceForm

ExperienceForm.defaultProps = {
  userdocumentID: 'sampleuser'
}
