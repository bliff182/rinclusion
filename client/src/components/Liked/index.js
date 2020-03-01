import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteButton from "../DeleteButton"
import Modal from "../Modal";


function PrevLiked(props) {
  return (
    <div style={{ float: 'left', width: "50%"}}>
      <h3 style={{textAlign:"center"}}>Liked Restaurants:</h3>
      <List className="list-group search-results" style={{ width: "100%", textAlign: "center" }}>
        {props.liked.map(result => (
          <div>
            <ListItem key={result.id} className="list-group-item" style={{ border:" 1px solid gray", borderRadius: "5px", margin: "10px", height: "110px", maxWidth: "300px", boxShadow: "1px 1px 3px gray", display: "inline-block", padding:"0px", textAlign:"center", backgroundColor:"rgb(225, 253, 225)"  }}>
            <Modal 
              dataId={props._id}
            />
            <DeleteButton dataId={result._id} />
              <h6 dataId={result._id} style={{ textAlign: "center", width: "100%", margin:"8px 0px" }} name={result.name}>{result.name}</h6>
              <img
                alt="liked restaurants"
                src={result.image_url}
                className="img-fluid"
                style={{ height: "60px", width: "70px", borderRadius: "3px" }}
              />
            
            </ListItem>
           
          </div>
        ))}
      </List>
    </div>
  );
}

export default PrevLiked;