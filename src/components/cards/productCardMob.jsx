import {React , props} from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import banner from "../assets/banner2.png";
import arrow from "../assets/arrow.png";

const product ={

    imageUrl: {banner},
    name: "WOODEN TILE | 20* X 40*",
    description:"We Provide You Quality With Perfect "


}

const useStyles = makeStyles({
  root: {
   width:"110%",
   height:"auto",
   borderRadius:"0px",
   padding:"0px"
   
 

  },
 

  media: {
    height: "100%",
    width:"100%",
   
    transition: "scale 0.5s ease-in-out",
    "&:hover" :{
      
      scale:(1.25)
  
    }


  },
  name:{
    color:"#89A963",
    fontFamily:"unna",
    textAlign:"left",
    fontSize:"15px",
    position:"relative",
    right:"12px"
  },
  description:{
    fontFamily:"unna",
    textAlign:"left",
    fontSize:"18px",
    color:"black",
    opacity:"1",
    fontWeight:"600",
    position:"relative",
    right:"12px"


  },
  rm:{
    color:"#89A963",
    fontFamily:"unna",
    textAlign:"left",
    fontSize:"15px",
    position:"relative",
    bottom:"10px",
    right:"10px"


  },
  mediaDiv:{
    height: 150,
    width:"180px",
   
    transition: "transform 5s ease-in-out",

    

  },
  arrow:{
    height:"25px",
    position:"relative",
    bottom:"10px"
    
  }
});

export default function ProductCardMob(props) {
  const classes = useStyles();

 


  

  return (
    <Link to="/product" style={{ textDecoration: 'none' }}>
    <Card className={classes.root}  elevation={0}>
      <CardActionArea>
        <div 
          className={classes.mediaDiv}>
        <CardMedia 
          className={classes.media}
          image={props.image}
          title={product.name}

          sx={{

            height:`${props.height}`
          }}
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <img src={arrow} alt="" className={classes.arrow}/>
        </Button>
        <Button size="small" color="primary" className={classes.rm}>
          Read More
        </Button>
      </CardActions>
    </Card>
    </Link>
  );
}