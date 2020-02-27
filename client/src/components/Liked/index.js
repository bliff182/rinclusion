import React from "react";
// import "./style.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


function PrevLiked(props) {
  return (
    <List className="list-group search-results">
      {props.restaurants.map(result => (
        <ListItem key={result} className="list-group-item">
          <img alt="Restaurants" src={result} className="img-fluid" style={{ height:"100px", width:"150px"}} />
          <button>X</button>
        </ListItem>
      ))}
    </List>
  );
}

export default PrevLiked;