import { FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup } from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { db } from '../../firebase';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import DateTimePicker from '../FormsUI/DateTimePicker';
import Button from '../FormsUI/Button';
import Checkbox from '../FormsUI/Checkbox';
// import { Typography } from '@material-ui/core';
import { useUserContext } from '../../UserContext'

function CreateHGPost(props) {

    const currentUser = useUserContext();


    function sendInfo(values) {
        db.collection("huntingground").doc()
        .set({
            category: values.category,
            seeklist: values.seeklist,
            application: [],
            hgdescription: values.hgdescription,
            hgtitle: values.hgtitle,
            paid: values.paid,
            userid: currentUser.uid, //should be the user profile details, not google details
            avatar: currentUser.photoURL,
            nickname: currentUser.displayName,
            createdDate: values.createdDate,
            timestamp: values.timestamp,
        })
    }


    const INITIAL_FORM_VALUES = {
        category: '',
        seeklist: [],
        hgdescription: '',
        hgtitle: '',
        paid: false,
    };

    const FORM_VALIDATION = Yup.object().shape(
        {
            category: Yup.string().required('Required'),
            seeklist: Yup.string(),
            hgdescription: Yup.string().required('Please add some description'),
            hgtitle: Yup.string().required('Please enter an appropriate title'),
            paid: Yup.boolean(),
        }
    )


    return (
        <Formik
            initialValues={{ INITIAL_FORM_VALUES }}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
                console.log('HG value: ', values);
                sendInfo(values);
            }}
        >
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Textfield name='hgtitle' label='Title' />
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield multiline name='hgdescription' label='Description' />
                    </Grid>
                    <Grid item xs={12}>
                        <Select InputProps={{ startAdornment: <InputAdornment position='start'>#</InputAdornment> }} name='category' label='Category' options={['ProjectCollabs', 'ProjectAdopts', 'ProblemStatements', 'PartTimeJobs']} />
                    </Grid>
                    {/*NOTEKD Should add ways to append to the array */}
                    <Grid item xs={11}>
                        <Textfield name='seeklist' label='What are you looking for?' />
                    </Grid>
                    <Grid item xs={1}>
                        <Checkbox name='paid' label='Paid?' />
                    </Grid>
                    <Button>Submit</Button>
                </Grid>
            </Form>
        </Formik>
    );
}

export default CreateHGPost

CreateHGPost.defaultProps = {
    userdocumentID: 'sampleuser'
}
