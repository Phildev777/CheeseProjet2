import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CarouselDesktop from "./CarouselDesktop";
import "./style/Carousel.css";

function Carousel() {
  const [picture, setPicture] = useState(1);
  const [slide, setSlide] = useState([]);
  const carouselApi = () => {
    axios.get(`http://localhost:5000/api/cheese`).then((res) => {
      const sliderData = [];

      res.data.map((element) => {
        return sliderData.push({
          fromageImage: element.fromageImage,
        });
      });
      setSlide(sliderData);
    });
  };

  useEffect(() => {
    carouselApi();
  }, []);

  const changeNext = () => {
    if (picture === slide.length - 1) {
      setPicture(0);
    } else {
      setPicture(picture + 1);
    }
  };
  const changePrev = () => {
    if (picture === 0) {
      setPicture(slide.length - 1);
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
        <CarouselDesktop />
        <Link to="/Fromages">
          {slide[picture] && (
            <img
              className="slide"
              src={slide[picture].fromageImage}
              alt="slide Cheese"
            />
          )}
        </Link>
        <button className="buttonnext" type="button" onClick={changeNext}>
          &#10097;
        </button>
      </div>
      {showArrow && <div className="scrollDown">&#10097;</div>}
    </div>
  );
}

export default Carousel;
