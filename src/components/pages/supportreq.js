import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justify: 'flex-start',
    },

});
function Supportreq() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar>
                }

                title="Hana Banana"
                subheader="September 14, 2016"
            />
            <CardActionArea>
                <CardContent>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Hi, We are absolute fans of your latest illustration works in project #howwellcanitbedone.
                        Will you help us in the logo design for our latest project Choco Chip Cookies?
            </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="outlined" size="small" color="primary">
                    Accept
          </Button>
                <Button variant="outlined" size="small" color="primary">
                    Cancel
          </Button>
            </CardActions>
        </Card>
    )
}

export default Supportreq
