import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExercisesDetail from "./pages/ExercisesDetail";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import Router from "./routes/index";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488" } }} m="auto">
      <Navbar />
      <Router/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/id:" element={<ExercisesDetail />} />
      </Routes> */}
      <Footer />
    </Box>
  );
};

export default App;
