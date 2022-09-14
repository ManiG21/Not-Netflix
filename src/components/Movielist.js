import React, { useState, useEffect } from "react";
import { getDataApi, MovieImage } from "../network-requests";
import Singlemovie from "./SingleMovie/single-movie";
import MovieCard from "./Moviecard/MovieCard";


function MovieList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getDataApi("discover/movie", "with_genres=28").then((response) => {
      setMoviesList(response.results);
    });
  }, []);

  console.log(moviesList);
  return (
    <div className="movieListContainer">
      <div className="videoRow">
        {moviesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)} 
        
      </div>
      {/* <div className="videorow">
          {action.map(movie => <MovieCard key={movie.id} movie= {movie}/>)}
       </div> */}

    </div>
  );
}

export default MovieList;
