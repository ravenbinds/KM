import { TextField } from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useForm, Form } from '../useForm';
import Button from '@material-ui/core/Button'
import { Add } from '@material-ui/icons';
import { db } from '../../firebase'

function CertificationForm(props) {
  const sendInfo = (e) => {
    e.preventDefault();

    {
      // db.collection("profile/YpDaruUKtfj8RENfJV86/certification").doc()
      db.collection('profile/'+ props.userdocumentID +'/certification').doc()
        .set({
          certificationName: values.certificationName,
          issuingOrganization: values.issuingOrganization,
          description: values.description,
          issueDate: values.issueDate,
          expiryDate: values.expiryDate,
          credentialID: values.credentialID,
          credentialURL: values.credentialURL,

        }, { merge: true });

    }

    setValues("");
  };
  const initialFValues = {
    certificationName: '',
    issuingOrganization: '',
    description: '',
    issueDate: new Date(),
    expiryDate: new Date(),
    credentialID: '',
    credentialURL: ''
  };

  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container justify="flex-start">
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Name"
            name="certificationName"
            value={values.certificationName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Issuing Organization"
            name="issuingOrganization"
            value={values.issuingOrganization}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            variant="outlined"
            label="Description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          ></TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            name={values.issueDate}
            label="Issuing Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name={values.expiryDate}
            label="Expiry Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Credential ID"
            name="credentialID"
            margin="dense"
            value={values.credentialID}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Credential URL"
            name="credentialURL"
            margin="dense"
            value={values.credentialURL}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item xs={12} justify="flex-end">

          <Button variant="outlined" size="medium" color="primary" onClick={sendInfo} startIcon={<Add />} >Add</Button>
        </Grid>
      </Grid>
    </Form>
  );
}

export default CertificationForm

CertificationForm.defaultProps = {
  userdocumentID: "sampleuser"
}