import React from "react";
import Style from "./Advertisement.module.scss";
// import Typical from "react-typical";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

function Advertisement() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className={Style.advertisement}>
      {/* <Typical
        loop={Infinity}
        wrapper="h2"
        steps={[
          "Welcome to _Food4Foodie_😍",
          3000,
          " Hungry ✋???",
          2000,
          "UnExpected Guests 👪???",
          2000,
          "Cooking Gone Wrong 🍚???",
          2000,
          "Party Night 🎉???",
          2000,
          "Late Night at Office 🏤???",
          2000,
          "Watching Movie 🎥???",
          2000,
          "Need Diet Food 💪 ???",
          2000,
          "Want to Eat Chinese 🍲???",
          2000,
          " Craving something 🌭???",
          2000,
        ]}
      /> */}
      <AutoplaySlider
        // transitionDelay={8000}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2500}
        buttons={false}
        bullets={false}
        className={Style.advertisement}
      >
        <div>Welcome to _Food4Foodie_😍</div>
        <div>Hungry ✋???</div>
        <div>UnExpected Guests 👪???</div>
        <div>Cooking Gone Wrong 🍚???</div>
        <div>Party Night 🎉???</div>
        <div>Late Night at Office 🏤???</div>
        <div>Watching Movie 🎥???</div>
        <div>Need Diet Food 💪 ???</div>
        <div>Want to Eat Chinese 🍲???</div>
        <div>Craving something 🌭???</div>
      </AutoplaySlider>
    </div>
  );
}

export default Advertisement;
