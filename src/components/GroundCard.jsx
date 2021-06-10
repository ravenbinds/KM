import { Box, Typography, ButtonBase, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        background: "white",
        borderRadius: "10px",
        minHeight: "200px",
        transition: "all .2s",
        boxShadow: "0px 4px 14px #4747470F",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        fontSmoothing: "antialiased",
        "& $icon" : {
            transition: "all .2s",
        },
        "&:hover" : {
            transform: "scale(1.01)",
            boxShadow: "0px 4px 14px #47474733",
            "& $icon" : {
                color: "#985DFF",
                transform: "scale(1.1)",
            }
        }
    },
    title : {
        fontSize: "1.2rem"
    },
    icon : {
        fontSize: "3rem"
    },
    touch: {
        "& .MuiTouchRipple-root": {
            borderRadius: "10px",
            transform:"scale(1.01)",
        }
    },
    navlink : {
        color: 'inherit',
        textDecoration: 'inherit'
    }
}));


const GroundCard = ( props ) => {
    const classes = useStyles();
    const Icon = props.icon;
    return (
        <ButtonBase className={classes.touch}>
        <NavLink to="/" className={classes.navlink} exact>
            <Box textAlign="center" px={4} py={3} className={classes.card} >
                <Icon className={classes.icon}/>
                <Typography className={classes.title} variant="h5" textAlign="justify">{props.title}</Typography>
                <Typography variant="body2">{props.desc}</Typography>
                <Typography variant="caption" >{props.tag}</Typography>
            </Box>
        </NavLink>
        </ButtonBase>
    )
}

export default GroundCard
