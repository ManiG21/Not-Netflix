import React, { useState, useEffect } from "react";
import { getDataApi } from "../network-requests";

function MovieList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getDataApi("discover/movie", "with_genres=12").then((response) => {
      setMoviesList(response.results);
    });
  }, []);

  console.log(moviesList);
  return <div></div>;
}

export default MovieList;
