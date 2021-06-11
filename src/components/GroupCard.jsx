import { Box, Typography, Container, ButtonBase, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    card : {
        background: "white",
        width:"100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        background: "white",
        boxShadow: "0px 4px 14px #4747470F",
    },
    image : {
        background: "#acb6e5", /* fallback for old browsers */
        background: "linear-gradient(to right, #acb6e5, #86fde8)",
        minHeight: "150px",
        maxHeight: "150px",
        width: "100%",
        borderRadius: "10px 10px 0px 0px",
        overflow: "hidden",
        display:"flex",

        "& img" : {
            flexShrink: "0",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
        }
    },
    groupname : {
        padding: "10px"
    },
    touch: {
        border: "2px solid #FFFFFF00",
        borderRadius: "10px",
        transition: ".2s border",
        "&:hover" : {
            border: "2px solid #985DFF",
            borderRadius: "10px"
        },
        "& .MuiTouchRipple-root": {
            borderRadius: "10px",
            transform:"scale(1.01)",
        },
    },
    navlink : {
        width: "100%",
        color: 'inherit',
        textDecoration: 'inherit'
    }
}));

const GroupCard = ( props ) => {
    const classes = useStyles();
    return (
        <ButtonBase className={classes.touch}>
        <NavLink to="#" className={classes.navlink} exact>
            <Box textAlign="center" className={classes.card}>
                <Box className={classes.image}>
                    <Container component="img" src={props.image} disableGutters="true"/>
                </Box>
                <Typography className={classes.groupname} variant="h6">{props.groupname}</Typography>
            </Box>
        </NavLink>
        </ButtonBase>
    )
}

export default GroupCard
