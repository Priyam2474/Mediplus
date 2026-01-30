import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import emailjs from '@emailjs/browser';

function Appointment() {
  const [appname, setAppname] = useState("");
  const [appemail, setAppemail] = useState("");
  const [appdate, setAppdate] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  const userid = sessionStorage.getItem("userid");
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctor/list")
      .then((res) => {
        console.log("res.data")
        setDoctors(res.data)
      })

      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const appointment = async (e) => {
    e.preventDefault();

    if (!userid) {
      alert("Please login first to book an appointment.");
      navigate("/login");
      return;
    }

    emailjs
      .sendForm('service_birt0eb', 'template_b4qgosl', form.current, {
        publicKey: 'Y0dmP4wc2bI3KRWMr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    const selectedDoctor = doctors.find(doc => doc.doctorid === selectedDoctorId);

    const data = {
      userid,
      appname,
      appemail,
      appdate,
      appdoctor: selectedDoctor?.doctorname || "",
      doctorid: selectedDoctorId,
      image: selectedDoctor?.image || "",
      experience: selectedDoctor?.experience || "",
      specialty: selectedDoctor?.specialty || "",
      fees: selectedDoctor?.fees || ""
    };


    try {
      await axios.post("http://localhost:5000/api/appointments", data);
      alert("Appointment booked successfully...Please pay your fees to conform your appointment.");
      navigate('/userAppoinments');
    } catch (error) {
      console.error("Booking error", error);
      alert("Error booking appointment. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <section className="slider">
        <div className="hero-slider">
          <div className="single-slider" style={{ backgroundImage: 'url("img/slider2.jpg")' }}>
            <div className="container mb-5">
              <div className="row">
                <div className="col-lg-7 py-5">
                  <h2 className="text-center mb-4">Book an Appointment</h2>
                  <div className="appointment-form p-4 bg-transparent">
                    <form onSubmit={appointment} ref={form}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" placeholder="Enter Your Name" name="appname" className="form-control" onChange={(e) => setAppname(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="appemail" placeholder="Enter Your Email" onChange={(e) => setAppemail(e.target.value)} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Appointment Date</label>
                        <input
                          type="date"
                          name="appdate"
                          className="form-control"
                          value={appdate}
                          onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            if (selectedDate.getDay() === 0) {
                              alert("Appointments are not available on Sundays. Please choose another date.");
                              setAppdate(""); // Clear the selection
                            } else {
                              setAppdate(e.target.value);
                            }
                          }}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          max={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Doctor</label>
                        <select
                          value={selectedDoctorId}
                          onChange={(e) => setSelectedDoctorId(e.target.value)}
                          className="form-control"
                          required
                        >
                          <option value="">Select Doctor</option>

                          {/* {Array.isArray(doctors) && doctors.length > 0 ? (
                            doctors.map((doc) => (
                              <option key={doc.doctorid} value={doc.doctorid}>
                                {doc.doctorname} ({doc.specialty})
                              </option>
                            ))
                          ) : (
                            <option disabled>No doctors available</option>
                          )} */}
                          {Array.isArray(doctors) && doctors.length > 0 ? (doctors.map((doc) => (
                            <option key={doc._id} value={doc.doctorid}>
                              {doc.doctorname} ({doc.specialty})
                            </option>
                          ))
                          ) : (
                            <option disabled>No doctors available</option>
                          )
                          }

                        </select>

                      </div>
                      <input
                        type="hidden"
                        name="appdoctor"
                        value={
                          doctors.find(doc => doc.doctorid === selectedDoctorId)?.doctorname || ""
                        }
                      />
                      <input
                        type="hidden"
                        name="email"
                        value={doctors.find(doc => doc.doctorid === selectedDoctorId)?.email || ""}
                      />
                      <button type="submit" className="btn btn-primary w-100 mt-3">Book Appointment</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointment; 
