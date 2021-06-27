import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Avatar,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import moment from "moment";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import { deletePost, getPost, likePost } from "../../../actions/posts";
import Form from "../../Form/Form";
import  Home from '../../Home/Home';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpens = () => {
    // setOpen(true);
    history.push('/forms')
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><FavoriteIcon fontSize="35px" style={{color:"red"}} />
          &nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others`
           : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : 
        (
          <><FavoriteBorderIcon fontSize="small" style={{color:"black"}} />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }
    // import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
    return <><FavoriteBorderIcon fontSize="small" style={{color:"black"}}/>&nbsp;Like</>;

   
  };

  const openPost = (e) => {
    dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };


  return (
    <Card className={classes.card} raised elevation={12}>
      
      <Typography variant="h6">{post.name}</Typography>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={classes.overlay}>
        

        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      
      <div className={classes.details} >
        <Typography variant="body2" component="h4" 
        style={{fontWeight:"600", color:"#33ff00"}}>
          
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>

      <CardContent>
        <Typography variant="body2" component="p" style={{color:"white", font:"caption"}}>
          {post.message}
        </Typography>
      </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions} 
      style={{backgroundImage:"linear-gradient(to right, #0a0e0f, #081718, #061f1d, #04271f, #0a2e1d);"}}>
        <Button className={classes.Like} style={{textTransform: 'none', display:'contents'}}
          size="large"
          color="red"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>

        <Button style={{textTransform: 'none'}}
          size="large"
          disabled={!user?.result}
          
   
        >
          
          <ChatBubbleOutlineIcon fontSize="small" style={{color:"green"}} /> 
          &nbsp;Comment
        </Button>
           <div>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Your PhotoBook Diaries"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?

           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={() => dispatch(deletePost(post._id))} color="primary" autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
      </div>

        {(user?.result?.googleId === post?.creator ||
          user?.result._id === post?.creator) && (
          <Button style={{textTransform: 'none'}}
            size="small"
            color="secondary"
            // onClick={() => dispatch(deletePost(post._id))}
            onClick={handleClickOpen}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}

{(user?.result?.googleId === post?.creator ||
          user?.result._id === post?.creator) && (
      <div className={classes.overlay2}>
        
        <Button
          style={{ color: "white" }}
          size="large"
          onClick={() => setCurrentId(post._id)}
          // onClick={handleClickOpens}
        >
          <EditRoundedIcon fontSize="Medium" />
        </Button>
      </div>
          )}
      </CardActions>
    </Card>
  );
};

export default Post;
