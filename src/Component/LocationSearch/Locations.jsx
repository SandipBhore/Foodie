import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setChange } from "../../Redux";
import { useHistory } from "react-router";
import "./Locations.scss";

const Locations = ({userData,setChange}) => {
  const history = useHistory();
  // const [megaState, setMegaState] = useState({});

  return (
    <div>
    {userData.places !== [] &&
              userData.places.map(location => (
    <button key={location.entity_id} className="locationCard" onClick={() => {
      console.log(location);
      // setMegaState(location);
      setChange(location);
      history.push("/userQueryRestaurants");
      }}>
      <a>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <b>{location.title}</b>
        <br />
        {location.title}, {location.country_name}
      </a>
    </button>
    ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChange: state => {
      dispatch(setChange(state));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
