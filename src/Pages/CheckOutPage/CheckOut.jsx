import React, { Fragment } from "react";
import Style from "./CheckOut.module.scss";
import PIC from "../../Assets/Images/empty.png";
import StripeButton from "../../Component/CheckOut_Stripe_Button/StripeButton";
import CheckOutItems from "../../Component/CheckOutItems/CheckOutItems";
import { connect } from "react-redux";
// import state from "sweetalert/typings/modules/state";
function UserCart({ CartItems, totalItemsPrice }) {
  // const SHOP_DATA = [
  //   {
  //     id: 1,
  //     title: "Hats",
  //     routeName: "hats",
  //     items: [
  //       {
  //         id: 30,
  //         name: " Biscuits",
  //         imageUrl: "https://i.ibb.co/71ndGRg/macarons-2548827-1920.jpg",
  //         price: 325,
  //       },
  //       {
  //         id: 31,
  //         name: "Hamburger",
  //         imageUrl: "https://i.ibb.co/gFhnWk8/hamburger-1238246-1920.jpg",
  //         price: 200,
  //       },
  //       {
  //         id: 32,
  //         name: "Hot Dog",
  //         imageUrl: "https://i.ibb.co/WfJYcT6/fast-food-2132863-1920.jpg",
  //         price: 60,
  //       },
  //       {
  //         id: 33,
  //         name: "Pav Bhaji",
  //         imageUrl: "https://i.ibb.co/9NYHf6G/pav-bhaji-371377-1920.jpg",
  //         price: 50,
  //       },
  //       {
  //         id: 34,
  //         name: "Gulab Jamun",
  //         imageUrl: "https://i.ibb.co/kXgPXST/indian-sweet-371357-1920.jpg",
  //         price: 240,
  //       },
  //       {
  //         id: 35,
  //         name: "Pizza",
  //         imageUrl: "https://i.ibb.co/qySHjHc/pizza-3007395-1920.jpg",
  //         price: 140,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className={Style.checkoutPage}>
      {CartItems.length > 0 && (
        <div className={Style.checkoutHeader}>
          <div className={Style.headerBlock}>
            <span>Items</span>
          </div>
          <div className={Style.headerBlock}>
            <span>Description</span>
          </div>
          <div className={Style.headerBlock}>
            <span>Quantity</span>
          </div>
          <div className={Style.headerBlock}>
            <span>Price</span>
          </div>
          <div className={Style.headerBlock}>
            <span>Remove</span>
          </div>
        </div>
      )}
      {CartItems.length ? (
        CartItems.map(item => (
          <Fragment key={item.id}>
            <CheckOutItems item={item} />
          </Fragment>
        ))
      ) : (
        <div
          className={Style.emptyCart}
          style={{ backgroundImage: `url(${PIC})` }}
        ></div>
      )}
      {CartItems.length > 0 && (
        <div className={Style.totalPrice}>
          <span>
            Total Price :{" "}
            <i
              className="fas fa-rupee-sign"
              style={{ fontSize: "24px", color: "black", opacity: "0.8" }}
            >
              <b style={{ fontSize: "24px", color: "green" }}>
                &nbsp;{totalItemsPrice}
              </b>
            </i>
          </span>
        </div>
      )}
      {CartItems.length > 0 && <StripeButton totalAmount={totalItemsPrice} />}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    CartItems: state.CartDropDownReducer.CartItems,
    totalItemsPrice: state.CartDropDownReducer.CartItems.reduce(
      (initialCount, cartItem) =>
        initialCount + cartItem.quantity * cartItem.price,
      0
    ),
  };
};

export default connect(mapStateToProps)(UserCart);
