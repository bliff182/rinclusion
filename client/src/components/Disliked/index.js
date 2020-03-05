import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
// import Modal from "../Modal";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const PrevDisliked = props => {
  const { disliked, deleteRestaurant, markAsLiked } = props;
  return (
    <div style={{ float: "right", width: "48%" }}>
      <h3 style={{ textAlign: "center",backgroundColor:"rgba(225, 225, 225, 0.5)", borderRadius:"5px", padding:"3px" }}>Disliked Restaurants:</h3>
      <List
        className="list-group search-results"
        style={{ width: "100%", textAlign: "center" }}
      >
        {disliked.map(result => (
          <div>
            <ListItem
              key={result._id}
              className="list-group-item"
              style={{
                // border: " 1px solid gray",
                borderRadius: "5px",
                margin: "4px",
                height: "110px",
                maxWidth: "300px",
                boxShadow: "0px 1px 8px black",
                display: "inline-block",
                padding: "0px",
                textAlign: "center",
                backgroundColor: "rgba(253, 225,  225, 0.8)"
              }}
            >
              {/* <Modal /> */}
              <Tooltip title="Move to likes">
                <IconButton
                  aria-label="move"
                  style={{ float: "left" }}
                  id={result._id}
                  onClick={() => markAsLiked(result._id)}
                >
                  <ThumbUpAltIcon fontSize="small" />
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
                alt="disliked restaurants"
                src={result.image_url}
                className="img-fluid"
                style={{
                  height: "60px",
                  width: "70px",
                  borderRadius: "3px",
                  margin: "auto",
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

export default PrevDisliked;
