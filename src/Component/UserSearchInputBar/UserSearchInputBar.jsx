import Style from "./UserSearchInputBar.module.scss";
import React, { Component } from "react";
import userQuery from "../../Redux/Actions/ActionsCreator/UserSearchActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPlaces } from "../../Redux";
class UserSearchInputBar extends Component {
  state = {
    location_query: "",
    restaurant_query: "",
  };

  render() {
    const {
      type,
      placeholder,
      name,
      userQuery,
      history,
      getRestaurantDetails,
      onChangeHandle,
      fetchPlaces
    } = this.props;
    const { location_query, restaurant_query } = this.state;
    return (
      <div className={Style.handleForm}>
        <form
          className={Style.UserResponse}
          onSubmit={e => {
            e.preventDefault();
            const url = `https://developers.zomato.com/api/v2.1/locations?query=${location_query}`;
            fetchPlaces(url);
            // userQuery(location_query, restaurant_query);
            // onChangeHandle(e.target.value);
            setTimeout(() => {
              history.push("/userQueryRestaurants");
            }, 1000);
            
          }}
        >
          <input
            onChange={e => {
              e.target.name == "locationSearch"
                ? this.setState({ location_query: e.target.value })
                : this.setState({ restaurant_query: e.target.value });
                // onChangeHandle(e.target.value);
            }}
            type={type}
            placeholder={placeholder}
            required
            name={name}
            value={location_query}
          />
          <button type="sumbit">
            <i
              style={{ fontSize: "18px" }}
              className="fas fa-search-location"
            ></i>
          </button>
        </form>
      </div>
    );
  }
}
let mapDispatchToprops = dispatch => {
  return {
    userQuery: (locationquery, restaurantquery) =>
      dispatch(userQuery(locationquery, restaurantquery)),
    fetchPlaces: url => dispatch(fetchPlaces(url)),

  };
};
export default withRouter(
  connect(null, mapDispatchToprops)(UserSearchInputBar)
);

