import React from "react";
import Logo from "../../assets/images/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Box, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer-wrapper">
      <Box className="footer-section-one">
        <Box className="footer-logo-container">
          <img src={Logo} alt="Website Logo" />
        </Box>
        <Box className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </Box>
      </Box>
      <Box className="footer-section-two">
        <Box className="footer-section-columns">
          <Typography variant="body1">Quality</Typography>
          <Typography variant="body1">Help</Typography>
          <Typography variant="body1">Share</Typography>
          <Typography variant="body1">Careers</Typography>
          <Typography variant="body1">Testimonials</Typography>
          <Typography variant="body1">Work</Typography>
        </Box>
        <Box className="footer-section-columns">
          <Typography variant="body1">Informations</Typography>
          <Typography variant="body1">hello@foodie.com</Typography>
          <Typography variant="body1">press@foodie.com</Typography>
          <Typography variant="body1">contact@foodie.com</Typography>
        </Box>
        <Box className="footer-section-columns">
          <Typography variant="body1">Terms & Conditions</Typography>
          <Typography variant="body1">Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;