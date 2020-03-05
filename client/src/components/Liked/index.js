import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Modal from "../Modal";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";

const PrevLiked = props => {
  const { liked, deleteRestaurant, markAsDisliked } = props;
  return (
    <div style={{ float: "left", width: "50%" }}>
      <h3 style={{ textAlign: "center" }}>Liked Restaurants:</h3>
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
                boxShadow: "1px 1px 3px gray",
                display: "inline-block",
                padding: "0px",
                textAlign: "center",
                backgroundColor: "rgb(225, 253, 225)"
              }}
            >
              {/* <Modal dataId={props._id} /> */}
              <Tooltip title="Move to dislikes">
                <IconButton
                  aria-label="move"
                  style={{ float: "left" }}
                  id={result._id}
                  onClick={() => markAsDisliked(result._id)}
                >
                  {/* <ArrowBackIcon fontSize="small" /> */}
                  <ThumbDownAltIcon fontSize="small" />
                </IconButton>
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
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
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
              </a>
              <img
                alt="liked restaurants"
                src={result.image_url}
                className="img-fluid"
                style={{
                  height: "60px",
                  width: "70px",
                  borderRadius: "3px",
                  border: "1px solid black"
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
