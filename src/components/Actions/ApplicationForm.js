import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import Textfield from '../FormsUI/Textfield';
import Button from '../FormsUI/Button';
import { db } from '../../firebase';
import { useUserContext } from '../../UserContext'

function ApplicationForm({hgid}) {

    const currentUser = useUserContext();

    function sendInfo(values) {
        // db.collection("HuntingGround").doc("3fc68ff1-aa1b-46ce-8d00-a72f290c42ce").update({
        //     applications: db.FieldValue.arrayUnion('Entho')
        // })
        db.collection("HuntingGround").doc(hgid).collection('applications').add({
            applicationText: values.applicationText,
            nickname: currentUser.displayName,
            avatar: currentUser.photoURL,
            userid: currentUser.uid,
        })
    }

    const INITIAL_FORM_VALUES = {
        applicationText: '',
    }

    const FORM_VALIDATION = Yup.object().shape(
        {
            applicationText: Yup.string().required("Don't leave the application empty")
        }
    )

    return (
        <Formik initialValues = {INITIAL_FORM_VALUES} validationSchema = {FORM_VALIDATION} onSubmit= {values => {
            console.log('Application: ', values);
            //function to send info to firestore
            sendInfo(values);
        }}>
            <Form>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Textfield multiline rows={4} name='applicationText' label='Application'/>
                    </Grid>
                    <Grid item xs={8}>

                    {/* Cancel Button */}
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Apply</Button>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}

export default ApplicationForm
