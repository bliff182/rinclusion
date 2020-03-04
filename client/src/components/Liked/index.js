import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:"5px"
  },
}));

function SimpleModal(props2) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const {
    comments,
    stars,
    haveTried,
    handleInputChange,
    handleSave,
    name,
    image_url
  } = props2;

  const handleOpen = () => {
    console.log(props2.id)
    console.log(props2.name)
    console.log(props2.categories)
    console.log(props2)
    console.log(props2.comments)
    console.log(props2.haveTried)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ float:"left"}}>
      <Tooltip title="View Info">
            <IconButton aria-label="more" onClick={handleOpen} >
                <MoreHorizIcon fontSize="small" />
            </IconButton> 
         </Tooltip>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper} >
            
          
          <form >
          <FormControlLabel style={{ float:"right", margin: "0"}}
              control={
              <Checkbox checked={haveTried} onChange={handleChange('checkedA')} value="checkedA" />
              }
              label="Have Tried"
          />
          <h2>{name}</h2>
            <img
                alt="disliked restaurants"
                src={image_url}
                className="img-fluid"
                style={{
                  height: "150px",
                  width: "180px",
                  borderRadius: "3px",
                  margin: "auto",
                  marginBottom:"10px"
                }}
              />
         <p>Stars given: {stars}</p>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
            style={{ margin:"10px 100px"}}
            variant="text"
          >
            <Button dataId="1" >
            <StarIcon fontSize="small" />
            </Button>
            <Button dataId="2" >
            <StarIcon fontSize="small" />
            
            </Button>
            <Button dataId="3" >
            <StarIcon fontSize="small" />
           
            </Button>
            <Button dataId="4" >
            <StarIcon fontSize="small" />
           
            </Button>
            <Button dataId="5" fontSize="small">
            <StarIcon fontSize="small" />
            </Button>
          </ButtonGroup>
            <TextField 
            id="outlined-multiline-static"
            label="Comments"
            multiline
            rows="4"
            placeholder="Nice view? Good burgers? Hot waitresses? Make a note here"
            defaultValue={comments}
            variant="outlined"
            value={comments}
            name="comments"
            comments={comments}
            onChange={handleInputChange}
            style={{width:"100%"}}
            />
           <Button 
          onClick={handleSave}
          style={{float:"right"}}>Save</Button>
          </form>
              
          <Button
          style={{float:"right"}}>Cancel</Button>
         

        </div>
      </Modal>
    </div>
  );
}


const PrevLiked = props => {
  const { liked, deleteRestaurant, comments, stars, haveTried, bookmarked } = props;
  return (
    <div style={{ float: "left", width: "48%" }}>
      <h3 style={{ textAlign: "center", marginTop:"10px", backgroundColor:"rgba(225, 225, 225, 0.2)", borderRadius:"5px"}}>Liked Restaurants:</h3>
      <List
        className="list-group search-results"
        style={{ width: "100%", textAlign: "center" }}
      >
        {liked.map(result => (
          <div>
            <ListItem
              key={result._id}
              className="list-group-item"
              style={{
                border: " 1px solid gray",
                borderRadius: "5px",
                margin: "10px",
                height: "110px",
                maxWidth: "300px",
                boxShadow: "0px 1px 3px gray",
                display: "inline-block",
                padding: "0px",
                textAlign: "center",
                backgroundColor: "rgb(225, 253, 225)"
              }}
            >
              <Tooltip title="View Info">
            <SimpleModal 
              id={result._id}
              key={result._id}
              name={result.name}
              image_url={result.image_url}
              haveTried={result.haveTried}
              comments={result.comments}
              // handleSave={handleSave}
            >
             
            </SimpleModal>

        </Tooltip>
              <Tooltip title="Delete from list">
                <IconButton
                  aria-label="delete"
                  style={{ float: "right" }}
                  id={result._id}
                  onClick={() => deleteRestaurant(result._id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <h6
                style={{
                  textAlign: "center",
                  width: "100%",
                  margin: "8px 0px"
                }}
                name={result.name}
              >
                {result.name}
              </h6>
              <img
                alt="disliked restaurants"
                src={result.image_url}
                className="img-fluid"
                style={{
                  height: "60px",
                  width: "70px",
                  borderRadius: "3px",
                  margin: "auto"
                }}
              />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default PrevLiked;