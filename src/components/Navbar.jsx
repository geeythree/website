import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import logoTitle from "../assets/algo-filipino-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar bg-light text-btn flex items-center z-10 pt-2 pb-2 pl-10 pr-10 font-josefin w-full mx-auto fixed">
        <div className="navbar-container flex justify-between items-center w-full">
          <div className="flex">
            <Link
              to="/"
              className="navbar-logo w-20 flex items-center ml-3 mr-3 mb-2"
            >
              <img src={logoTitle} alt="Algo Logo" />
            </Link>
            <h1 className="text-name w-4/12b flex items-center">
              algo filipino
            </h1>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
          <div>
            <ul
              className={
                click
                  ? "nav-menu active"
                  : "nav-menu auto-rows-auto text-center flex tracking-widest"
              }
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links bg-gray-500 flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/learn"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/translate"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
