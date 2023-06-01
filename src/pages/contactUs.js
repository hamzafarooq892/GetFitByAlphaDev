import React from "react";

export default function contact() {
  return (
    <>
      {/* <!--Section: Contact v.2--> */}
      <div className="p-3" style={{ backgroundColor: "#FFE9E9" }}>
        <section class="container mb-5">
          {/* <!--Section heading--> */}
          <h1 class="h1-responsive font-weight-bold text-center my-5">
            Contact us
          </h1>
          {/* <!--Section description--> */}
          <p class="text-center w-responsive mx-auto mb-5 lead">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will <br></br>come back to you within a matter of
            hours to help you.
          </p>

          <div class="row">
            {/* <!--Grid column--> */}
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/* <!--Grid row--> */}
                <div class="row">
                  {/* <!--Grid column--> */}
                  <div class="col-md-6 mt-3">
                    <div class="md-form mb-0 text-left">
                      <label for="name" class="lead">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your name"
                        class="form-control"
                      />
                    </div>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-md-6 mt-3">
                    <div class="md-form mb-0">
                      <label for="email" class="lead">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder=" Ente Your email"
                        class="form-control"
                      />
                    </div>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <label for="subject" class="lead">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter Your Subject"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row mt-3">
                  {/* <!--Grid column--> */}
                  <div class="col-md-12">
                    <div class="md-form">
                      <label className="lead" for="message">
                        Your message
                      </label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Enter Your message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}
              </form>

              <div class="text-center text-md-left mt-4">
                <a
                  class="btn btn-lg"
                  style={{
                    backgroundColor: "#ff2625",
                    width: "120px",
                    color: "white",
                  }}
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div class="status"></div>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  {" "}
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>
                    Lahore pakistan, Lhr 05499,<br></br>Lahore
                  </p>
                </li>

                <li>
                  {" "}
                  <i className="fas fa-phone"></i>
                  <p>+92 123456789</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>support@getfit.com</p>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
        </section>
      </div>
      {/* <!--Section: Contact v.2--> */}
    </>
  );
}
