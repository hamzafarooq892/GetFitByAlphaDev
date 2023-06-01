import React, { useState } from "react";
import { Form, Formik } from "formik";
import axios from "axios";

const BookTrainerPage = () => {
   const postData = (data) => {
     try {
       axios
         .post("http://localhost:5000/user/signup", {
           username: data.username,
           email: data.email,
           password: data.password,
           confirmPassword: data.confirmPassword,
         })
         .then((res) => {
           alert(JSON.stringify(res.data));
         });
     } catch (error) {
       console.error("error", error);
     }
   };
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
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
                            Book Your Trainer
                          </p>

                          <Form>
                            <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  name="name"
                                  id="form3Example1c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example1c"
                                >
                                  Name
                                </label>
                              </div>
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
                                  Email
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="number"
                                  name="age"
                                  id="form3Example4c"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example4c"
                                >
                                  Age
                                </label>
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-2">
                              {/* <i class="fas fa-key fa-lg me-3 fa-fw"></i> */}
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="number"
                                  name="weight"
                                  id="form3Example4cd"
                                  class="form-control"
                                  onChange={handleChange}
                                />
                                <label
                                  class="form-label lead"
                                  for="form3Example4cd"
                                >
                                  Weight
                                </label>
                              </div>
                            </div>

                            <div class="form-check d-flex justify-content-center mb-3">
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
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-2 ">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                                style={{
                                  backgroundColor: "#FF2625",
                                  borderColor: "#FF2625",
                                }}
                              >
                                Book Now
                              </button>
                            </div>
                          </Form>
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          {/* <img
                            src="https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg?size=626&ext=jpg&uid=R32451452&semt=sph"
                            class="img-fluid align-items-center"
                            alt="Sample image"
                          /> */}
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.4751772687446!2d74.30116777526595!3d31.56601487419311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191caefc884b37%3A0xa159ef8c3cab5034!2sPeak%20Solutions%20College%20(Lower%20Mall%20Campus)!5e0!3m2!1sen!2s!4v1685436071808!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{border:"0"}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                          ;
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
};

export default BookTrainerPage;



//  <iframe
//    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17600.682412886566!2d74.2900080002457!3d31.564371698199334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191caefdf6e483%3A0xd779b8c74a0d9067!2zS29vemkgSGFsZWVtINqp2YjYstuMINit2YTbjNmF!5e0!3m2!1sen!2s!4v1685428295532!5m2!1sen!2s"
//    width="600"
//    height="450"
//    style={{ border: "0" }}
//    allowfullscreen=""
//    loading="lazy"
//    referrerpolicy="no-referrer-when-downgrade"
//  ></iframe>;

// const [selectedLocation, setSelectedLocation] = useState(null);
// const { isLoaded } = useJsApiLoader({
//   googleMapsApiKey: "AIzaSyDtBjmLZ2bJCuLdlAR4n_h0EvXZ1LPTjJc",
// });

// const handleMapClick = (event) => {
//   setSelectedLocation({
//     lat: event.latLng.lat(),
//     lng: event.latLng.lng(),
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Handle form submission here
// };
