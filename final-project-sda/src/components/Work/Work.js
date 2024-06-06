import React from "react";
import PickMeals from "../../assets/images/pick-meals-image.png";
import ChooseMeals from "../../assets/images/choose-image.png";
import DeliveryMeals from "../../assets/images/delivery-image.png";
import { Box, Typography } from "@mui/material";
import "./Work.css"; 

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet, consectetur ",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ];

    return (
        <Box className="work-section-wrapper">
            <Box className="work-section-top">
                <Typography className="primary-subheading">Work</Typography>
                <Typography className="primary-heading">How It Works</Typography>
                <Typography className="primary-text">
                    accumsan lacus vel. Praesent elementum facilisis leo vel fringilla est. Ut porttitor leo a diam.
                    Nibh mauris cursus mattis molestie a. Ac tortor vitae
                </Typography>
            </Box>
            <Box className="work-section-bottom">
                {workInfoData.map((data, index) => (
                    <Box key={index} className="work-section-info">
                        <Box className="info-boxes-img-container">
                            <img src={data.image} alt="Card Images" />
                        </Box>
                        <Typography variant="h6">{data.title}</Typography>
                        <Typography>{data.text}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Work;