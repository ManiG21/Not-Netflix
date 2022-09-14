import {Link} from "react-router-dom";
import "./MovieCard.css"
import { getDataApi, MovieImage } from '../../network-requests';


export default function MovieCard({movie}) {
   
    return (
        <Link to={`/movie/${movie.id}`} >
          <div className="movie-card">
          <p>{movie.original_title}</p>
               <MovieImage movie = {movie} />   
             


               
             

            </div>
        </Link>
    );
}

