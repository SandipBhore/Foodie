import React, { useState, useEffect } from "react";
import "./Restaurant.scss";
import { connect } from "react-redux";
import RestData from "./RestaurantMenu.json";
import Pic from "../../Assets/Images/offer.png";
import { useSelector } from "react-redux";

import { add_Item } from "../../Redux/Actions/ActionsCreator/CartDropDownActionCreator";
function RestaurantHome({ userData, add_Item }) {
  const [search, setSearch] = useState("");
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState("00");
  const ShowCartDropDown = useSelector(
    state => state.CartDropDownReducer.ShowCartDropDown
  );
  let TotalTime = minutes * 60;
  const {
    name,
    featured_image,
    location,
    timings,
    user_rating,
    cuisines,
    all_reviews_count,
  } = userData.restaurantData && userData.restaurantData;
  const address = location ? location.address : "";
  const aggregate_rating = user_rating ? user_rating.aggregate_rating : "";

  useEffect(() => {
    //   fetchData();
    setInterval(() => {
      setMinutes(Math.floor(TotalTime / 60));
      let Second = TotalTime % 60;
      setSeconds(Second < 10 ? "0" + Second : Second);
      TotalTime--;
    }, 1000);
  }, []);

  const filteredMenu = RestData.items.filter(data => {
    return data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const onChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="main">
      <div
        className={`container sticky-top r-box ${ShowCartDropDown && "d-none"}`}
      >
        <div className={`row align-items-center`}>
          <div className="col">
            <div
              className="r-img"
              style={{ backgroundImage: `url(${featured_image})` }}
            ></div>
          </div>
          <div className="col-6">
            <div className="row">
              <h1 className="rtitle">{name}</h1>
              <p style={{ width: "100%", textAlign: "center" }}>{cuisines}</p>
              <br />
              <p style={{ width: "100%", textAlign: "center" }}>
                {address.slice(0, 85)}
              </p>
            </div>
            <div className="row rate-box">
              <div className="col ">
                <div className="row justify-content-center">
                  ⭐ {aggregate_rating}
                </div>
                <div className="row justify-content-center">
                  {all_reviews_count} Reviews
                </div>
              </div>
              <div className="col rate ">
                <div className="row justify-content-center">
                  {timings.slice(0, 44)}
                </div>
                <div className="row justify-content-center">Timing</div>
              </div>
            </div>
          </div>

          <div className="col col-3">
            <div className="offerDiv">
              <img className="offer" src={Pic} alt="offer" />
            </div>
            <div className="offerTime">
              Time left ⏰ <span className="colon">:- </span>{" "}
              <b className="timer">{minutes} </b> &nbsp;
              <span className="colon"> : </span>&nbsp;
              <b className="timer">{seconds} </b>
            </div>
          </div>
        </div>
      </div>

      <div className={`container extra ${ShowCartDropDown && "search-dish"}`}>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for dishes"
              onChange={onChange}
              value={search}
            />
          </div>
          <div className="col-2 ">
            <div className="row">
              <div className="col-2">
                <input type="checkbox" />
              </div>
              <div className="col-8 ">
                <i className="fas fa-leaf"></i>Veg
              </div>
            </div>
          </div>
          <div className="col-2">
            <i className="far fa-heart"></i>Favourite
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row rec-title justify-content-center">
          <h6>
            <b> Recommended</b>
            <sub> (44 items)</sub>
          </h6>
        </div>
        <div className="row">
          <div className="col left-bar  ">
            <div>
              <h6 className="rec-text"> Recommended</h6>
            </div>
            <div className=" rec recog">
              <span href=""> Healthylicious</span>
            </div>
            <div className=" rec  recog">
              <span href=""> Fruitylicious (Fruit Icecreams)</span>
            </div>
            <div className=" rec  recog">
              <span href=""> Nuttylicious (Dry Fruit Icecreams)</span>
            </div>
            <div className=" rec  recog">
              <span href=""> Kulfilicious (Kulfis)</span>
            </div>
            <div className=" rec  recog">
              <span href=""> Recommended</span>
            </div>
          </div>

          <div className="col-7 menu-box border-right border-left">
            {filteredMenu &&
              filteredMenu.map(data => (
                <div className="row menu" key={data.id}>
                  <div className="col-4">
                    <div className="row">
                      <img src={data.imageUrl} alt="img" />
                    </div>

                    <div className="row">
                      <button
                        onClick={() => add_Item(data)}
                        type="button"
                        id={data.id}
                        className="AddButton"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <h6>
                        <b>{data.name}</b>
                      </h6>
                    </div>
                    <h6>₹ {data.price}</h6>
                    <div className="row menu-detail">
                      Grab the toy of the month with your favourite Happy meal.
                      Enjoy a combo of American Cheese Supreme Veg + Drink + Toy
                      of the month; and bring out the child in you.
                    </div>
                  </div>
                  <hr className="hrr" />
                </div>
              ))}
          </div>
          <div /*  className="col-2 right-bar "*/>
            {/* <h3>Cart Empty</h3> */}
            <div className="r-img">{/* <img alt="offer" /> */}</div>
            <div className="cart-txt">
              {/* Good food is always cooking! Go ahead, order some yummy items from
              the menu. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//     setChange: (state) =>{
//       dispatch(setChange(state));
//     }
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    add_Item: item => dispatch(add_Item(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantHome);
