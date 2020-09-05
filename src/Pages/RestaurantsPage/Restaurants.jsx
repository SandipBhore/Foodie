import React, { Component } from "react";
import Style from "./Restaurants.module.scss";
import { connect } from "react-redux";
import axios from "axios";

class Restaurants extends Component {
  state = {
    LocationDetails: [],
    LocationRestaurants: [],
  };
  headers = {
    "Content-Type": "application/json",
    "user-key": "0997dc3e6fb7b32390fe637998593e5b",
  };
  getLocationDetails = () => {
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/locations?query=${this.props.locationName}`,
        {
          headers: this.headers,
        }
      )
      .then(response => {
        console.log(response.data.location_suggestions[0]);
        // this.setState(
        //   {
        //     LocationDetails: response.data,
        //   },
        //   () => console.log(this.state)
        // );
        axios
          .get(
            `https://developers.zomato.com/api/v2.1/search?entity_id=${response.data.location_suggestions[0].entity_id}&entity_type=${response.data.location_suggestions[0].entity_type}&q=${this.props.locationName}&start=80&count=20&sort=rating&order=asc`,
            { headers: this.headers }
          )
          .then(response => {
            console.log(response.data);
          })
          .catch(err => {
            alert(err.message);
          });
      })
      .catch(err => {
        this.props.history.push("*");
        // alert(err.message);
      });
    // axios
    //   .get(
    //     `https://developers.zomato.com/api/v2.1/search?entity_id=${5}&entity_type=${"city"}&q=${
    //       this.props.locationName
    //     }&start=80&count=20&sort=rating&order=asc`,
    //     { headers: this.headers }
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(err => {
    //     alert(err.message);
    //   });
  };

  componentDidMount() {
    this.getLocationDetails();
  }

  render() {
    const { locationName, restaurantName } = this.props;
    return (
      <div style={{ marginTop: "80px" }}>
        <h1>RestaurantPage</h1>
        <h2>
          User Searched:{locationName == "" ? restaurantName : locationName}{" "}
        </h2>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    locationName: state.UserQueryReducer.locationName,
    restaurantName: state.UserQueryReducer.restaurantName,
  };
};
export default connect(mapStateToProps, null)(Restaurants);
