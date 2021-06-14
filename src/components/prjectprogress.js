import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
    root: {
        width: '100%',
        color: '#8CECDC',
        borderRadius: '5px',
    },
    colorPrimary: {
        color: "green"
    },
});


export default function LinearProgressWithLabel(props) {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress className={classes.colorPrimary} variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.defaultProps = {
    progress: '0',
}


