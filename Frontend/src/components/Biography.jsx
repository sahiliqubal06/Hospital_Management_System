import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="About" />
      </div>
      <div className="banner">
    
        <h3 style={{textAlign:"center", color:"#0a4769"}}>Who We Are?</h3>
        <p>
          At HospiCare, we are committed to transforming healthcare management
          through innovation and efficiency. Our mission is to streamline the
          way hospitals and medical institutions operate, helping them deliver
          superior patient care while managing their resources effectively.
        </p>
        <p>
          We believe that modern healthcare deserves a modern solution. From
          scheduling appointments and managing patient records to organizing
          doctors, departments, and billing, our Hospital Management System
          offers a comprehensive platform designed to meet the unique challenges
          of healthcare facilities.
        </p>
        <p>
          Our team is dedicated to building a system that is not only intuitive
          and user-friendly but also highly secure and customizable. Whether you
          are running a small clinic or a multi-specialty hospital, HospiCare
          ensures that all your operations are seamlessly integrated, allowing
          healthcare professionals to focus on what matters most—patient
          well-being.
        </p>
        <p>
          Through continuous learning and collaboration, we aspire to empower
          healthcare providers with cutting-edge technology, making healthcare
          more accessible and efficient for everyone.
        </p>
      </div>
    </div>
  );
};

export default Biography;
