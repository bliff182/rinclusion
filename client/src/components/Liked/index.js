import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import SimpleModal from "../Modal";
import Button from "@material-ui/core/Button";
const PrevLiked = props => {
  const {
    liked,
    deleteRestaurant,
    comments,
    stars,
    haveTried,
    bookmarked,
    handleSave
  } = props;
  return (
    <div style={{ float: "left", width: "48%" }}>
      <h3
        style={{
          textAlign: "center",
          marginTop: "10px",
          backgroundColor: "rgba(225, 225, 225, 0.2)",
          borderRadius: "5px"
        }}
      >
        Liked Restaurants:
      </h3>
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
                  // onClick={() => console.log("hello")}
                ></SimpleModal>
              </Tooltip>
              {/* <Button onClick={handleSave}>hello</Button> */}
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
