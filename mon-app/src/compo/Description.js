import React from "react";
import { Link } from "react-router-dom";

function Description(props) {
  const { film } = props.location;
  return (
    <div align="center" style ={{backgroundColor: "#282c34", color: "white"}}>
      {/* <h1> description </h1> */}
      <h2> {film.title}</h2>
      <Link to="/">Home</Link>
      <br />
      {/* <img style={{ width: "380px", height: "400px" }} src={film.posterURL} /> */}
      <br />
      <h3>trailer</h3>
      <iframe
        width="853"
        height="480"
        src= {film.pathtrail}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Description;

