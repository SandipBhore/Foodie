import React, { useEffect, useState } from "react";
import cx from 'classnames'
import FoodCard from "../FoodCard/Foodcards";
import FilterSidebar from "../Sidebar/FilterSidebar/FilterSideBar";
import Style from "./AllRestaurants.module.scss";
import { connect } from "react-redux";
import {
  fetchRestaurants,
  fetchRestaurantData,
  setXPosition
} from "../../Redux";
import { useHistory } from "react-router";

function AllRestaurants({
  userData,
  fetchRestaurants,
  fetchRestaurantData,
  setXPosition
}) {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${userData.entityId}&entity_type=${userData.entityType}&sort=rating&order=asc`
  );
  const history = useHistory();
  
  const [width,setWidth] = useState(-600);
  // const [xPosition, setX] = useState(600);

  const toggleMenu = () => {
    if (userData.xPosition >= 0) {
      setXPosition(width);
    } else {
      setXPosition(0);
    }
  };
  
  useEffect(() => {
    fetchRestaurants(url);
    setXPosition(0);
  },[]);

  const other = [
    "Veg",
    "Non_Veg",
    "Popularity_high_to_low",
    "Rating_high_to_low",
    "Cost_high_to_low",
    "Cost_low_to_high",
  ];
  const preference1 = ["Veg", "Non_Veg"];
  const sortFilter = other.slice(2);

  const onFilter = filters => {
    console.log("filterBoxes: ", filters);
    let sort = Object.keys(filters)
      .filter(key => sortFilter.includes(key))
      .reduce((obj, key) => {
        obj[key] = filters[key];
        return Object.values(obj);
      }, []);

    let preference = Object.keys(filters)
      .filter(key => preference1.includes(key))
      .reduce((obj, key) => {
        obj[key] = filters[key];
        return Object.values(obj);
      }, []);

    let cuisines = Object.keys(filters)
      .filter(key => !other.includes(key))
      .reduce((obj, key) => {
        obj[key] = filters[key];
        return Object.values(obj);
      }, []);
    console.log("cuisines: ", cuisines);
    const qurl = `https://developers.zomato.com/api/v2.1/search?entity_id=${
      userData.entityId
    }&entity_type=${userData.entityType}&cuisines=${cuisines.join()}&${
      sort !== [] ? sort[0] : "sort=rating&order=desc"
    }&q=${preference.join()}`;
    console.log("qurl: ", qurl);
    fetchRestaurants(qurl);
  };

  const handleHeaderFilter = e => {
    let filter = e.target.textContent;
    if (filter === "Cost For Two") {
      filter = "cost";
    }
    const qurl = `https://developers.zomato.com/api/v2.1/search?entity_id=${
      userData.entityId
    }&${filter === "Relevance" ? "q=Relevance" : "sort=" + filter}&order=desc`;
    console.log("qurl: ", qurl);
    fetchRestaurants(qurl);
  };

  const handleClick = id => {
    console.log("id: ", id);
    fetchRestaurantData(id);
    // fetchDailyMenu(id);
    history.push("/RestaurantHome");
  };

  const onChange = e => {
    setSearch(e.target.value);
  };

  const filteredRestuarant = userData.restaurants && userData.restaurants!==[] && userData.restaurants.filter(data => {
    return (
      data.restaurant.name.toLowerCase().indexOf(search.toLowerCase()) !==
      -1
    );
  });

  return (
    <div className={Style.main}>
      <FilterSidebar onFilters={onFilter}  />
      <div className={Style.filterhead}>
        <button
          onClick={() => toggleMenu()}
          className={Style.toggleMenu}
        >
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </button>
        <div className={Style.span1}>
          <button onClick={handleHeaderFilter}>Relevance</button>
          <button onClick={handleHeaderFilter}>Cost For Two</button>
          <button onClick={handleHeaderFilter}>Rating</button>
        </div>
        <span  className={Style.topPick}>
          <b>Top Pick</b>
        </span>
        <input
            className={cx(Style.filter, Style.inputs)}
            type="text"
            name="query"
            onChange={onChange}
            value={search}
            // autoComplete="off"
            placeholder="Search Restaurant by Name"
          />
      </div>
      <hr />
      <div className={Style.foodCards}>
        {userData &&
          userData.restaurants &&
          filteredRestuarant.map(data => (
            <FoodCard key={data.restaurant.id} recipe={data} handleClick={handleClick} />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: url => dispatch(fetchRestaurants(url)),
    fetchRestaurantData: id => dispatch(fetchRestaurantData(id)),
    setXPosition: x => dispatch(setXPosition(x)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRestaurants);
