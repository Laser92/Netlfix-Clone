import React from "react";
import "../components/hihi.css";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Banner from "../components/Banner.js";
import requests from "../components/requests";

function Homescreen(props) {
  return (
    <div className="bg">
      <Navbar logIn={props.logIn}/>
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default Homescreen;
