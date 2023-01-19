import { useState, useEffect } from "react";
import React from "react";

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
        // className="nav"
        style={{
          flex: "100%",
          padding: 15,
          backgroundColor: show ? "#111" : "rgba(52, 52, 52, 0)",
          height: 75,
          position: "fixed",
          width: "100%",
          display: "flex",
          transitionDuration: "0.5s",
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
            marginRight: 100,
          }}
        >
          <button
            style={{
              borderWidth: 0,
              padding: 10,
              margin: 10,
            }}
          >
            <img
              src={require("../assets/searchIcon.png")}
              style={{ height: 10, width: 10 }}
            ></img>
          </button>

          <button
            style={{
              borderWidth: 0,
              padding: 10,
              margin: 10,
            }}
          >
            <img
              src={require("../assets/notificationIcon.png")}
              style={{ height: 10, width: 10 }}
            ></img>
          </button>
        </div>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src={require("../assets/Netflix-avatar.png")}
              style={{ height: 50, width: 50 }}
            ></img>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
