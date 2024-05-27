import React from "react";
import ProfilePic from "../../assets/images/Dionis-gjigandi.jpg";
import { AiFillStar } from "react-icons/ai";
import "./Testimonial.css";
import {
  Box,
  Typography,
  Avatar,
  Icon,
} from "@mui/material";


const Testimonial = () => {
  return (
    <Box className="testimonial-container">
      <Box className="testimonial-top">
        <Typography variant="subtitle1" className="testimonial-subtitle">
          Testimonial
        </Typography>
        <Typography variant="h4" className="testimonial-heading">
          What They're Saying
        </Typography>
        <Typography variant="body1" className="testimonial-text">
          purus faucibus ornare suspendisse sed nisi lacus. Interdum velit laoreet id donec ultrices
          tincidunt arcu non sodales. Nunc sed velit dignissim sodales ut. Enim lobortis scelerisque
          fermentum dui faucibus in ornare.
        </Typography>
      </Box>
      <Box className="testimonial-bottom">
        <Avatar
          alt="Dionis Hysko"
          src={ProfilePic}
          className="testimonial-avatar"
        />
        <Typography variant="body1" className="testimonial-comment">
          faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Placerat orci nulla pellentesque
          dignissim enim sit amet. Consequat semper viverra nam libero justo laoreet sit amet cursus. Diam
          vel qu
        </Typography>
        <Box className="testimonial-stars">
          {[...Array(5)].map((_, index) => (
            <Icon key={index} component={AiFillStar} />
          ))}
        </Box>
        <Typography variant="h6" className="testimonial-name">
          Dionis Hysko
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;