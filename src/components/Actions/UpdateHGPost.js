import { IconButton, InputAdornment } from '@material-ui/core';
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { db } from '../../firebase';
import { Formik, Form, FieldArray } from 'formik'
import * as Yup from 'yup'
import Textfield from '../FormsUI/Textfield';
import Select from '../FormsUI/Select';
import Button from '../FormsUI/Button';
import Checkbox from '../FormsUI/Checkbox';
import { useUserContext } from '../../UserContext'
import { Add, Remove } from '@material-ui/icons';
import { uuid } from 'uuidv4';
// import { Typography } from '@material-ui/core';
// import DateTimePicker from '../FormsUI/DateTimePicker';

function UpdateHGPost(props) {

    const currentUser = useUserContext();

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    function sendInfo(values) {
        const newId = uuid()
        var dateString = new Date();
        db.collection("HuntingGround").doc(newId)
        .set({
            category: values.category,
            seeklist: values.seeklist,
            // application: [],
            description: values.hgdescription,
            title: values.hgtitle,
            userid: currentUser.uid, //should be the user profile details, not google details
            avatar: currentUser.photoURL,
            nickname: currentUser.displayName,
            seeking: values.seeking,
            hgid: newId,
            // createdDate: values.createdDate,
            timestamp: formatDate(dateString),
        })
    }


    const INITIAL_FORM_VALUES = {
        category: props.post.category,
        seeking: false,
        seeklist: [""],
        hgdescription: props.post.description,
        hgtitle: '',
        paid: false,
        amount: '',
    };

    const FORM_VALIDATION = Yup.object().shape(
        {
            category: Yup.string().required('Required'),
            seeklist: Yup.array(),
            hgdescription: Yup.string().required('Please add some description'),
            hgtitle: Yup.string().required('Please enter an appropriate title'),
            paid: Yup.boolean(),
        }
    )


    return (
        <Formik
            initialValues={ INITIAL_FORM_VALUES }
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
                console.log('HG value: ', values);
                sendInfo(values);
            }}
        >
            {({values, errors})=> (
                <Form>
                    <Grid container direction='row'>
                        <Grid item xs={6}>
                        <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Textfield name='hgtitle' label='Title' />
                    </Grid>
                    <Grid item xs={12}>
                        <Textfield multiline name='hgdescription' label='Description' />
                    </Grid>
                    <Grid item xs={12}>
                        <Select 
                        InputProps={{startAdornment: <InputAdornment position='start'>#</InputAdornment>}}
                        name='category'
                        label='Category' 
                        options={
                            {'#PROJECTCOLLABS':'ProjectCollabs',
                             '#PROJECTADOPTS':'ProjectAdopts', 
                             '#PROBLEMSTATEMENTS':'ProblemStatements', 
                             '#PARTTIMEJOBS':'Jobs'
                            }} 
                        />
                    </Grid>
                    {/*NOTEKD Should add ways to append to the array */}
                    {/* <Grid item xs={11}>
                        <Textfield name='seeklist' label='What are you looking for?' />
                    </Grid> */}
                     <Grid item xs={12}>
                        <Checkbox name='seeking' label='Looking for something?' />
                    </Grid>
                    {
                        values.seeking && (
                            <Grid item xs={12}>
                    
                    <FieldArray name='seeklist' >
                            {
                                (fieldArrayProps)=> {
                                    // console.log('fieldArrayProps ', fieldArrayProps)
                                    // const {push, remove, form} = fieldArrayProps
                                    // const {values} = form
                                    // const {seeklist} = values
                                    return <Grid container spacing={1}>
                                        {
                                            fieldArrayProps.form.values.seeklist.map((seeklistItem, index)=> (
                                                <Grid item xs={12} key={index}>
                                                    <Grid container direction='row' alignItems='center' justify='space-between'>
                                                        <Grid item>
                                                            <Textfield name = {`seeklist[${index}]`} placeholder='What are you looking for?' onKeyPress={(event)=> {if(event.key === 'Enter'){fieldArrayProps.push(index)}}}/>
                                                        </Grid>
                                                        <Grid item>
                                                            <IconButton onClick={()=> fieldArrayProps.remove(index)}><Remove/></IconButton>
                                                            <IconButton onClick={()=> fieldArrayProps.push(index)}><Add/></IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>     
                                }
                            }
                        </FieldArray>
                        
                    </Grid>
                        )
                    }
                    
                    <Grid item xs={6}>
                        <Checkbox name='paid' label='Paid?' />
                    </Grid>
                    {
                        values.paid && 
                        (<Grid item xs={6}>
                            <Textfield name='amount' label='Amount'/>
                        </Grid>)
                    }
                    <Button>Submit</Button>
                    
                </Grid>
                        </Grid>
                        <Grid item xs={6}>
                        <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
                        </Grid>
                    </Grid>
               
            </Form>

            )
            
            }
            
        </Formik>
    );
}

export default UpdateHGPost

UpdateHGPost.defaultProps = {
    userdocumentID: 'sampleuser'
}
