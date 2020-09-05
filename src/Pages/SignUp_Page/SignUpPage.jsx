import React, { useState, useEffect } from "react";
import Style from "./SignUp.module.scss";
import Pic from "../../Assets/Images/food.jpg";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";
// import { displayName } from "react-typical";
import swal from "sweetalert";
function SignUpPage(props) {
  console.log(props);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let handleSignUp = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      swal({
        title: `Password MisMatch`,
        text: "Please check your password and try again!",
        icon: "warning",
        button: "Try Again",
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { name });
      swal({
        title: `  WElC😍ME ${name.toUpperCase()}!`,
        text: "You can now Purchase any Food!",
        icon: "success",
        button: "Aww yiss!",
      });
      setName("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");
    } catch (err) {
      alert("something went wrong" + " " +err.message);
    }
  };

  return (
    <div className={Style.main_container}>
      <div className={Style.sub_container}>
        <div className={Style.signInForm}>
          <div className={Style.handleForm}>
            <h2 className={Style.Login}>Register</h2>
            <form action="" onSubmit={handleSignUp}>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Display Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="E-Mail"
                />
                <input
                  type="password"
                  name=""
                  id=""
                  required
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
                <input
                  type="password"
                  name=""
                  id=""
                  required
                  onChange={e => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  placeholder="Confirm Password"
                />
              </div>

              <div className={Style.buttons}>
                <button className={Style.button1} type="submit">
                  SignUp
                </button>
              </div>
            </form>
            <div className={Style.else}>
              ----------------------<b>OR</b>----------------------
            </div>
            <div className={Style.option}>
              Already Have An Account?
              <span className={Style.routeToSignUp}>
                <Link style={{ color: "blue" }} to="/signIn">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={Style.branding}>
          <div
            className={Style.showCase}
            style={{ backgroundImage: `url(${Pic})` }}
          >
            <h2 className={Style.brand}>
              _Food<b>4</b>Foodie_
            </h2>
            <h4 className={Style.moto}>Always on Time</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
