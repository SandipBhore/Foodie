import React, { useState } from "react";
import Style from "./StripeButton.module.scss";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Swal from "@sweetalert/with-react";
import swal from "sweetalert";
import getCardDetails from "../../Redux/Actions/ActionsCreator/UserCreditDetailsActionCreator";
import firebase from "../../Firebase/Firebase.utils";
function StripeButton({
  totalAmount,
  currentUser,
  history,
  isDeliveryAddressProvided,
  getCardDetails,
}) {
  const StripeTotalAmount = totalAmount * 100;
  const StripePublishKey =
    "pk_test_51HEe4zJ3nFTaopTruoYaGOhX6L387ZooKVr8KWPeQX0HOcVCvBc6UHemqup7npE7QwS34TGj9vSZ6e0B7H2TysKG00HibMthwl";

  const onPaymentSuccess = token => {
    console.log(token);
swal("Hurray !", "Your Order Has been Placed!", "success");
    getCardDetails(token);
  };

  const handlePayments = e => {
    e.preventDefault();
    if (!currentUser) {
      history.push("/signIn");
      window.scrollTo(0, 0);
    } else if (!isDeliveryAddressProvided) {
      history.push("/userDetails");
    }
  };
  return (
    <div className={Style.StripeButton}>
      {currentUser && isDeliveryAddressProvided ? (
        <StripeCheckout
          className={Style.stripe_button}
          label="Go for Payment"
          name="_Food4Foodie_"
          billingAddress
          shippingAddress
          allowRememberMe
          image="https://svgshare.com/i/Nbd.svg"
          description={`You will have to pay ${totalAmount} rupees`}
          amount={StripeTotalAmount}
          panelLabel="Pay Now"
          token={onPaymentSuccess}
          stripeKey={StripePublishKey}
          currency="INR"
        />
      ) : (
        <button
          onClick={handlePayments}
          className={Style.duplicateStripeButton}
        >
          Go for Payment
        </button>
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getCardDetails: cardDetails => dispatch(getCardDetails(cardDetails)),
  };
};
const mapStateToProps = state => {
  return {
    currentUser: state.CurrentUserReducer.currentUser,
    isDeliveryAddressProvided: state.UserDetailsReducer.isAddressProvided,
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StripeButton)
);
