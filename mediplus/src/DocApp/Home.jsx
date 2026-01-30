import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div>

      <Header></Header>

      <section className="slider">
        <div className="hero-slider">
          {/* Start Single Slider */}
          <div
            className="single-slider"
            style={{ backgroundImage: 'url("img/slider2.jpg")' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      At MediPlus, we provide reliable and expert healthcare services tailored to your needs. Our dedicated medical team ensures quality care with trust and excellence.{" "}
                    </p>
                    <div className="button">
                      {/* <a href="#" className="btn">
                    Get Appointment
                  </a> */}
                      <NavLink to="/appointment" className="btn">
                        Get Appointment
                      </NavLink>
                      <a href="#" className="btn primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/*/ End Slider Area */}
      {/* Start Schedule Area */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* single-schedule */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance" />
                    </div>
                    <div className="single-content">
                      <span>24/7 Emergency Support</span>
                      <h4>Emergency Cases</h4>
                      <p>
                        Get immediate medical attention anytime. Our emergency unit is open 24/7 to assist you in critical situations.
                      </p>
                      <a href="#">
                        LEARN MORE
                        <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* single-schedule */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription" />
                    </div>
                    <div className="single-content">
                      <span>Find Your Doctor</span>
                      <h4>Doctors Timetable</h4>
                      <p>
                        Check availability and schedule appointments with our specialists. View weekly doctor shifts easily.
                      </p>
                      <a href="#">
                        LEARN MORE
                        <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* single-schedule */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock" />
                    </div>
                    <div className="single-content">
                      <span>Doctor Time</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Friday <span>8.00-20.00</span>
                        </li>
                        <li className="day">
                          Saturday <span>9.00-18.30</span>
                        </li>
                        <li className="day">
                          Sunday <span>Closed</span>
                        </li>
                      </ul>
                      <a href="#">
                        LEARN MORE
                        <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/End Start schedule Area */}
      {/* Start Feautes */}
      <section className="Feautes section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You &amp; Your Family</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  MediPlus is always ready to provide expert care for you and your family. From emergencies to advanced treatments, we are here to help.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-ambulance-cross" />
                </div>
                <h3>24/7 Emergency Help</h3>
                <p>
                  Immediate medical support at your fingertips, available round-the-clock to handle urgent health concerns.
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-medical-sign-alt" />
                </div>
                <h3>Fully Stocked Pharmacy</h3>
                <p>
                  Access essential and prescribed medicines easily from our in-house pharmacy, managed by certified pharmacists.
                </p>
              </div>
              {/* End Single features */}
            </div>
            <div className="col-lg-4 col-12">
              {/* Start Single features */}
              <div className="single-features last">
                <div className="signle-icon">
                  <i className="icofont icofont-stethoscope" />
                </div>
                <h3>Expert Medical Treatment</h3>
                <p>
                  Receive quality care and personalized treatment plans from our team of experienced doctors and specialists.
                </p>
              </div>
              {/* End Single features */}
            </div>
          </div>

        </div>
      </section>
      {/*/ End Feautes */}
      {/* Start Fun-facts */}
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-home" />
                <div className="content">
                  <span className="counter">105</span>
                  <p>Hospital Rooms</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-user-alt-3" />
                <div className="content">
                  <span className="counter">50</span>
                  <p>Specialist Doctors</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont-simple-smile" />
                <div className="content">
                  <span className="counter">1345</span>
                  <p>Happy Patients</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <div className="single-fun">
                <i className="icofont icofont-table" />
                <div className="content">
                  <span className="counter">25</span>
                  <p>Years of Experience</p>
                </div>
              </div>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Fun-facts */}
      {/* Start Why choose */}
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  We are committed to providing exceptional healthcare services with experienced doctors and advanced facilities.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              {/* Start Choose Left */}
              <div className="choose-left">
                <h3>Who We Are</h3>
                <p>
                  MediPlus is committed to enhancing your health with advanced medical services. Our expert team delivers high-quality care, ensuring your well-being through innovative treatments and compassionate support.{" "}
                </p>
                <p>
                  We strive to provide a patient-centered experience by combining modern technology with personalized healthcare. Your health is our priority, and we are dedicated to offering comprehensive medical solutions.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right" />
                        Convenient Online Consultations.{" "}
                      </li>
                      <li>
                        <i className="fa fa-caret-right" />
                        Order Medicines with Ease.
                      </li>
                      <li>
                        <i className="fa fa-caret-right" />
                        Book Lab Tests Effortlessly.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right" />
                        Expert Doctor Appointments.{" "}
                      </li>
                      <li>
                        <i className="fa fa-caret-right" />
                        Quick Access to Medical Reports.
                      </li>
                      <li>
                        <i className="fa fa-caret-right" />
                        24/7 Emergency Assistance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Choose Left */}
            </div>
            <div className="col-lg-6 col-12">
              {/* Start Choose Rights */}
              <img src="/img/contact-us.png" className="h-75 w-100"></img>
              {/* End Choose Rights */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End Why choose */}
      {/* Start Call to action */}
      <section className="call-action overlay" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>
                  Get 24/7 emergency medical care with expert doctors at MediPlus.
                </p>
                <div className="button">
                  {/* <a href="#" className="btn">
                Contact Now
              </a> */}
                  <NavLink to="/contact" className="btn btn-primary">Contact Now</NavLink>
                  {/* <a href="#" className="btn btn-secondary second">
                Learn More
                <i className="fa fa-long-arrow-right" />
              </a> */}
                  <NavLink to="/" className="btn">Learn More <span></span>
                    <i className="fa fa-long-arrow-right" /></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Call to action */}
      {/* Start portfolio */}
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  We ensure a clean and hygienic hospital environment by following strict sanitation protocols, maintaining sterilized equipment, and prioritizing patient safety at all times.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Start service */}
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  MediPlus provides comprehensive healthcare services, ensuring top-quality treatment with advanced medical technology and expert professionals to improve your well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-prescription" />
                <h4>
                  <a href="service-details.html">General Treatment</a>
                </h4>
                <p>
                  Our general treatment services cover routine check-ups, illness diagnosis, and preventive care to keep you and your family healthy.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-tooth" />
                <h4>
                  <a href="service-details.html">Teeth Whitening</a>
                </h4>
                <p>
                  Brighten your smile with our professional teeth whitening services, using safe and effective techniques for a confident look.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-heart-alt" />
                <h4>
                  <a href="service-details.html">Heart Surgery</a>
                </h4>
                <p>
                  We offer advanced cardiac surgery solutions with state-of-the-art facilities and expert surgeons to ensure the best care for your heart.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-listening" />
                <h4>
                  <a href="service-details.html">Ear Treatment</a>
                </h4>
                <p>
                  Our specialized ear treatments help diagnose and manage hearing loss, infections, and other auditory conditions for better hearing health.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-eye-alt" />
                <h4>
                  <a href="service-details.html">Vision Problems</a>
                </h4>
                <p>
                  Get comprehensive eye care services, from vision correction to treating eye diseases, with cutting-edge diagnostic tools.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <div className="single-service">
                <i className="icofont icofont-blood" />
                <h4>
                  <a href="service-details.html">Blood Transfusion</a>
                </h4>
                <p>
                  Safe and reliable blood transfusion services with thoroughly screened donors to ensure optimal patient health and recovery.{" "}
                </p>
              </div>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
      {/*/ End service */}



      <Footer></Footer>

    </div>
  );
}

export default Home;