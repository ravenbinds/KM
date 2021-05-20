import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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
}));

export default function Createpages() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="Content">
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="center" color="textPrimary" variant="h5" padding="40px">
                    Support
            </Typography>
            </Grid>
            <Grid item xs={12} className={classes.Grid}>
            </Grid>
            <div className={classes.root}>
                <AppBar position="static" color="default">
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
                        <Tab label="View requests" {...a11yProps(1)} />
                        <Tab label="Acknowledge support" {...a11yProps(2)} />
                        <Tab label="Track support projects" {...a11yProps(3)} />


                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    Item One
      </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
      </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
      </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
      </TabPanel>

            </div></div>
    );
}