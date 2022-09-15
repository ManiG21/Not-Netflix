import "./single-movie.css";
import { useEffect, useState } from "react";
import { getDataApi, MovieImage } from "../../network-requests";
import { useParams } from "react-router-dom";

export default function Singlemovie(props) {
  const [movie, setMovie] = useState(props.movie);
  //run this only when component first hits the page
  let { id } = useParams();
  useEffect(() => {
    if (movie) return;
    //Get movie with onclick?
    getDataApi("movie/${id}").then((res) => setMovie(res));
  }, []);
  return (
    <div>
      <h1>{movie?.title}</h1>
      <MovieImage movie={movie} />
      <p>{movie?.overview}</p>
    </div>
  );
}
