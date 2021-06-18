import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import Supportreq from './supportrequest';
import Top from '../Top'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    Grid: {
        padding: theme.spacing(1),

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {

        margin: theme.spacing(3, 1, 2),
        position: 'static',
        color: '#FFFFFF',
        display: 'flex',
        background: '#8C98FF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        maxWidth: '300px',
        maxHeight: '60px',
    },
    appbar: {
        borderRadius: '6px',
    },
}));

export default function Createpages() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="Content" overflow="scroll">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    Support Requests
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <div className={classes.root}>
                <AppBar position="static" color="inherit" className={classes.appbar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Create support task" {...a11yProps(0)} />
                        <Tab label="View my requests" {...a11yProps(1)} />
                        <Tab label="Acknowledge support" {...a11yProps(2)} />
                        <Tab label="Track support projects" {...a11yProps(3)} />


                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <form className={classes.form} noValidate>
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="To"
                            defaultValue="@username"
                            helperText="Enter username"
                            name="username"
                            autoComplete="name"
                            autoFocus

                        ></TextField>
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            multiline
                            fullWidth
                            id="req"
                            label="Request description"
                            name="req"
                            autoComplete="username"
                            autoFocus
                            rows={4}
                        />
                        <TextField

                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="projectname"
                            label="Project title"
                            name="projectname"
                            autoComplete="name"
                            autoFocus

                        />
                        <Grid container direction="row" justify="flex-end">

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                align="right"
                                label="Paid"
                            /></Grid>
                        <Grid container direction="row" justify="space-between">

                            <Button
                                type="reset"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Reset
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Supportreq />
                    <Supportreq />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Supportreq />
                    <Supportreq />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Supportreq />
                    <Supportreq />

                </TabPanel>

            </div></Box>
    );
}