import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useForm, Form } from '../useForm';
import Button from '@material-ui/core/Button'
import { Add } from '@material-ui/icons';
import { db } from '../../firebase';
function ExperienceForm() {
  const initialFValues = {
    company: '',
    jobTitle: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    employmentType: ''
  };

  const sendInfo = (e) => {
    e.preventDefault();

    {
      db.collection("profile/YpDaruUKtfj8RENfJV86/experience").doc()
        .set({
          company: values.company,
          jobTitle: values.jobTitle,
          description: values.description,
          startDate: values.startDate,
          endDate: values.endDate,
          employmentType: values.employmentType,

        }, { merge: true });

    }

    setValues("");
  };
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container justify="flex-start">
        <Grid item xs={12}>
          <TextField variant="outlined" label="Company" name="company" value={values.company} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Job Title"
            name="jobTitle"
            value={values.jobTitle}
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

        <Grid item xs={12} alignItems="flex-start">
          <FormControl style={{ alignItems: "flex-start" }}>
            <FormLabel>Employment Type</FormLabel>
            <RadioGroup
              row
              name="employmentType"
              value={values.employmentType}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="parttime"
                control={<Radio />}
                label="Part Time"
              />
              <FormControlLabel
                value="fulltime"
                control={<Radio />}
                label="Full Time"
              />
              <FormControlLabel
                value="intern"
                control={<Radio />}
                label="Intern"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name={values.startDate}
            label="Start Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name={values.endDate}
            label="End Date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} justify="flex-end">

          <Button variant="outlined" size="medium" color="primary" onClick={sendInfo} startIcon={<Add />} >Add</Button>
        </Grid>
      </Grid>
    </Form>
  );
}

export default ExperienceForm
