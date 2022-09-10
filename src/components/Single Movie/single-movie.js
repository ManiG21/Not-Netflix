import './single-movie.css';
import { useEffect, useState } from 'react';
import { getDataApi, MovieImage } from '../../network-requests';


export default function Singlemovie(props){
    const [movie, setMovie] = useState(props.movie)
  //run this only when component first hits the page
  useEffect(()=> {
    if (movie) return
    //Get movie with onclick?
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
{moviesList.map(movie => <Singlemovie />)}