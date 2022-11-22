import { useState, useEffect } from "react";
import axios from "axios";
import "./style/CarouselDesktop.css";
import { Link } from "react-router-dom";

function CarouselDesktop() {
  const [images, setImages] = useState([]);
  const callApi = () => {
    axios.get(`http://localhost:5000/api/cheese`).then((res) => {
      const calledImages = [];
      res.data
        .filter((element) => element.fromageImage.includes("lorho"))
        .map((element) => {
          return calledImages.push(element.fromageImage);
        });
      setImages(calledImages.slice(7, 13));
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="carouselDesktop">
      <div className="contenu-carousel">
        <div className="images-carousel">
          <Link to="/Fromages">
            {images.map((image) => (
              <div
                key={image}
                className="carouselImg"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarouselDesktop;
