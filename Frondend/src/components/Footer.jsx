import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 1,
      day: "Tuesday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 1,
      day: "Wednesday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 1,
      day: "Thrusday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 1,
      day: "Friday",
      time: "9:00 AM - 5:00 PM",
    },
    {
      id: 1,
      day: "Saturday",
      time: "9:00 AM - 2:00 PM",
    },
  ];
  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            {hours.map((element) => {
              return (
                <li key={element.id}>
                  <span>{element.day}=</span>
                  <span>{element.time}</span>
                </li>
              );
            })}
          </div>
          <div>
            <h4>Contact Us</h4>
            <div>
              <FaPhone style={{ color: "#34b7f1" }}/>
              <span>6287365656</span>
            </div>
            <div>
              <MdEmail style={{ color: "#DB4437" }}/>
              <span>
                <a href="mailto:hospicare@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                  hospicare@gmail.com
                  </a>
              </span>
            </div>

            <div>
              <FaLocationArrow style={{ color: "#FF9800" }}/>
              <span>Birgunj-2, Nepal</span>
            </div>
            <div>
              <FaWhatsapp style={{ color: "#25D366" }} /> 
              <span>
                <a
                  href="https://wa.me/6287365656"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Chat with Us
                </a>
              </span>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <h4>Follow Us</h4>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <a
              href="https://facebook.com"
              style={{ textDecoration: "none", color: "#3b5998" }}
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              style={{ textDecoration: "none", color: "#1DA1F2" }}
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              style={{ textDecoration: "none", color: "#C13584" }}
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <br />
        <div className="copyright">
          <p>&copy; 2024 <strong>HospiCare</strong>. All rights reserved.</p>
          <p style={{  marginTop: "1px" }}>Developed by <strong>Sahil Iqubal</strong></p> 
        </div>
      </footer>
    </>
  );
};

export default Footer;
