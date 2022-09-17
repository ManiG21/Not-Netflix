import "./Movielist.css";
import React, { useState, useEffect } from "react";
import { getDataApi, MovieImage } from "../../network-requests";
import MovieCard from "../Moviecard/MovieCard";

function MovieList(props) {
  const [moviesList, setMoviesList] = useState(props.moviesList);

  useEffect(() => {
    if (moviesList) return
    getDataApi("discover/movie", "with_genres=53").then((response) => {
      setMoviesList(response.results);
    });
  }, []);

  useEffect(() => {
    setMoviesList(props.moviesList)
  }, [props.moviesList])


  console.log(moviesList);
  return (
    <div className="movieListContainer">
      {moviesList?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
export default MovieList;