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
      {/* <img id='logo2' src={logo2}></img> */}
        <h2>{movie?.title}</h2>
        <h1>{movie?.runtime} minutes</h1>
        <h1>Rating: {movie?.vote_average} Out of 10 </h1>
        <h1>Release Date: {movie?.release_date}</h1>
       <h1> <a>Add To My List</a> </h1>
        <MovieImage movie = {movie} />
        <p>{movie?.overview}</p>
    </div>
    )
}
//Add to My List
// {moviesList.map(movie => <Singlemovie />)}