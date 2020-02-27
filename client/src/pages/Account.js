import React, { Component } from "react";
import API from "../utils/API";
import Alert from "../components/Alert";
import Liked from "../components/Liked";
import SwipeableTemporaryDrawer from "../components/Leftbar";
import Container from '@material-ui/core/Container';




class LikedRestaurants extends Component {
    state = {
        restaurants: []
    };

    componentDidMount() {
        this.handlegetlikedrestaurants();
    }
    

    handlegetlikedrestaurants = () => {
        // event.preventDefault();
        API.getLikes()
        .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            this.setState({ restaurants: res.data, error: "" });
          })
          .catch(err => this.setState({ error: err }));
    }

    render() {
        return (
            
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <Alert
                        type="danger"
                        style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                    >
                        {this.state.error}
                    </Alert>
                    <SwipeableTemporaryDrawer
                        handlegetlikedrestaurants={this.handlegetlikedrestaurants}
                    />
                    <Liked restaurants={this.state.restaurants} />
                </Container>
            </div>
            
        ) 
    }
    
}


export default LikedRestaurants;