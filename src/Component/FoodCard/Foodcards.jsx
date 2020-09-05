import React, { useState, useEffect } from "react";
import "./foodCard.scss";
const FoodCard = ({ recipe, handleClick }) => {
  const [textShow, setTextShow] = useState(false);
  const [divshow, setdivshow] = useState("nodivshow");
  const {
    name,
    featured_image,
    timings,
    location,
    user_rating,
    average_cost_for_two,
    R,
  } = recipe.restaurant;

  useEffect(() => {
    if (textShow) {
      setdivshow("divshow");
    } else {
      setdivshow("nodivshow");
    }
  });

  const onhandleClick = () => {
    console.log("res_id: ", R.res_id);
    handleClick(R.res_id);
  };

  return (
    <div
      className="foodcard"
      id={recipe.key}
      onMouseEnter={() => setTextShow(true)}
      onMouseLeave={() => setTextShow(false)}
      onClick={onhandleClick}
    >
      <a>
        <div
          className="image"
          style={{ backgroundImage: `url(${featured_image})` }}
        />
        <div className="container1">
          <h3 className="restaurantName">
            <b>{name}</b>
          </h3>
          <h4 className="address">{location.address.slice(0, 90) + "..."}</h4>
          <div style={{ marginTop: "10px" }}>
            <span className="rating" style={{ backgroundColor: "gold" }}>
              <i className="fa fa-star" aria-hidden="true"></i>{" "}
              <b>{user_rating.aggregate_rating}</b>
            </span>
            .
            <span>
              <b>{timings.slice(0, 20)}</b>
            </span>
            .
            <span>
              <b>
                <i className="fa fa-rupee"></i> {average_cost_for_two} For Two
              </b>
            </span>
          </div>
          <div className={divshow}>
            <hr />
            <p>
              <b>Quick View</b>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FoodCard;
