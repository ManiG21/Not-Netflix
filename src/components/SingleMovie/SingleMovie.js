import './SingleMovie.css';
import { useEffect, useState } from 'react';
import { getDataApi, MovieImage } from '../../network-requests';
import { useParams } from "react-router-dom";
import logo2 from './Logo2.gif';

export default function SingleMovie(props) {
  const [movie, setMovie] = useState(props.movie)
  const [video, setVideo] = useState([])
  const movieTrailerId = '1mTjfMFyPi8'
  console.log(video)
  console.log(movie)
  //run this only when component first hits the page
  let { id } = useParams();
  useEffect(() => {
    // if (movie) return
    // Get movie with onclick?

    getDataApi(`movie/${id}`)
      .then(res => setMovie(res))
  }, [])
  useEffect(() => {
    // if (videos) return
    //Get movie with onclick?

    getDataApi(`movie/${id}/videos`)
      .then(res => setVideo(res.results.filter(movie => movie.name.toLowerCase().includes('trailer'))[0]))
  }, [])
  // getDataApi(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
  //     
  return (
    <div className='single-movie-container'  >
      <div className='description'>
        <h2>{movie?.title}</h2>
        <h1>{movie?.runtime} minutes</h1>
        <h1>Rating: {movie?.vote_average} Out of 10 </h1>
        <h1>Release Date: {movie?.release_date}</h1>
        <h1> <a>Play Movie</a></h1>
        <h1> <a>Add To My List</a> </h1>
        <p>Overview: <br/>  <br/>
        {movie?.overview}</p>
      </div>
     {video.key?
      <iframe

        className='movie-trailer'
        width="680" height="500"
        frameBorder="0"
        // src={`https://www.youtube.com/embed/${movieTrailerId}?enablejsapi=1`}
        
        src={`https://www.youtube.com/embed/${video.key}?enablejsapi=1`}
        // src={`https://www.youtube.com/results?search_query=${id}?enablejsapi=1`}
        allowFullScreen
></iframe>:null}

      <MovieImage movie={movie} />
    </div>
  )
}
//Add to My List
// {moviesList.map(movie => <Singlemovie />)}