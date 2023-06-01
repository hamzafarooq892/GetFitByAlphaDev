import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        bgColor="white"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  GetFit By AlphaDev
                </h6>
                <p>
                  An online fitness exercise website where you can see proper
                  muscles exercises and also book personal trainer from your
                  nearby location
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                <p>
                  <Link
                    to="/aboutus"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    About us
                  </Link>
                </p>
                <p>
                  <Link
                    to="/booktrainer"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Book Trainer
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contactus"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Contact us
                  </Link>
                </p>
                <p>
                  <Link
                    to="/#exercises"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Exercises
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Terms & Conditions
                </h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Terms of Service
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Refund Policy
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Info</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Lahore Punjab, Pakistan
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  support@getfit.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 92 316 883 4550
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 92 340 001 6386
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "#FFE9E9" }}>
          © 2023 Copyright:
          <a
            className="text-reset fw-bold"
            href="/"
            style={{ textDecoration: "none" }}
          >
            GetFit By AlphaDev
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
