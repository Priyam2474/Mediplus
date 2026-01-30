import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";




function DoctorList() {

  const [data, setData] = useState([]);

  function deletefunction(id) {
    fetch(`http://localhost:5000/api/doctor/delete/${id}`, {
      method: 'DELETE'
    })
      .then((result) => result.json())
      .then((res) => {
        setData(res);
        alert("Doctor removed successfully");
      });

  }

  function doctorshow() {
    fetch("http://localhost:5000/api/doctor/list")
      .then((result) => result.json())
      .then((res) => {
        setData(res);
      });
  }

  useEffect(() => {
    doctorshow();
  }, []);



  return (

    <div>

      <AdminSidebar></AdminSidebar>

      <div className="container-fluid p-3 w-75" style={{ marginLeft: "260px" }}>
        <div className="d-flex justify-content-between mt-2">
          
          <h2 className="text-center text-primary ml-3">All Doctors</h2>

        </div>

        <div id="results" className="mt-4 row">
          {
            data.map((doctor) => (
              <div key={doctor._id} className="col-md-6">
                <div className="card d-flex flex-row my-3 shadow-sm" style={{ height: "315px" }}>
                  <img src={doctor.image} alt={doctor.doctorname} className="img-fluid col-md-6" height="120px" />
                  <div className="ms-3 my-3">
                    <h5 className="fw-bold my-3">{doctor.doctorname}</h5>
                    <p className="text-primary fw-semibold">{doctor.specialty}</p>

                    <p className=" fw-semibold">Experience : {doctor.experience}</p>
                    <p className=" fw-semibold">{doctor.degree}</p>

                    <p className="text-muted ">{doctor.details}</p>
                    <p className=" fw-semibold my-3">Fees : ₹{doctor.fees}</p>
                    {/* <div className="d-flex my-3">
                      <a href="#" className="text-black fs-4 mr-2"><i className="fab fa-facebook" /></a>
                      <a href="#" className="text-black fs-4 mx-2"><i className="fab fa-twitter" /></a>
                      <a href="#" className="text-black fs-4 mx-2"><i className="fab fa-instagram" /></a>
                    </div> */}
                    <div>
                      <button className="btn btn-primary" onClick={() => { deletefunction(doctor._id) }}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))

          }
        </div>
      </div>
    </div>
  );
};

export default DoctorList;