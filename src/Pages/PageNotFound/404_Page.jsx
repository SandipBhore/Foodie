import React from "react";
import Style from "./PageNotFound.module.scss";
import PIC from "../../Assets/Images/404.jpg";
import { Link } from "react-router-dom";

function Page_Not_Found() {
  return (
    <div className={Style.main_container}>
      <div className={Style.pnf}>
        <h1 style={{ backgroundImage: `url(${PIC})` }}>404</h1>
        <h2>The Page you are requesting doesn't exist.</h2>
      </div>

      <div className={Style.button404}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className={Style.toHomeButton}>Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Page_Not_Found;
