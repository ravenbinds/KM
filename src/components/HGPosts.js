import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import man from "../man.svg";
import Avatar from "@material-ui/core/Avatar";
import SimpleModal from "./controls/SimpleModal";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import {db} from '../firebase'
import { useUserContext } from "../UserContext";
import UpdateHGPost from "./Actions/UpdateHGPost";



const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  Box: {
    padding: theme.spacing(2),
    background: "#FFFFFF",
    border: "1px solid #985DFF",
    boxSizing: "border-box",
    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: "8px",
  },
  tags: {
    border: "1px solid #985DFF",
    borderRadius: "8px",
    "&:hover": {
        transform: "scale(1.02)",
      color: theme.palette.secondary,
    },
  },
  card: {
    padding: theme.spacing(2),
    background: "white",
    borderRadius: "10px",
    minHeight: "200px",
    transition: "all .2s",
    boxShadow: "0px 4px 14px #4747470F",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    fontSmoothing: "antialiased",
    "& $icon": {
      transition: "all .2s",
    },
    "&:hover": {
      boxShadow: "0px 4px 14px #47474733",
      "& $icon": {
        color: "#985DFF",
        transform: "scale(1.1)",
      },
    },
  },
}));

function CardFooter({ avatar, username, tag, buttonText }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Grid container direction="row" justify="flex-start" spacing={1} alignItems="center" >
              <Grid item>
                <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>
              </Grid>
              <Grid item>
                <Typography variant="body1">{username}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography align="left" color="primary" variant="subtitle">
              {tag}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <SimpleModal title={"title"} buttonText={buttonText} variant="outlined" />
      </Grid>
    </Grid>
  );
}

function CardHeader({title, hgid,userid, post}){

  const currentUser = useUserContext();

  function deleteRecord(hgid){
    const ref=db.collection("HuntingGround")
    ref.doc(hgid).delete()
    // console.log('res, ', res)
  }

  return (
    <Grid container direction='row' justify='space-between' alignItems='center'>
      <Grid item>
        <Typography color="primary" variant="h5" align="left">
            {title}
        </Typography>
      </Grid>
      {
        (userid===currentUser.uid) && <Grid item>
          <Grid container direction ='row'>
            <Grid item>
              <SimpleModal body={<UpdateHGPost initialValues={post}/>} title='Edit this post' isIconButton={true} icon={<Edit/>} iconSize={'small'}/>
            </Grid>
            <Grid item>
              <IconButton size='small' onClick={()=>deleteRecord(hgid)}><Delete/></IconButton>
            </Grid>
        {/* <IconButton size='small' onClick={()=>{console.log('Date ',Date.now() )}}><Edit size='small'/></IconButton> */}
      </Grid>
      </Grid>
      }
    </Grid>
    
  )
}

function HGPosts(props) {
  const {post, buttonText } = props;
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="space-between" className={classes.card} spacing={2} >
      <Grid item xs={12}>
        <CardHeader title={post.title} hgid={post.hgid} userid={post.userid} post={post}/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{post.description}</Typography>
      </Grid>
      {post.seeking && (
        <Grid item xs={12}>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={1} >
            <Grid item xs={12}>
              <Typography>Looking for:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row" spacing={1}>
                {post.seeklist.map((item) => (
                  <Grid item>
                    <Button variant="outlined" className={classes.tags}>
                      {item}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      
      <Grid item xs={12}>
        <CardFooter avatar={post.avatar} username={post.username} tag={post.tag} buttonText={buttonText} />
      </Grid>
    </Grid>
  );
}

export default HGPosts;

HGPosts.defaultProps = {
  username: "Username",
  title: "Project Name",
  description: "Description",
  tag: "DEFAULTTAG",
  seeklist: null,
  button: "#",
  buttonText: "Apply",
  avatar: man,
};