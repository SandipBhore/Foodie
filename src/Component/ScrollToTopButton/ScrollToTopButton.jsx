import React from "react";
import Style from "./ScrollToTopButton.module.scss";
function ScrollToTopButton() {
  // console.log(window);
  window.addEventListener("scroll", () => {
    const getval = window.scrollY;
    // console.log(getval);
    if (getval >= 800) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
  });

  let handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        id="scrollToTop"
        onClick={handleClick}
        className={Style.scrollToTop}
      >
        <i id="icon" className="fas fa-angle-double-up"></i>
      </button>
    </div>
  );
}

export default ScrollToTopButton;
