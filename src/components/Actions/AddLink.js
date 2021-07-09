import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import Textfield from '../FormsUI/Textfield';
import Button from '../FormsUI/Button';
import { db } from '../../firebase';

function AddLink({projectid}) {

    function sendInfo(values) {
        db.collection("projects").doc(projectid).collection("links").add({
            link: values.link,
        })
    }

    const INITIAL_FORM_VALUES = {
        link: '',
    }

    const FORM_VALIDATION = Yup.object().shape(
        {
            link: Yup.string().url().required("Required")
        }
    )

    return (
        <Formik initialValues = {INITIAL_FORM_VALUES} validationSchema = {FORM_VALIDATION} onSubmit= {(values, {resetForm}) => {
            console.log('URL: ', values);
            //function to send info to firestore
            sendInfo(values);
            resetForm(INITIAL_FORM_VALUES)
        }}>
            <Form>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Textfield name='link' label='Enter URL'/>
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

export default AddLink
