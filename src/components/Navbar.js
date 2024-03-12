import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import BookDemo from "./Images/BookDemo.png";
import ChoiceLogoWithText from "./Images/ChoiceLogoWithText.svg";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      style={{
        background: "#413F42",
      }}
    >
      <Toolbar>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Box display={"flex"} alignItems="center">
            <img
              src={ChoiceLogoWithText}
              alt="pic"
              style={{ width: "20%", height: "auto", paddingTop: "6px" }}
            />
            <Box marginLeft={25}>
              <Tabs sx={{ marginLeft: "-20px" }}>
                <Tab
                  LinkComponent={Link}
                  to="/"
                  label="Home"
                  sx={{
                    fontSize: "22px",
                    color: "#EF7232",
                    marginLeft: "300px",
                    "&:hover": { borderBottom: "2px solid green" },
                  }}
                />

                <Tab
                  href="#Contact"
                  label="Contact Us"
                  sx={{
                    fontSize: "22px",
                    color: "#EF7232",
                    marginLeft: "110px",
                    "&:hover": { borderBottom: "2px solid green" },
                  }}
                />
              </Tabs>
            </Box>
          </Box>
          <Box>
            <button
              onClick={() => {
                navigate("/bookdemo");
              }}
              style={{
                border: "none",
                padding: 0,
                background: "none",
              }}
            >
              <img
                src={BookDemo}
                alt="pic"
                style={{
                  width: "219px",
                  height: "59px",
                  cursor: "pointer",
                }}
              />
            </button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
