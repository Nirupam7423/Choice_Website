import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const BookDemo = () => {
  return (
    <div>
      <form>
        <Box
          border={3}
          borderRadius={5}
          boxShadow={"10px 10px 20px #ccc"}
          padding={3}
          margin={"auto"}
          marginTop={15}
          display={"flex"}
          flexDirection={"column "}
          width={"80%"}
          //   elevation={100}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            variant="h2"
            textAlign={"center"}
          >
            General inquiries
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Box marginLeft={"30px"}>
              <InputLabel
                sx={{
                  mb: 1,
                  mt: 2,
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                First Name
              </InputLabel>
              <TextField
                name="Title"
                placeholder="Enter First Name"
                margin="normal"
                variant="outlined"
                style={{ width: "400px" }}
              />
            </Box>
            <Box marginLeft={"150px"}>
              <InputLabel
                sx={{
                  mb: 1,
                  mt: 2,
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Last Name
              </InputLabel>
              <TextField
                name="Description"
                placeholder="Enter Last Name"
                margin="normal"
                variant="outlined"
                style={{ width: "400px" }}
              />
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Box marginLeft={"30px"}>
              <InputLabel
                sx={{
                  mb: 1,
                  mt: 2,
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Email Address
              </InputLabel>
              <TextField
                name="Description"
                placeholder="Enter Your Address"
                margin="normal"
                variant="outlined"
                style={{ width: "400px" }}
              />
            </Box>
            <Box marginLeft={"150px"}>
              <InputLabel
                sx={{
                  mb: 1,
                  mt: 2,
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Phone Number
              </InputLabel>
              <TextField
                name="Description"
                placeholder="Enter Phone  Number"
                margin="normal"
                variant="outlined"
                style={{ width: "400px" }}
              />
            </Box>
          </Box>
          <InputLabel
            sx={{
              mb: 1,
              mt: 2,
              fontSize: "24px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Send A Message
          </InputLabel>
          <TextField
            name="Description"
            placeholder="Hi Tanisha! Type your message"
            multiline
            rows={8}
            variant="outlined"
            style={{ width: "1100px" }}
          />
          <div>
            <Checkbox /> I agree to terms & condition
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "700px" }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default BookDemo;
