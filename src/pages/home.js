import React from "react";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDemo from "../components/BookDemo";
const home = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/bookdemo" element={<BookDemo />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <Homepage /> */}
    </React.Fragment>
  );
};

export default home;
