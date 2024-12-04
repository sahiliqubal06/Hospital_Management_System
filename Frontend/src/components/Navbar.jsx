import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const handleLogout = async () => {
    await axios
      .get(
        "https://hospital-management-system-63jj.onrender.com/api/v1/user/patient/logout",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const gotoLogin = () => {
    navigateTo("/login");
  };

  const handleMenuClick = () => {
    setShow(false);
  };

  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={handleMenuClick}>
              HOME
            </Link>
            <Link to={"/appointment"} onClick={handleMenuClick}>
              APPOINTMENT
            </Link>
            <Link to={"/about"} onClick={handleMenuClick}>
              ABOUT US
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="logoutBtn btn" onClick={gotoLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className='"hamburger' onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
