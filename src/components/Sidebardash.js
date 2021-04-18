import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../Logo.svg"


const useStyles = makeStyles((theme) => ({

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    Postuseravatar: {
        width: 30,
        height: 30,
        padding:1,
    },
    root: {
        display: 'flex',
        background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
        border: 0,
        borderRadius: 20,
        boxShadow: '0px 4px 4px rgba(207, 231, 246, 0.25)',
        color: 'white',
        padding: '0 30px',
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
                <div className={classes.Postuseravatar}>
                    <img src={logo} alt="Meta"/>
                </div>
                <div>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        Project Name
                   
        </Typography>
        </div>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}
