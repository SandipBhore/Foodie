import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Style from "./Card.module.scss";
import card6 from "../../Assets/Images/card6.jpg";
import card2 from "../../Assets/Images/card2.png";
import card3 from "../../Assets/Images/card3.jpg";
import card4 from "../../Assets/Images/card4.jpg";
import card5 from "../../Assets/Images/card5.jpg";
import card1 from "../../Assets/Images/card 1.jpg";
import card7 from "../../Assets/Images/card7.jpg";
import card8 from "../../Assets/Images/card8.jpg";
import card9 from "../../Assets/Images/card9.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Card() {
  return (
    <>
      <div className={Style.colorr}>
        <Carousel
          isRTL={true}
          enableAutoPlay
          autoPlaySpeed={5000}
          breakPoints={breakPoints}
        >
          <Item>
            <img src={card6} alt={card6} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card9} alt={card9} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card3} alt={card3} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card4} alt={card4} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card5} alt={card5} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card1} alt={card1} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card7} alt={card7} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card8} alt={card8} className={Style.cardss} />
          </Item>
          <Item>
            <img src={card2} alt={card2} className={Style.cardss} />
          </Item>
        </Carousel>
      </div>
    </>
  );
}
export default Card;
