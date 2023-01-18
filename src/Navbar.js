import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          flex: "100%",
          padding: 15,
          backgroundColor: "black",
          height: 75,
        }}
      >
        <a className="navbar-brand" href="#" style={{ paddingLeft: 40 }}>
          <img
            src={require("./assets/Netflix_2015_logo.svg.png")}
            style={{ width: 105, height: 28 }}
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
        <div style={{ paddingLeft: 30 }}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
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
      </nav>
    </div>
  );
}

export default Navbar;
