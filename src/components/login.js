import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate,Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import axios from "axios";
export default function Signup() {
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();
  const postData = (data) => {
    try {
      axios
        .post("http://localhost:5000/user/signin", {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          alert(JSON.stringify(res.data));
            if (res.data === 'Sign-In Successfully!!!') {
              navigate('/')
          }
        });
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => postData(values)}
      >
        {({ values, handleChange }) => (
          <section class="vh-120" style={{ backgroundColor: "#FFE9E9" }}>
            <div class="container h-60 pt-4">
              <div class="row d-flex justify-content-center align-items-center h-50">
                <div class="col-lg-12 col-xl-11">
                  <div
                    class="card text-black mb-5"
                    style={{ borderRadius: "25px" }}
                  >
                    <div class="card-body p-md-3">
                      <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-1">
                            Login
                          </p>

                          <Form>
                            <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                              {/* <div class="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  name="username"
                                  id="form3Example1c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example1c"
                                >
                                  Username
                                </label>
                              </div> */}
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  name="email"
                                  id="form3Example3c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example3c"
                                >
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  name="password"
                                  id="form3Example4c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example4c"
                                >
                                  Password
                                </label>
                              </div>
                            </div>

                            {/* <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-key fa-lg me-3 fa-fw"></i> 
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  name="confirmPassword"
                                  id="form3Example4cd"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example4cd"
                                >
                                  Repeat your password
                                </label>
                              </div>
                            </div> */}

                            {/* <div class="form-check d-flex justify-content-center mb-3">
                              <input
                                class="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                class="form-check-label"
                                for="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div> */}

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-2 ">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                                style={{
                                  backgroundColor: "#FF2625",
                                  borderColor: "#FF2625",
                                }}
                              >
                                Login
                              </button>
                            </div>
                            <p className="lead">Don't have an Account? <Link to="/signup">Sign Up</Link> </p>
                          </Form>
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?size=626&ext=jpg&uid=R32451452&semt=location_fest_v1"
                            class="img-fluid align-items-center"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}
