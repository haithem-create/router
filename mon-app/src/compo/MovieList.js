
import MovieCard from "./MovieCard";
import React, { useState } from "react";
import MovieFilter from "./MovieFilter";

function MovieList  ({ films })  {
  // pour filter on utilise des useState0
  const [text, settext] = useState("");
  const filterText = (text) => {
    settext(text);
  };
  const [rate, setrate] = useState("");
  const filterRate = (rate) => {
    setrate(rate);
  };
  return (
    <div>
        <MovieFilter filterText={filterText} filterRate={filterRate} />
      <div className="container">
        {films
          .filter(
            (el) =>
              el.title.toLowerCase().includes(text.toLowerCase()) &&
              el.rate >= rate
          )
          .map((el) => (
            <MovieCard film={el} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
