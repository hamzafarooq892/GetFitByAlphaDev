import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Signup from "./signup"

export default function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white mt-2">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "150px",
                  margin: "0 10px",
                  marginRight: "60px",
                }}
              />
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active me-lg-5 ms-sm-3" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link me-lg-5 ms-sm-3" href="#exercises">
                  Exercises
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-lg-5 ms-sm-3" to="/aboutus">
                  About us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-lg-5 ms-sm-3" to="/booktrainer">
                  Book Trainer
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-lg-5 ms-sm-3" to="/contactus">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/signup">
                  <button className="btn btn-danger mb-2 ms-sm-3">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login">
                  <button className="btn btn-success me-lg-5 px-sm-4 ms-sm-3">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}