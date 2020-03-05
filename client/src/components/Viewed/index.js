import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function PrevViewed(props) {
  return (
    <div style={{ float: "left", width: "100%" }}>
      <List
        className="list-group search-results"
        style={{ width: "100%", textAlign: "center" }}
      >
        {props.viewed.map(result => (
          <div>
            <a
              target="new"
              href={result.url}
              style={{ decoration: "none", color: "inherit" }}
            >
              <ListItem
                key={result.id}
                target="new"
                href={result.url}
                className="list-group-item"
                style={{
                  borderRadius: "5px",
                  margin: "10px",
                  height: "110px",
                  maxWidth: "300px",
                  boxShadow: "1px 1px 3px gray",
                  display: "inline-block",
                  padding: "0px",
                  textAlign: "center"
                }}
              >
                <h6
                  dataId={result._id}
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
                  alt="liked restaurants"
                  src={result.image_url}
                  className="img-fluid"
                  style={{ height: "60px", width: "70px", borderRadius: "3px" }}
                />
                <ul
                  style={{
                    float: "right",
                    decoration: "none",
                    listStyleType: "none"
                  }}
                >
                  <li style={{ decoration: "none", marginRight: "20px" }}>
                    {result.price}
                  </li>
                  <li style={{ decoration: "none", marginRight: "20px" }}>
                    {result.rating}
                  </li>
                </ul>
              </ListItem>
            </a>
          </div>
        ))}
      </List>
    </div>
  );
}

export default PrevViewed;
