import React from "react";
import { Paper, Button, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import akash from "./Images/akash.jpeg";
import final from "./Images/final.png";
import sample1 from "./Images/Sample1.png";
const Carousel = ({ items }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box display={"flex"} alignItems={"center"}>
      <Button
        onClick={handleBack}
        disabled={activeStep === 0}
        style={{
          fontSize: "30px",
        }}
      >
        <ArrowBackIosIcon />
        Back
      </Button>
      <Paper square elevation={0}>
        <div>{items[activeStep]}</div>
      </Paper>

      <Button
        size="medium"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        style={{
          fontSize: "30px",
        }}
      >
        Next
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  );
};

const MyCarouselComponent = () => {
  const carouselItems = [
    <img
      src={akash}
      alt="Image 1"
      style={{ width: "696px", height: "261px" }}
    />,

    <img
      src={final}
      alt="Image "
      style={{ width: "696px", height: "261px" }}
    />,
    <img
      src={sample1}
      alt="sample 1"
      style={{ width: "696px", height: "261px" }}
    />,
  ];

  return <Carousel items={carouselItems} />;
};

export default MyCarouselComponent;
