// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { db } from '../../firebase';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Textfield from '../FormsUI/Textfield';
// import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DateTimePicker';
import Button from '../FormsUI/Button';
// import Checkbox from '../FormsUI/Checkbox';
// import { Typography } from '@material-ui/core';

function EducationForm(props) {
  
  function sendInfo(values) {
    db.collection("profile/"+props.userdocumentID+"/education").doc()
      .set({
        school: values.school,
        degree: values.degree,
        fieldOfStudy: values.fieldOfStudy,
        startDate: values.startDate,
        endDate: values.endDate,
        grade: values.grade,
        activities: values.activities,
      })
  }
  

  const INITIAL_FORM_VALUES = {
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: new Date(),
        endDate: new Date(),
        grade: '',
        activities: '',
  };

  const FORM_VALIDATION = Yup.object().shape(
    {
        school: Yup.string().required('Required'),
        degree: Yup.string().required('Required'),
        fieldOfStudy: Yup.string(),
        startDate: Yup.date(),
        endDate: Yup.date(),
        grade: Yup.number().positive(),
        activities: Yup.string(),
    }
  )


  return (
    <Formik
      initialValues = {INITIAL_FORM_VALUES}
      validationSchema = {FORM_VALIDATION}
      onSubmit = {(values, {resetForm}) => {
        console.log('Experience value: ',values);
        sendInfo(values);
        resetForm(INITIAL_FORM_VALUES)
    }}
    >
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Textfield name='school' label='School'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Textfield name='degree' label='Degree'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Textfield name='fieldOfStudy' label='Field Of Study'/>
                </Grid>
                <Grid item xs={4}>
                    <Textfield name='grade' label='Grade' />
                </Grid>
                <Grid item xs={4}>
                    <DateTimePicker name='startDate' label='From'/>
                </Grid>
                <Grid item xs={4}>
                    <DateTimePicker name='endDate' label='Till'/>
                </Grid>
                <Grid item xs={12}>
                    <Textfield multiline name='activities' label='Activities & Societies'/>
                </Grid>
                <Button>Submit</Button>
            </Grid>
        </Form>
    </Formik>
  );
}

export default EducationForm

EducationForm.defaultProps = {
  userdocumentID: 'sampleuser'
}
