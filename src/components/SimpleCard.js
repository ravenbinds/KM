import profilepic from "../Profile.jpg"
import StarsIcon from '@material-ui/icons/Stars';
const SimpleCard = () => {
    return (
        <div className="Card">
            <div className="CardHeader">
                <div className="Profilepic">
                    <img style={{width: "50px", height: "50px", borderRadius: "8px"}} src={profilepic}/> 
                </div>
                <div>
                <p style={{textAlign:"left"}}>Project Name Project Name </p>
                </div>
            </div>
            <div className="CardProgressBar">
                    <p>Progress:</p>
                    <p>85%</p>
            </div>
            <div>
                <div>
                <StarsIcon style={{color:"#000000", fontSize:"1.5em"}}/> stats
                </div>
                <div className="Tag Green">
                    Completed
                </div>
            </div>
        </div>
    )
}

export default SimpleCard




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import profile from "../Profile.jpg"


// const useStyles = makeStyles((theme) => ({

//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     Postuseravatar: {
//         width: 30,
//         height: 60,
//         padding:1,
//     },
//     root: {
//         display: 'flex',
//         background: 'linear-gradient(86.77deg, #FFFFFF 4.11%, rgba(242, 250, 255, 0.5) 91.8%, rgba(242, 250, 255, 0) 96.87%)',
//         border: 0,
//         borderRadius: 20,
//         boxShadow: '0px 4px 4px rgba(207, 231, 246, 0.25)',
//         color: 'white',
//         padding: '0 30px',
//     },

//     title: {
//         fontSize: 14,
//         fontWeight: 'bold',
//     },
//     pos: {
//         marginBottom: 12,

//     },
// }));

// export default function SimpleCard() {
//     const classes = useStyles();

//     return (
//         <Card className={classes.root}>
//             <CardContent>
//                 <div className={classes.Postuseravatar}>
//                     <img src={profile} alt="Meta" />
//                     hello
//                 </div>
//                 <div>
//                     <Typography className={classes.title} color="textPrimary" gutterBottom>
//                         Project Name
//                     </Typography>   
//                 </div>
//             </CardContent>
//             <CardActions>

//             </CardActions>
//         </Card>
//     );
// }
