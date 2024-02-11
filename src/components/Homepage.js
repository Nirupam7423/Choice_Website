import React from "react";
import BackgroundImage from "./Images/BackgroundImage.png";
import CategorySelection from "./Images/CategorySelection.png";
import CuratedStream from "./Images/CuratedStream.png";
import ChoiceLogoWithText from "./Images/ChoiceLogoWithText.svg";
import ChoiceLogo from "./Images/ChoiceLogo.png";
import QuestionMark from "./Images/QuestionMark.png";
import { Box, Typography } from "@mui/material";
import MyCarouselComponent from "./MyCarouselComponent";
// import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <>
      <Box position={"relative"} style={{ margin: "-8px" }}>
        <img
          src={BackgroundImage}
          alt="pic"
          style={{ width: "100%", height: "3220px" }}
        />
        <Typography
          style={{
            position: "absolute",
            top: "5.9%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "42px",
            textAlign: "center",
          }}
        >
          “Curate Your Storyline”
        </Typography>
        <Typography
          style={{
            position: "absolute",
            top: "7.54%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#EF7232",
            fontSize: "26px",
            textAlign: "center",
          }}
        >
          Skip, Select, Savor.
        </Typography>
        <img
          src={CategorySelection}
          alt="pic"
          style={{
            width: "81.45%",
            height: "20.45%",
            position: "absolute",
            top: "9.689%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <img
          src={CuratedStream}
          alt="pic"
          style={{
            width: "81.45%",
            height: "23.32%",
            position: "absolute",
            top: "49.60%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Box
          display={"flex"}
          alignItems={"center"}
          // justifyContent={"center"}
          style={{
            position: "absolute",
            //   width: "72.36%",
            top: "34.56%",
          }}
        >
          <Typography
            style={{
              marginLeft: "520px",
              //   position: "absolute",
              //   width: "72.36%",
              //   top: "37.85%",
              //   left: "50%",
              //   transform: "translateX(-50%)",
              color: "white",
              fontSize: "42px",
            }}
          >
            Why
          </Typography>
          <img
            src={ChoiceLogo}
            alt="pic"
            style={{ marginLeft: "20px", width: "185px", height: "46.25px" }}
          />
          <img
            src={QuestionMark}
            alt="pic"
            style={{ marginLeft: "12px", width: "31px", height: "41px" }}
          />
        </Box>
        <Typography
          style={{
            position: "absolute",
            width: "72.36%",
            top: "37.85%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "23px",
            //   textAlign: "center",
          }}
        >
          With CHOICE, the future of OTT viewing is in your hands. Get ready for
          a powerful, personalised, and meaningful entertainment journey like
          never before. CHOICE is built on the foundation of empowering users to
          curate their own entertainment journey, offering a vast array of
          content across categories. With CHOICE, viewers can explore & choose
          your preferred content, while ensuring a safe and responsible viewing
          experience. Our commitment to innovation, user-centric design, and
          cutting-edge technology sets us apart as pioneers in the industry.
          Join us on this exciting adventure as we reshape the way we consume
          and interact with digital content.
        </Typography>
        <Box
          style={{
            position: "absolute",
            top: "73.72%",
            marginLeft: "200px",
          }}
        >
          <MyCarouselComponent />
        </Box>
        {/* <div> */}
        <Typography
          id="Contact"
          style={{
            position: "absolute",
            top: "89%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "22px",
          }}
        >
          Contact us
        </Typography>
        {/* </div> */}
        <Box
          display={"flex"}
          alignItems={"center"}
          style={{
            position: "absolute",
            //   width: "72.36%",
            top: "90.98%",
          }}
        >
          <Box>
            <img
              src={ChoiceLogoWithText}
              alt="pic"
              style={{ width: "185px", height: "75px", marginLeft: "165px" }}
            />
          </Box>
          <Box>
            <Typography
              style={{ marginLeft: "302px", color: "white", fontSize: "20px" }}
            >
              Email:
            </Typography>
            <Typography
              style={{ marginLeft: "302px", color: "white", fontSize: "26px" }}
            >
              admin@choiceai.in
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{ marginLeft: "302px", color: "white", fontSize: "20px" }}
            >
              Address:
            </Typography>
            <Typography
              style={{
                marginLeft: "139px",
                marginRight: "78px",
                color: "white",
                fontSize: "26px",
              }}
            >
              C-9, Market, opposite IIT Delhi Main Road, Block C 5, Safdarjung
              Development Area, Hauz Khas, New Delhi, Delhi 110016
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
