import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import mexico from '../../img/mexican.jpg';
import all from '../../img/allFoods.jpg'
import breakfast from '../../img/breakfast.jpg'
import burger from '../../img/burger.jpg'
import chinese from '../../img/chinese.jpg'
import comfort from '../../img/comfort.jpg'
import indian from '../../img/indian.jpg'
import italian from '../../img/italian.jpg'
import latin from '../../img/latinAmerican.jpg'
import pizza from '../../img/pizza.jpg'
import seafood from '../../img/seafood.jpg'
import vegan from '../../img/vegan.jpg'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    // backgroundColor: 
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
            <Button>
          <Paper className={classes.paper}><img src={mexico} alt="mexican jpeg" style={{height:"160px", width:"240px"}}></img><p>Mexican</p></Paper>
          </Button>
        </Grid>
        <Grid item xs={4}>
            <Button>
          <Paper className={classes.paper}><img src={burger} alt="burger jpeg" style={{height:"160px", width:"240px"}}></img><p>Burgers</p></Paper>
          <Checkbox />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={indian} alt="indian jpeg" style={{height:"160px", width:"240px"}}></img><p>Indian</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={pizza} alt="pizza jpeg" style={{height:"160px", width:"240px"}}></img><p>Pizza</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={italian} alt="italian jpeg" style={{height:"160px", width:"240px"}}></img><p>Italian</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={latin} alt="latin jpeg" style={{height:"160px", width:"240px"}}></img><p>Latin American</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={chinese} alt="chinese jpeg" style={{height:"160px", width:"240px"}}></img><p>Chinese</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={comfort} alt="comfort jpeg" style={{height:"160px", width:"240px"}}></img><p>Comfort Food</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={breakfast} alt="breakfast jpeg" style={{height:"160px", width:"240px"}}></img><p>Breakfast</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={seafood} alt="seafood jpeg" style={{height:"160px", width:"240px"}}></img><p>Seafood</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={vegan} alt="vegan jpeg" style={{height:"160px", width:"240px"}}></img><p>Vegan</p></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><img src={all} alt="all foods jpeg" style={{height:"160px", width:"240px"}}></img><p>Anything goes</p></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} style={{marginTop:"20px"}}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
         
        </Grid>
      </Grid>
    </div>
  );
}
