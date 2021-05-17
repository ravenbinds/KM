
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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


}));
const Top = () => {
    const classes = useStyles();

    return (
        <Grid container >

            <Grid item xs={12} sm={6} >
                <Paper component="form" className={classes.Paper}>

                    <InputBase
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />

                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>

                <Typography align="right" color="textPrimary" variant="h6" padding="40px">
                    Hi blah
            </Typography>
            </Grid>

        </Grid>
    )
}

export default Top

