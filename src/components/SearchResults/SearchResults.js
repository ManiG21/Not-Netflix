
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataApi } from '../../network-requests';
// import MovieList from '../Movielist';
import MoviesList from '../MovieList/Movielist';



export const SearchResults = () => {

  const [movieList, setMovieList] = useState([])
const location = useLocation()

console.log(location)
const search = location.search.slice(7)
console.log(search)

  useEffect (()=> {
    getDataApi('search/movie', `query=${search}`)
        .then(res => setMovieList(res.results))

},[search])
// only want this code to run when it is loaded 
 
  // console.log(movieList)
  return (
    <div className='searchBar'>
     
      <MoviesList moviesList={movieList} />
{/* after search bar is being used Movie list will pop up  */}
      {/* <div className='searchList'>
        {props.SearchResults.map((movie) => {
          return <MovieList movie={movie} />
        })}

      </div> */}
    </div>

  )
}
