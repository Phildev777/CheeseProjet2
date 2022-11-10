import React, { useState, useEffect } from "react";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.jpeg";
import img3 from "../assets/img/img3.jpeg";
import "./style/Carousel.css";

function Carousel() {
  const [picture, setPicture] = useState(1);

  const changeNext = () => {
    if (picture === 3) {
      setPicture(1);
    } else {
      setPicture(picture + 1);
    }
  };
  const changePrev = () => {
    if (picture === 1) {
      setPicture(3);
    } else {
      setPicture(picture - 1);
    }
  };
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    });
  }, []);
  return (
    <div className="FPCarousel">
      <h1 className="FPTitle">Les FrenCheese</h1>
      <div className="containerimage">
        <button className="buttonprev" type="button" onClick={changePrev}>
          &#10096;
        </button>
        {picture === 1 && (
          <img className="slide" src={img1} alt="slide Cheese" />
        )}
        {picture === 2 && (
          <img className="slide" src={img2} alt="slide Cheese" />
        )}
        {picture === 3 && (
          <img className="slide" src={img3} alt="slide Cheese" />
        )}
        <button className="buttonnext" type="button" onClick={changeNext}>
          &#10097;
        </button>
      </div>
      {showArrow && <div className="scrollDown">&#10097;</div>}
    </div>
  );
}

export default Carousel;
