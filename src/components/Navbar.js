import { useState, useEffect } from "react";
import React from "react";
import "./Nav.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          flex: "100%",
          paddingLeft: 15,
          paddingRight: 15,
          background: `linear-gradient(0deg,rgba(0, 0, 0, 0)0% ,#111 100%)`,
          backgroundColor: show ? "#111" : "rgba(52, 52, 52, 0)",
          height: 75,
          position: "fixed",
          width: "100%",
          display: "flex",
          transitionDuration: "0.5s",
          zIndex: 999999,
        }}
      >
        <a className="navbar-brand" href="#" style={{ paddingLeft: 40 }}>
          <img
            src={require("../assets/Netflix_2015_logo.svg.png")}
            style={{ width: 105, height: 28 }}
            alt={"nothing"}
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{ paddingLeft: 30, justifyContent: "space-evenly" }}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New & Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse by Languages
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginRight: 5,
          }}
        >
          <button
            style={{
              borderWidth: 0,
              padding: 10,
              margin: 10,
              color: "white",
              background: "rgb(0,0,0,0) ",
            }}
          >
            <span className="material-icons">search</span>
          </button>

          <button
            style={{
              borderWidth: 0,
              padding: 10,
              // margin: 10,
              color: "white",
              background: "rgb(0,0,0,0) ",
            }}
          >
            <span className="material-icons">notifications</span>
          </button>
        </div>
        <div
          style={{
            marginRight: 50,
          }}
        >
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={require("../assets/Netflix-avatar.png")}
                style={{ height: 30, width: 30 }}
              ></img>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
