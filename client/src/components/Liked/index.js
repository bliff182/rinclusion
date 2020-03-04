import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     // border: '1px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     borderRadius: "5px"
//   },
// }));

class PrevLiked extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalId: null,
      data:{}
    };
  }

 getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


  showModal = (e, index) => {
    this.setState({ showModal: true, modalId: index });
    console.log("Index: " + index);

  }

  hideModal = (e, index) => {
    this.setState({ showModal: false, modalId: index });
    console.log("Index: " + index);
  };
 

  // useStyles = makeStyles(theme => ({
  //   paper: {
  //     position: 'absolute',
  //     width: 400,
  //     backgroundColor: theme.palette.background.paper,
  //     // border: '1px solid #000',
  //     boxShadow: theme.shadows[5],
  //     padding: theme.spacing(2, 4, 3),
  //     borderRadius: "5px"
  //   },
  // }));


  // classes = useStyles();
// [modalStyle] = React.useState(getModalStyle);
// [open, setOpen] = React.useState(false);

// handleOpen = id => {
//     selected = id 
//     setOpen(true);
//     console.log(selected)
//     // console.log(id)
//   };

//   handleClose = () => {
//     setOpen(false);
//   };

  // handleOpen = id => {
  //   this.setState({ showModal: true });
  //   console.log("modal Id: " + this.state.modalId);
  // }

  // handleClose = id => {
  //   this.setState({ showModal: false });
  //   console.log("modal open: " + this.state.showModal);
  // };
 


  // { liked, deleteRestaurant } = props;
  render() {
  return (
    <div style={{ float: "left", width: "50%" }}>
      <h3 style={{ textAlign: "center" }}>Liked Restaurants:</h3>
      <List
        className="list-group search-results"
        style={{ width: "100%", textAlign: "center" }}
      >

          <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                // id={result._id}
                // open={open}
                // onClose={handleClose}
                show={this.state.showModal}
                onHide={this.modalClose}
                data={this.state.data}
              >
                <div >
                  {/* <h2 id={result._id}>{result.name}</h2> */}
                  <p id="simple-modal-description">
                    {/* {selected} */}
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </p>

                </div>
              </Modal>
        {this.props.liked.map(result => (
          <div>
            <ListItem
              key={result._id}
              id={result._id}
              className="list-group-item hello "
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
              <Tooltip title="View Info" style={{ float: "left" }}>
                <IconButton id={result._id} aria-label="more" onClick={() => this.setState({ showModal: 
                 true,data: result })}  >
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              {/* <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                id={result._id}
                open={open}
                onClose={handleClose}
              >
                <div style={modalStyle} className={classes.paper}>
                  <h2 id={result._id}>{result.name}</h2>
                  <p id="simple-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  </p>

                </div>
              </Modal> */}
              <Tooltip title="Delete from list">
                <IconButton
                  aria-label="delete"
                  style={{ float: "right" }}
                  id={result._id}
                  // onClick={() => deleteRestaurant(result._id)}
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
                alt="Liked restaurants"
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
}

export default PrevLiked;
