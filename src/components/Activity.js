
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Top from './Top';
const useStyles = makeStyles((theme) => ({

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },


    iconButton: {
        padding: 10,
        justifyContent: 'flex-end',
    },
    Paper: {
        display: 'flex',
        borderRadius: '400px 400px 400px 400px',
        padding: '2px 4px',
        alignItems: 'right',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    },
    Grid: {
        padding: theme.spacing(1),

    },

    Box: {
        display: 'flex',
        alignItems: 'flex-start ',
        padding: theme.spacing(2),
        flexDirection: 'column',
        background: '#FFFFFF',
        border: '1px solid #985DFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },
    Box2: {
        display: 'flex',
        alignItems: 'left',
        padding: theme.spacing(2),
        flexDirection: 'column',
        background: '#985DFF',
        border: '1px solid #985DFF',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',

    },
    button: {
        maxWidth: '64',
        maxHeight: '39px',
        position: 'static',
        color: '#FFFFFF',
        background: '#8C98FF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',

    },

}));
const Activity = () => {
    const classes = useStyles();

    return (
        <div className="Contents">
            <Top />
            <Grid item xs={12} className={classes.Grid}>
                <Typography align="left" color="textPrimary" variant="h5" padding="40px">
                    Notifications
</Typography>
            </Grid>
        </div>
    )
}

export default Activity
