import React from "react";
import BannerBackground from "../../assets/images/home-banner-background.png";
import BannerImage from "../../assets/images/home-banner-image.png";

import { Link,Route,Routes } from "react-router-dom";
import Order from "../Order/Order";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Banner" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
              Our chefs do all the prep work like chopping, seasoning,
              and marinating so you can enjoy fresh food.
            </p>
            <Link to="/cart" className="secondary-button">
              Order Now 
            </Link>
          </div>
          <div className="home-image-container">
            <img src={BannerImage} alt="Food Bowl" />
          </div>
        </div>
      </div>
      <Routes>
            <Route path="/booknow" exact Component={Order}/>
        </Routes>
      </>
    );
};

export default Home;