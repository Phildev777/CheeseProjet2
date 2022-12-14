import React from "react";
import "./style/home.css";
import Proptypes from "prop-types";

function DataHomeBase({ image, name, description }) {
  return (
    <div className="character">
      <img className="image" src={image} alt="avatar" />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

DataHomeBase.propTypes = {
  image: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};
export default DataHomeBase;
