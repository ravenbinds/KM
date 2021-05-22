import React from 'react';
import Grid from '@material-ui/core/Grid';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { makeStyles } from '@material-ui/core/styles';

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
        overflow: 'hidden'
    },

    Grid2: {
        padding: theme.spacing(2),
        justify: "space-around",

    }
}));

function SimpleAccordion(props) {

    const {items} = props;

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
            {
                items.map(item=>(
                    <Accordion expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls={items.panel+"bh-content"} id={item.panel+"bh-header"}>
                            <Typography className={classes.heading}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Box className={classes.Box}>
                            <Grid item xs={1} className={classes.Grid2}>
                                <FolderOpenRoundedIcon fontSize="large" />
                            </Grid>
                            <Grid item xs={10} className={classes.Grid2}>
                                <Typography>
                                Emotion Detection through Facial Expression.
                                </Typography>
                            </Grid>
                            <Grid item xs={3} flexDirection="row">
                                <Typography>
                                <CheckRoundedIcon />
                                Completed
                                </Typography>
                            </Grid>
                        </Box>
                        </AccordionDetails>
                    </Accordion>
                ))
            }

      </div>
    );
}

export default SimpleAccordion
