import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: "70%",
    height:"90%",
    marginLeft: "26%",
    [theme.breakpoints.down('sm')]: {
      width: "104%",
       height:"90%",
       marginLeft: "-1%",
    },

  },

  photo:{
    borderRadius:"20px",
    marginTop: "14px",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
       height:"90%",
       marginTop: "18px",
    },

    
      },

  title: {

    backgroundColor: "cornflowerblue",
    textAlign: "center",

  },

  alsoLike: {

    // backgroundColor: "coral",
    backgroundImage: "linear-gradient(red, yellow)",
    
    marginTop: "2%",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "coral",
    marginTop: "23%",
    },

  },

  likes: {

    backgroundColor: "greenyellow",
    height:"28px",
    width:"68px",

  },

  section1: {
    // backgroundColor:"blue",
    width:"100%",
    // height:"40%",
  },
  [theme.breakpoints.down('sm', 'md')]: {
    width:"87px",
    height:"40%",
  
  },


  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  sections: {
    borderRadius: '20px',
    margin: '0px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    marginLeft:"-21px",
    overflow:"hidden",
    marginTop:"6px",
      // backgroundImage: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,76,173,0.4766281512605042) 0%, rgba(201,94,128,1) 53%, rgba(203,90,183,0.6671043417366946) 76%, rgba(0,212,255,0.47942927170868344) 100%)",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft:"1px",
      marginTop:"6px",
      // backgroundImage: "https://i.gifer.com/7T8c.gif",
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
}));