import React, { useEffect, useState } from 'react';

const AppointmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [aadharNum, setAadharNum] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [department, setDepartment] = useState("");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddress] = useState("");
    const [hasVisited, setHasVisited] = useState("");

    const departmentsArray = [
        "Paediatrics",
        "Orthopaedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Dermatology",
        "Physical Therapy",
        "Dermatology",
        "ENT"
    ];

    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        const fetchDoctors = async () => {
            const {data} = await axios.get(
                "http://localhost:4000/api/v1/user/doctors",
            {withCredentials: true }
        );
        setDoctors(data.doctors);
        };
        fetchDoctors();
    }, []);


  return (
    <>

    </>
  )
}

export default AppointmentForm;