import './single-movie.css';
import { useEffect, useState } from 'react';
import { getDataApi, MovieImage } from '../../network-requests';


export default function Singlemovie(){
    const [movie, setMovie] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi("movie/12")
      .then(res => setMovie(res))
  }, [])
    return(
    <div> 
        <h1>{movie?.title}</h1>
        <MovieImage movie = {movie} />
        <p>{movie?.overview}</p>
    </div>
    )
}