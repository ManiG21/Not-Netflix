
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataApi } from '../../network-requests';
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
 
  return (
    <div className='searchBar'>
      <MoviesList moviesList={movieList} />
    </div>

  )
}
