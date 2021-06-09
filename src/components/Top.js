
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { UserContext, useUserContext } from "../UserContext";

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
        borderRadius: '400px',
        boxShadow : 'none',
        border: '2px solid #DDD',
        padding: '2px 4px',
        alignItems: 'right',
    },
}));
const Top = () => {
    const classes = useStyles();

    const currentUser = useUserContext();
    return (
        <Grid container alignItems="center">
            <Grid item xs={12} sm={6} >
                <Paper component="form" className={classes.Paper}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />

                    <IconButton type="submit" className={classes.iconButton} aria-label="search" color="secondary.text">
                        <SearchIcon />
                    </IconButton>

                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography align="right" color="primary" variant="h6" padding="40px">
                    Hi {currentUser.displayName}
            </Typography>
            </Grid>

        </Grid>
    )
}

export default Top

