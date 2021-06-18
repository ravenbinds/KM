import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import SimpleModal from './SimpleModal';

const useStyles = makeStyles((theme) => ({

    heading: {
        fontSize: theme.typography.pxToRem(16),
        flexBasis: '33.33%',
        flexShrink: 0,
        color: '#00296B',
    },

    Box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(2),
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: theme.spacing(1),
    },

    Grid2: {
        padding: theme.spacing(2),
        justify: "space-around",

    },

    cardText: {
        paddingLeft: theme.spacing(1)
    },
}));

function ItemCard(props) {

    const { startIcon, heading, description, statusIcon, status } = props;

    const classes = useStyles();
    return (
        <Box className={classes.Box}>
            <Grid container xs={12} direction="column">
                <Grid container direction="row" justify="space-between">
                    <Grid item xs={1}>
                        {startIcon}
                    </Grid>
                    <Grid item xs={11} className={classes.cardText}>
                        <Typography align="left" variant="h6"> {heading} </Typography>
                        <Typography align="left" variant="body1"> {description} </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container direction="row" justify='flex-end' alignItems="center">
                        <Grid item> {statusIcon} </Grid>
                        <Grid item>
                            <Typography align="right" className={classes.cardText}>  {status} </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

function SimpleAccordion(props) {
    const classes = useStyles();

    // const [isCurrentUser,setIsCurrentUser] = useState(false);

    // if(currentUser.uid == props.userdocumentID){
    //     setIsCurrentUser(true);
    // }

    const items = props.items;

    //MODAL variables, form
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid item xs={12} alignItems="flex-start">
            {
                items.map(item => (
                    <Accordion expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={items.panel + "bh-content"} id={item.panel + "bh-header"}>
                            <Typography className={classes.heading}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container direction="column" spacing={3}>
                                {(item.entries.length > 0) ?
                                    <Grid item>
                                        <Grid container direction="column">
                                            {
                                                item.entries.map(entry => (
                                                    <ItemCard startIcon={item.startIcon} heading={entry.heading} description={entry.description} status={entry.status} statusIcon={entry.statusIcon} />
                                                ))
                                            }
                                        </Grid>
                                    </Grid>
                                    :
                                    <Grid item align='center'>
                                        <Typography variant='subtitle1'>Nothing to show here</Typography>
                                    </Grid>
                                }
                                {
                                    (item.title === 'Posts') ?
                                        <Grid item>
                                            {/* Blank Grid item */}
                                        </Grid>
                                        :
                                        <Grid item align='right'>
                                            <SimpleModal body={item.form} startIcon={<Add />} title={"Add " + item.title} variant='outlined' button={"Add " + item.title} />
                                        </Grid>
                                }

                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Grid>
    );
}

export default SimpleAccordion

SimpleAccordion.defaultProps = {
    userdocumentID: 'sample user'
}