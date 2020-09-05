import {
  checkIsPhoneVerified,
  checkIsAddressProvided,
} from "../ActionConstants/UserDetailsActionConstants";

const Phoneverified = () => {
  return {
    type: checkIsPhoneVerified,
  };
};

const AddressProvided = (
  name,
  phone,
  alternativePhone,
  address,
  landmark,
  location
) => {
  return {
    type: checkIsAddressProvided,
    payload1: name,
    payload2: phone,
    payload3: alternativePhone,
    payload4: address,
    payload5: landmark,
    payload6: location,
  };
};
export { Phoneverified, AddressProvided };
