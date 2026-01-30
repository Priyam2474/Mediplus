import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditDoctor() {
    const params = useParams();
    const navigate = useNavigate();
    
    const [doctorname, setDoctorname] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [experience, setExperience] = useState("");
    const [degree, setDegree] = useState("");
    const [details, setDetails] = useState("");
    const [fees, setFees] = useState("");
    

   


    useEffect(() => {
     
        fetch(`http://localhost/mediplus/getdoctor.php?doctorid=${params.ids}`)
            .then((response) => response.json())
            .then((res) => {
               
    
                if (Array.isArray(res) && res.length > 0) {
                    const doctor = res[0];
                    setDoctorname(doctor.doctorname || "");
                    setSpecialty(doctor.specialty || "");
                    setExperience(doctor.experience || "");
                    setDegree(doctor.degree || "");
                    setDetails(doctor.details || "");
                    setFees(doctor.fees || "");
                } else {
                    alert("Doctor not found");
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                alert("Failed to fetch doctor data.");
            });
    }, [params.ids]);
    
   
    
    
    const Upadate = (e) => {
        e.preventDefault();
        const doctor = {
            doctorname: doctorname,
            specialty: specialty,
            experience: experience,
            degree: degree,
            details: details,
            fees: fees,
            doctorid: params.ids,
        }
        axios.post('http://localhost/mediplus/upadatedoctor.php', doctor, {  
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                alert("Doctor updated successfully!");
                navigate('/doctorList');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='d-flex'>
            
            <AdminSidebar></AdminSidebar>
            <div className="container-fluid p-4 w-75" style={{ marginLeft: "260px", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}>
               
                <h3 className='text-center'>Edit Doctor</h3>
                <form onSubmit={Upadate} className="">

                    <div className="mb-3">
                        <label>Doctor Name</label>
                        <input type="text" value={doctorname} onChange={(e) => setDoctorname(e.target.value)} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label>Specialty</label>
                        <input type="text"  value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label>Experience</label>
                        <input type="text"  value={experience} onChange={(e) => setExperience(e.target.value)} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label>Degree</label>
                        <input type="text"  value={degree} onChange={(e) => setDegree(e.target.value)} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label>Details</label>
                        <textarea  value={details} onChange={(e) => setDetails(e.target.value)} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label>Fees</label>
                        <input type="text"  value={fees} onChange={(e) => setFees(e.target.value)} className="form-control" />
                    </div>


                    <div className="mt-3 text-center">
                    <button type="submit" className="btn ">Update</button>
                    </div>
                </form>
                
            </div>
        </div>

    );
}

export default EditDoctor;
