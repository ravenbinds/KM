import { FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {useForm, Form} from '../useForm';
import Button from '@material-ui/core/Button'
import { Add} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    Grid: {
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        padding: theme.spacing(2),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '30px',
        border: '0.01em solid #985DFF'
    },
}));

function ProjectForm() {

    const classes = useStyles();

    const initialFValues = {
        projectName: '',
        description: '',
        owner: '',
        teammembers: '',
        startDate: new Date(),
        status: '',
        mentor: '',
        links: '',
        tags: '',
    };

    const {values, setValues, handleInputChange} = useForm(initialFValues);
    
    return (
        <Form>
            <Grid container justify='center' alignItems='center' className={classes.Grid} alig> 
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Project Name"
                        name="projectName"
                        value={values.projectName}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                          }}
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
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Team Members"
                        name="teamMembers"
                        value={values.teamMembers}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        label="Mentor"
                        name="mentor"
                        value={values.mentor}
                        onChange={handleInputChange}
                        InputProps = {{startAdornment: <InputAdornment position="start">@</InputAdornment>}}
                    />
                </Grid>
                <Grid item xs={12} alignItems="flex-start">
                    <FormControl style={{ alignItems: "flex-start" }}>
                    <FormLabel>Status</FormLabel>
                    <RadioGroup
                        row
                        name="status"
                        value={values.status}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel
                        value="incomplete"
                        control={<Radio />}
                        label="Incomplete"
                        />
                        <FormControlLabel
                        value="complete"
                        control={<Radio />}
                        label="Complete"
                        />
                        <FormControlLabel
                        value="freezed"
                        control={<Radio />}
                        label="Freezed"
                        />
                    </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12} justify="flex-end" alignItems='flex-end'>
                    <Button variant="outlined" size="medium" color="primary" onClick="" startIcon={<Add/>} >Add</Button>
                </Grid>
            
      </Grid>
        </Form>
    )
}

export default ProjectForm
