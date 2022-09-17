import './SingleMovie.css';
import { useEffect, useState } from 'react';
import { getDataApi, MovieImage } from '../../network-requests';
import { useParams } from "react-router-dom";
import logo2 from './Logo2.gif';
export default function SingleMovie(props) {
  const [movie, setMovie] = useState(props.movie)
  console.log(movie)
  //run this only when component first hits the page
  let { id } = useParams();
  useEffect(() => {
    if (movie) return
    //Get movie with onclick?

    getDataApi(`movie/${id}`)
      .then(res => setMovie(res))
  }, [])
  return (
    <div className='container single-movie-container'  >
      <div className='description'>
        <h2>{movie?.title}</h2>
        <h1>{movie?.runtime} minutes</h1>
        <h1>Rating: {movie?.vote_average} Out of 10 </h1>
        <h1>Release Date: {movie?.release_date}</h1>
        <h1> <a>Play Trailer</a></h1>
        <h1> <a>Play Movie</a></h1>
        <h1> <a>Add To My List</a> </h1>
        <p>Overview: <br/>  <br/>
        {movie?.overview}</p>
      </div>
      <MovieImage movie={movie} />
    </div>
  )
}
//Add to My List
// {moviesList.map(movie => <Singlemovie />)}