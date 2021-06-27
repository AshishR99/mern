import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'white',
    backgroundBlendMode: 'darken',
  },

  
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      width:'116%',
      position: 'relative',
      marginLeft:'-28px',
      },
    
    
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    fontWeight:"bold"
  },
  title: {
    padding: '0 16px',
    // backgroundColor:'aqua',
    color:"white",
    textAlign:"center",
    backgroundImage: "linear-gradient(to right, #ee8008, #ff2c33, #ff006b, #d900b4, #1600ff);",
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    backgroundColor:'black'
  },
}));