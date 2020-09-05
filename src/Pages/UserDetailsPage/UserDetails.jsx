import React, { useState } from "react";
import Style from "./UserDetails.module.scss";
import Swal from "@sweetalert/with-react";
import swal from "sweetalert";
import firebase from "../../Firebase/Firebase.utils";
import { connect } from "react-redux";
import {
  AddressProvided,
  Phoneverified,
} from "../../Redux/Actions/ActionsCreator/UserDetailsActionCreator";
function UserDetails({
  history,
  isAddressProvided,
  isPhoneVerified,
  AddressProvided,
  Phoneverified,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [alternativePhone, setAlternativePhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [landMark, setLandMark] = useState("");
  // console.log(name, phone, alternativePhone, address, location, landMark);
  const handlePhoneVerification = e => {
    if (isPhoneVerified) {
      alert("Your phone verification is completed.💹");
      return;
    }
    if (phone.length >= 13) {
      let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha", {
        size: "invisible",
      });

      firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptcha)
        .then(e => {
          let code = prompt("Enter The OTP", "");
          if (code == null) return;
          e.confirm(code)
            .then(res => {
              console.log(res.user);
              Phoneverified();
              alert("Number verified");
            })
            .catch(err => {
              alert(err.messages);
            });
        });
    } else {
      alert("invalid number,please follow the placeholder");
    }
  };

  const handleUserResponse = e => {
    e.preventDefault();
    if (isPhoneVerified) {
      swal("Response Saved!", "You are just one step away", "success");
      AddressProvided(
        name,
        phone,
        alternativePhone,
        address,
        landMark,
        location
      );
      history.push("/userCart");
    } else {
      swal("Invalid Number!", "Please verify your Phone Number", "warning");
    }
  };
  return (
    <div className={Style.main_container}>
      <div className={Style.sub_container}>
        <div className={Style.appeal}>
          <h4>Please Provide Address Details to Proceed</h4>
        </div>
        <form onSubmit={handleUserResponse}>
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            name=""
            id=""
            // value={resetEmail}
            required
            placeholder="Name"
          />
          <input
            className={Style.phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            name=""
            id=""
            pattern="+91[0-9]{10}"
            maxLength="13"
            minLength="13"
            // value={resetEmail}
            required
            placeholder="Phone Number(+919960927828)"
          />

          <button
            type="button"
            onClick={handlePhoneVerification}
            className={Style.verifyPhone}
          >
            {isPhoneVerified ? <i class="fas fa-check">verified</i> : "Verify"}
          </button>
          <div id="recaptcha" style={{ margin: "auto" }}></div>
          <input
            type="tel"
            onChange={e => setAlternativePhone(e.target.value)}
            name=""
            id=""
            pattern="[0-9]{10}"
            maxLength="13"
            minLength="10"
            // value={resetEmail}

            placeholder="Alternative Number (optional)"
          />
          <textarea
            onChange={e => setAddress(e.target.value)}
            className={Style.modalTextArea}
            rows="3"
            cols="42"
            name="address"
            placeholder="Your Permanent Address"
          ></textarea>
          <input
            onChange={e => setLandMark(e.target.value)}
            type="text"
            name=""
            id=""
            // value={resetEmail}
            required
            placeholder="Landmark"
          />
          <div className={Style.modalselect}>
            <select onChange={e => setLocation(e.target.value)}>
              <option>Home</option>
              <option>Office</option>
              <option>College</option>
              <option>Other</option>
            </select>
          </div>
          <div className={Style.modalcheckbox}>
            <input type="checkbox" name="" id="" required />
            <span className={Style.modaldeclaration}>
              I assure that all information filled by me is correct 👍
            </span>
          </div>

          <button className={Style.modalButton} type="submit">
            Continue and Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

const mapstateToProps = state => {
  return {
    isPhoneVerified: state.UserDetailsReducer.isPhoneVerified,
    isAddressProvided: state.UserDetailsReducer.isAddressProvided,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Phoneverified: () => dispatch(Phoneverified()),
    AddressProvided: (
      name,
      phone,
      alternatephone,
      address,
      landmark,
      location
    ) =>
      dispatch(
        AddressProvided(
          name,
          phone,
          alternatephone,
          address,
          landmark,
          location
        )
      ),
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(UserDetails);
