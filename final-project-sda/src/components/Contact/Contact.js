import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  return (
    <Box className="contact-page-wrapper">
      <Typography variant="h1" className="primary-heading">
        Have A Question In Mind?
      </Typography>
      <Typography variant="h1" className="primary-heading">
        Let Us Help You
      </Typography>
      <Box className="contact-form-container">
        <TextField
          type="email"
          placeholder="yourmail@gmail.com"
          variant="outlined"
          className="contact-input"
        />
        <Button variant="contained" className="secondary-button">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;