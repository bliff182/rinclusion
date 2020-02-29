import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function PrevLiked(props) {
  return (
    <List className="list-group search-results">
      {props.restaurants.map(result => (
        <ListItem key={result.id} className="list-group-item">
          <img
            alt="Restaurants"
            src={result.image_url}
            className="img-fluid"
            style={{ height: "100px", width: "150px" }}
          />
          <button dataId={result._id}>X</button>
        </ListItem>
      ))}
    </List>
  );
}

export default PrevLiked;
