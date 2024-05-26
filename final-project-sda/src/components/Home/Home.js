import React from "react"
import Navbar from "../src/components/Home/Home.js";
import BannerBackground from "../../assets/images/home-banner-background.png";
import BannerImage from "../../assets/images/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
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
              <button className="secondary-button">
                Order Now <FiArrowRight />
              </button>
          </div>
          <div className="home-image-container"></div>
            <img src={BannerImage} alt="Food Bowl" />
        </div>
    </div>
  );
}

export default Home;