import './SingleMovie.css';
import { useEffect, useState } from 'react';
import { getDataApi, MovieImage } from '../../network-requests';
import {useParams} from "react-router-dom";
import logo2 from './Logo2.gif';
export default function SingleMovie(props){
    const [movie, setMovie] = useState(props.movie)
    console.log(movie)
  //run this only when component first hits the page
  let {id} = useParams();
  useEffect(()=> {
    if (movie) return
    //Get movie with onclick?
    
    getDataApi(`movie/${id}`)
      .then(res => setMovie(res))
  }, [])
    return(
    <div> 
      <img id='logo2' src={logo2}></img>
        <h1>{movie?.title}</h1>
        <MovieImage movie = {movie} />
        <p>{movie?.overview}</p>
    </div>
    )
}
// {moviesList.map(movie => <Singlemovie />)}