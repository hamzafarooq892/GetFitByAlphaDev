import React from 'react'
import Home from "../pages/Home";
import ExercisesDetail from "../pages/ExercisesDetail";
import { Route, Routes } from "react-router-dom";
import Signup from "../components/signup"
import Login from "../components/login"
import Aboutus from "../pages/aboutUs"
import Contactus from "../pages/contactUs";
import BookTrainer from "../pages/bookTrainer"
import Exercises from "../components/Exercises"

export default function index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/id:" element={<exercisesDetail />} />
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/booktrainer" element={<BookTrainer />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </div>
  );
}
