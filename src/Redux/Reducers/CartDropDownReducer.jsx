import CartDropDownInitialState from "./Initialstate/CartDropDownInitialState";
import SHOW_CART_DROPDOWN, {
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} from "../Actions/ActionConstants/CartDropDownActionConstant";

// Function to remove duplicates from add items array
const addItemToCart = (cartItems, newCartItemsToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id == newCartItemsToAdd.id
  );
  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id == newCartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newCartItemsToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // const existingcartItem = cartItems.find(
  //   cartItem => cartItem.id === cartItemToRemove.id
  // );
  return cartItems.map(cartItem =>
    cartItem.id == cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const CartDropDownReducer = (state = CartDropDownInitialState, action) => {
  switch (action.type) {
    case SHOW_CART_DROPDOWN:
      return {
        ...state,
        ShowCartDropDown: !state.ShowCartDropDown,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        CartItems: addItemToCart(state.CartItems, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        CartItems: removeItemFromCart(state.CartItems, action.payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        CartItems: state.CartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default CartDropDownReducer;
