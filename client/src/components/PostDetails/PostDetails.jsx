import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  CardMedia,
  Card,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return "no posts";

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper} >
        Please wait..
        <CircularProgress size="7em" />
      </Paper>
    );
  }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px", marginLeft:"2px", marginTop:"90px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section1}>
          <Typography variant="h4" >
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          {/* <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography> */}
          {/* <Divider style={{ margin: "20px 0" }} /> */}
        </div>
        <div className={classes.imageSectiong}>
          <img
            className={classes.media}
            src={post.selectedFile}
            alt={post.title}
          />
        </div>
      </div>
      
      
      {!!recommendedPosts.length && (
        
        <div className={classes.sections}>
          <Divider />
          <Typography gutterBottom variant="h5"
           className={classes.alsoLike}>You might also like:</Typography>
          <Divider />
          
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography  variant="h6" className={classes.title}>{title}</Typography>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography  variant="subtitle2">{message}</Typography>
                <Typography  className={classes.likes} variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="220px"  className={classes.photo} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};
export default PostDetails;
