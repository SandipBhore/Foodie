const {
  checkIsAddressProvided,
} = require("../../Actions/ActionConstants/UserDetailsActionConstants");

const UserDetailsInitialState = {
  isPhoneVerified: false,
  isAddressProvided: false,
  name: "",
  phone: "",
  alternatePhone: "",
  address: "",
  landmark: "",
  location: "",
};
export default UserDetailsInitialState;
