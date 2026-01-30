import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  const userid = sessionStorage.getItem("userid");
  const navigate = useNavigate();
const HandleSubmit = async (e) => {
  e.preventDefault();

  if (!userid) {
    alert("Please login first to book an appointment.");
    navigate("/login");
    return;
  }

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  try {
    const response = await fetch("http://localhost:5000/api/contactus/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
    navigate("/");
  } catch (error) {
    alert("Failed to send message");
    console.error(error);
  }
}

  return (
    <div>
      
  <Header></Header>

  
  
  <div className="breadcrumbs overlay">
    <div className="container">
      <div className="bread-inner">
        <div className="row">
          <div className="col-12">
            <h2>Contact Us</h2>
            <ul className="bread-list">
              <li>
                <NavLink to="/" >Home</NavLink>
              </li>
              <li>
                <i className="icofont-simple-right" />
              </li>
              <li className="active">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumbs */}
  {/* Start Contact Us */}
  <section className="contact-us section">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-lg-6">
            
              {/*Start Google-map */}
              <img src="img/contact-us.png" className="h-100"/>
              {/*/End Google-map */}
           
          </div>
          <div className="col-lg-6">
            <div className="contact-us-form">
              <h2>Contact With Us</h2>
              <p>
                If you have any questions please fell free to contact with us.
              </p>
              {/* Form */}
              <form className="form" onSubmit={HandleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group login-btn">
                      <button className="btn" type="submit">
                        Submit
                      </button>
                    </div>
                   
                  </div>
                </div>
              </form>
              {/*/ End Form */}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <div className="row">
          {/* single-info */}
          <div className="col-lg-4 col-12 ">
            <div className="single-info">
              <i className="icofont icofont-ui-call" />
              <div className="content">
                <h3>+(000) 1234 56789</h3>
                <p>mediplus@gmail.com</p>
              </div>
            </div>
          </div>
          {/*/End single-info */}
          {/* single-info */}
          <div className="col-lg-4 col-12 ">
            <div className="single-info">
              <i className="icofont-google-map" />
              <div className="content">
                <h3>S V Square, Nr. Sardar Chowk</h3>
                <p>New Ranip, Ahmedabad</p>
              </div>
            </div>
          </div>
          {/*/End single-info */}
          {/* single-info */}
          <div className="col-lg-4 col-12 ">
            <div className="single-info">
              <i className="icofont icofont-wall-clock" />
              <div className="content">
                <h3>Mon - Sat: 8am - 5pm</h3>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
          {/*/End single-info */}
        </div>
      </div>
    </div>
  </section>
  
  {/* Footer Area */}
  <Footer></Footer>
  {/*/ End Footer Area */}
  {/* jquery Min JS */}
  {/* jquery Migrate JS */}
  {/* jquery Ui JS */}
  {/* Easing JS */}
  {/* Color JS */}
  {/* Popper JS */}
  {/* Bootstrap Datepicker JS */}
  {/* Jquery Nav JS */}
  {/* Slicknav JS */}
  {/* ScrollUp JS */}
  {/* Niceselect JS */}
  {/* Tilt Jquery JS */}
  {/* Owl Carousel JS */}
  {/* counterup JS */}
  {/* Steller JS */}
  {/* Wow JS */}
  {/* Magnific Popup JS */}
  {/* Counter Up CDN JS */}
  {/* Google Map API Key JS */}
  {/* Gmaps JS */}
  {/* Map Active JS */}
  {/* Bootstrap JS */}
  {/* Main JS */}


    </div>
  );
}

export default Contact;