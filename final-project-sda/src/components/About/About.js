import React from "react";
import AboutBackground from "../../assets/images/about-background.png";
import AboutBackgroundImage from "../../assets/images/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Box, Typography, Button } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <Box className="about-section-container">
      <Box className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </Box>
      <Box className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About Food Bowl" />
      </Box>
      <Box className="about-section-text-container">
        <Typography variant="subtitle1" className="primary-subheading">
          Love is all about food!
        </Typography>
        <Typography variant="h4" className="primary-heading">
          Food Is an Important Part Of A Balanced Diet
        </Typography>
        <Typography variant="body1" className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </Typography>
        <Typography variant="body1" className="primary-text">
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non
        </Typography>
        <Box className="about-buttons-container">
          <Button className="secondary-button">Learn More</Button>
          <Button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;