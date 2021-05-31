// import React, { useState, useEffect } from 'react';
// import { Container, Grow, Grid, Paper } from '@material-ui/core';
// import { useDispatch } from 'react-redux';

// import { getPosts } from '../../actions/posts';
// import Posts from '../Posts/Posts';
// import Form from '../Form/Form';
// import Pagination from '../Pagination/Pagination';

// const Dashboard = () => {
//   const [currentId, setCurrentId] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [currentId, dispatch]);

//   return (
//     <Grow in>
//       <Container maxWidth="xl">
//         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//           <Grid item xs={12} sm={6} md={6} lg={8}>
//             <Posts setCurrentId={setCurrentId} />
//           </Grid>
//           <Grid item xs={12} sm={4} >
//             <Form currentId={currentId} setCurrentId={setCurrentId} />
//             <Paper  elevation={6}>
//               <Pagination />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Container>
//     </Grow>
//   );
// };

// export default Dashboard;
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Avatar, Typography, Button } from "@material-ui/core";

import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1 style={{color: 'white'}}>Welcome to Photo Diaries App</h1>

      <div >
          {/* <Sidenav /> */}
          <Typography
            component={Link}
            to="/posts"
            // className={classes.heading}
            variant="h5"
            align="center"
          >
            <b>PhotoBook App By Ashish Raj</b>
          </Typography>
          <img
            // className={classes.image}
            // src={p1}
            alt="icon"
            height="60"
          />
        </div>
    </div>
  )
}

export default Dashboard
