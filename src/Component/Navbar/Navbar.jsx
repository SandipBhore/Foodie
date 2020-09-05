import React from "react";
import Style from "./Navbar.module.scss";
import Logo from "../../Assets/Images/Logo.jpg";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.utils";
import swal from "sweetalert";
import { connect } from "react-redux";
import CartDropDown from "../CartDropDown/CartDropDown";
import toggle_DropDown from "../../Redux/Actions/ActionsCreator/CartDropDownActionCreator";
import { ReactComponent as ShoppingIcon } from "../../Assets/Images/shopping-bag.svg";
function Navbar({
  currentUser,
  toggle_DropDown,
  ShowCartDropDown,
  totalItemsCount,
}) {
  let handleSignOut = e => {
    swal({
      title: `Hey ${
        currentUser.displayName
          ? currentUser.displayName.toUpperCase()
          : currentUser.name.toUpperCase()
      } Are you sure?`,
      text: " Do you Want to Sign Out??",
      icon: "warning",
      buttons: ["Oh noez!", "yup!"],
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        auth.signOut();
      } else {
        return;
      }
    });
  };

  return (
    <div className={Style.main_container}>
      <div
        style={{
          display: "flex",
          width: "75%",
          alignItems: "center",
        }}
      >
        <img src={Logo} className={Style.logo} alt="LOGO" />
        <h4 className={Style.logo1}>
          _FOOD 4 FOODIE_
          <p className={Style.tagline}>Faster than you can imagine</p>
        </h4>
      </div>
      <ul className={Style.Navigation_list}>
        <li>
          <NavLink
            to="/"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            <i className="fas fa-house-user">&nbsp;Home</i>
          </NavLink>
        </li>
        {currentUser ? (
          <li onClick={handleSignOut}>
            <i class="fas fa-user-minus">&nbsp;SignOut</i>
          </li>
        ) : (
          <NavLink
            to="/signIn"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            {" "}
            <li className={Style.except}>
              <i className="fas fa-user-lock">&nbsp;SignIn</i>
            </li>
          </NavLink>
        )}

        <li>
          <div onClick={toggle_DropDown} className={Style.cart_icon}>
            <ShoppingIcon className={Style.shopping_icon} />
            <span
              className={
                totalItemsCount ? Style.item_count : Style.no_item_count
              }
            >
              {totalItemsCount}
            </span>
          </div>
        </li>
      </ul>
      {ShowCartDropDown && <CartDropDown />}
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    toggle_DropDown: () => dispatch(toggle_DropDown()),
  };
};
const mapStateToProps = state => {
  return {
    currentUser: state.CurrentUserReducer.currentUser,
    ShowCartDropDown: state.CartDropDownReducer.ShowCartDropDown,
    totalItemsCount: state.CartDropDownReducer.CartItems.reduce(
      (accumulatedquantity, cartItem) =>
        accumulatedquantity + cartItem.quantity,
      0
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
