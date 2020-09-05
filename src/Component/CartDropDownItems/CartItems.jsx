import React from "react";
import Style from "./CartItems.module.scss";
function CartItems({ item }) {
  return (
    <div className={Style.CartDropDownItems}>
      {/* <img src={item.imageUrl} alt="selected-item" /> */}
      <div
        className={Style.cuisineImage}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className={Style.ItemsDetails}>
        <span className={Style.ItemName}>{item.name}</span>
        <span className={Style.ItemQuantity}>
          <i class="fas fa-rupee-sign"></i>
          {item.price} x {item.quantity}
        </span>
      </div>
    </div>
  );
}

export default CartItems;
