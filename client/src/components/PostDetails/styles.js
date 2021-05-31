import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: "100%",
    height:"70%",
    marginLeft: "1%"

  },

  photo:{
    borderRadius:"20px"

    
      },

  title: {

    backgroundColor: "cornflowerblue",
    textAlign: "center",

  },

  alsoLike: {

    backgroundColor: "coral",
    marginTop: "8%"
    // textAlign:"center",

  },

  likes: {

    backgroundColor: "greenyellow",
    // marginTop: "-16%"
    // textAlign:"center",

  },


  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
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
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
}));