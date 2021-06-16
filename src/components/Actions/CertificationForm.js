import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { db } from '../../firebase';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Textfield from '../FormsUI/Textfield';
import DateTimePicker from '../FormsUI/DateTimePicker';
import Button from '../FormsUI/Button';
// import Select from '../FormsUI/Select';
// import Checkbox from '../FormsUI/Checkbox';
// import { Typography } from '@material-ui/core';

function CertificationForm(props) {
  
  function sendInfo(values) {
    db.collection('profile/'+ props.userdocumentID +'/certification').doc()
        .set({
          certificationName: values.certificationName,
          issuingOrganization: values.issuingOrganization,
          description: values.description,
          issueDate: values.issueDate,
          expiryDate: values.expiryDate,
          credentialID: values.credentialID,
          credentialURL: values.credentialURL,

        })
  }
  

  const INITIAL_FORM_VALUES = {
    certificationName: '',
    issuingOrganization: '',
    description: '',
    issueDate: new Date(),
    expiryDate: new Date(),
    credentialID: '',
    credentialURL: ''
  };

  const FORM_VALIDATION = Yup.object().shape(
    {
        certificationName: Yup.string().required('Required'),
        issuingOrganization: Yup.string().required('Required'),
        description: Yup.string(),
        issueDate: Yup.date().required('Required'),
        expiryDate: Yup.date(),
        credentialID: Yup.string(),
        credentialURL: Yup.string(),
    }
  )


  return (
    <Formik
      initialValues = {INITIAL_FORM_VALUES}
      validationSchema = {FORM_VALIDATION}
      onSubmit = {values => {
        console.log('Certification value: ',values);
        sendInfo(values);
    }}
    >
      <Form>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Textfield name='certificationName' label='Certification Name'/>
            </Grid>
            <Grid item xs={12}>
                <Textfield name='issuingOrganization' label='Issuing Organization'/>
            </Grid>
            <Grid item xs={12}>
                <Textfield multiline name='description' label='Description'/>
            </Grid>
            <Grid item xs={6}>
                <DateTimePicker name='issueDate' label='Date issued'/>
            </Grid>
            <Grid item xs={6}>
                <DateTimePicker name='expiryDate' label='Expiry Date'/>
            </Grid>
            <Grid item xs={12}>
                <Textfield name='credentialID' label='Credential ID'/>
            </Grid>
            <Grid item xs={12}>
                <Textfield name='credentialURL' label='Credential URL'/>
            </Grid>
            <Button>
                Submit
            </Button>
        </Grid>
      </Form>
    </Formik>
  );
}

export default CertificationForm

CertificationForm.defaultProps = {
  userdocumentID: 'sampleuser'
}
