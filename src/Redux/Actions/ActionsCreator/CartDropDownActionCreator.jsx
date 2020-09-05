import SHOW_CART_DROPDOWN, {
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
} from "../ActionConstants/CartDropDownActionConstant";

const toggle_DropDown = () => {
  return {
    type: SHOW_CART_DROPDOWN,
  };
};

export const add_Item = addedItems => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: addedItems,
  };
};

export const remove_item = itemToRemove => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: itemToRemove,
  };
};

export const clear_Item = itemToClear => {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: itemToClear,
  };
};
export default toggle_DropDown;
