import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-color">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    Hospital Management System
                  </h5>

                  <p>
                    The hospital management system helps register complete
                    patient information. It captures and stores the medical
                    history, treatment required, details of their previous
                    visits, upcoming appointments if any, reports, insurance
                    details and more. It helps eliminate the need to get these
                    details on every visit.
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About Us</h5>

                  <ul class="list-unstyled mb-0">
                    <li><a href="#!" class="text-color">Our Story</a></li>
                    <li><a href="#!" class="text-color">Mission & Vision</a></li>
                    <li><a href="#!" class="text-color">Leadership Team</a></li>
                    <li><a href="#!" class="text-color">Awards & Recognition</a></li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact Us</h5>

                  <ul class="list-unstyled mb-0">
                    <li><a href="#!" class="text-color">Request Appointment</a></li>
                    <li><a href="#!" class="text-color">Emergency Services</a></li>
                    <li><a href="#!" class="text-color">Find a Doctor</a></li>
                    <li><a href="#!" class="text-color">Support Center</a></li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Careers</h5>

                  <ul class="list-unstyled mb-0">
                    <li><a href="#!" class="text-color">Current Openings</a></li>
                    <li><a href="#!" class="text-color">Internship Programs</a></li>
                    <li><a href="#!" class="text-color">Employee Benefits</a></li>
                    <li><a href="#!" class="text-color">Life at HMS</a></li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Quick Links</h5>

                  <ul class="list-unstyled mb-0">
                    <li><a href="#!" class="text-color">Patient Portal</a></li>
                    <li><a href="#!" class="text-color">Insurance Partners</a></li>
                    <li><a href="#!" class="text-color">Health Blog</a></li>
                    <li><a href="#!" class="text-color">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </section>


            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Register for free</span>
                <Link to="/user/patient/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>


        </footer>
      </div>
    </div>
  );
};

export default Footer;
