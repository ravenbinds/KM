import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import Textfield from '../FormsUI/Textfield';
import Button from '../FormsUI/Button';
import { db } from '../../firebase';

function AddMilestone({projectid}) {

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    function sendInfo(values) {
        var dateString = new Date();
        db.collection("projects").doc(projectid).collection("milestones").add({
            text: values.text,
            timestamp: formatDate(dateString),
        })
    }

    const INITIAL_FORM_VALUES = {
        text: '',
    }

    const FORM_VALIDATION = Yup.object().shape(
        {
            text: Yup.string().required("Nothing here...Get some progress marked!")
        }
    )

    return (
        <Formik initialValues = {INITIAL_FORM_VALUES} validationSchema = {FORM_VALIDATION} onSubmit= {(values, {resetForm}) => {
            console.log('Milestone: ', values);
            //function to send info to firestore
            sendInfo(values);
            resetForm(INITIAL_FORM_VALUES)
        }}>
            <Form>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Textfield name='text' label='Milestone Achieved'/>
                    </Grid>
                    <Grid item xs={8}>

                    {/* Cancel Button */}
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Add</Button>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}

export default AddMilestone
