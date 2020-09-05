import React, { Component,useState,useEffect } from "react";
import Style from "./Homepage.module.scss";
import Pic from "../../Assets/Images/food4.jpg";
import Card from "../../Component/Card/Card";
import Locations from "../../Component/LocationSearch/Locations";
import UserSearchInputBar from "../../Component/UserSearchInputBar/UserSearchInputBar";
import Advertisement from "../../Component/Advertisement/AdverTisement";
import Footer from "../../Component/Footer/Footer";
import { fetchPlaces } from "../../Redux";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";

const Homepage = ({ userData, fetchPlaces }) => {
  const [query, setQuery] = useState("");
  // const[locations, setLocations] = useState(userData.places);

  const getSearch = q => {
    setQuery(q);
    const url = `https://developers.zomato.com/api/v2.1/locations?query=${query}`;
    fetchPlaces(url);
  }

  // useEffect(() => {
  //   setLocations(userData.places);
  // }, []);

  return (
    <>
      <div className={Style.maincontainer} style={{ backgroundImage: `url(${Pic})` }}>
        <br />
        <br />
        <br />
        
        <Advertisement />
        <div className={Style.InputField}>
          <UserSearchInputBar
            type={"text"}
            placeholder={"Search Restaurants by location..."}
            name="locationSearch"
            // onChangeHandle={getSearch}
          />
          <div className={Style.places} >
          {/* <Locations /> */}
            {/* {userData.places !== [] &&
              userData.places.map(location => (
                <Locations key={location.entity_Id} location={location} />
              ))} */}
          </div>

          <h3 style={{ textAlign: "center", marginTop: "60px" }}>
            <i>OR</i>
          </h3>

          <UserSearchInputBar
            type={"text"}
            placeholder={"Search Restaurants by Name..."}
            name="restaurantSearch"
          />
        </div>
      </div>
      <Card />
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    fetchPlaces: url => dispatch(fetchPlaces(url)),
    // setChange: (url) =>
    // setChange(setChange(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Homepage);
