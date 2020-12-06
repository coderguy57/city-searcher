import React, { Fragment } from "react";
import cityImage from "./city-image.jpg";

const Home = () => {
  return (
    <div className="text-center">
      <img src={cityImage} className="home-image"></img>
      <h2 className="text-large">City Search</h2>
    </div>
  );
};

export default Home;
