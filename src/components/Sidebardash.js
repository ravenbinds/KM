import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../Logo.svg"
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import LinearProgressWithLabel from './prjectprogress';
import man from "../man.svg"
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    root: {
        display: 'flex',
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        border: 0,
        borderRadius: 20,
        flexDirection: 'row',
        boxShadow: '0px 4px 4px rgba(207, 231, 246, 0.25)',
        color: 'white',
        minwidth: '245px',
        minheight: '143px',
    },

    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    pos: {
        marginBottom: 12,

    },

}));

export default function SimpleCard() {
    const classes = useStyles();


    return (

        <Card className={classes.root}>
            <CardContent>
                <div className={classes.title}>
                    <Avatar alt="Remy Sharp" src={man} className={classes.large} />
                    <div>
                        <Typography color="textPrimary" variant="h6" gutterBottom>
                            Project Name Project NAme

        </Typography>
                    </div>
                </div>
                <Typography color="textPrimary" variant="body2" align="left" gutterBottom>
                    Progress

        </Typography>

                <LinearProgressWithLabel />
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}
