// also imported useEffect and UseState hook from react 
import { useEffect, useState } from 'react';
// imported uselocation hook 
import { useLocation } from 'react-router-dom';
// imported getdataapi hook
import { getDataApi } from '../../network-requests';
// imported Juans movie list in order to connect both search bar and movie results 
import MoviesList from '../MovieList/Movielist';


// created variable and set it to export default in order to import in other files
export const SearchResults = () => {
   // created a new variable which we used search
    // use state allows us to track state ina  function component 
    // use state accepts the current (movieList) and returns 2 values
    //  (setMovie: updates our state)

  const [movieList, setMovieList] = useState([])
const location = useLocation()

// used to keep a part of the url which is search "?query="(7)
// console.log(location)
const search = location.search.slice(7)
// console.log(search)

// useEffect is getting movie api/fetching data, updating 
  useEffect (()=> {
    // retriving the movie api(route: for movie, Query is set when search)
    getDataApi('search/movie', `query=${search}`)
        .then(res => setMovieList(res.results))
        // result in the movie option that is searched 

},[search])
//^^ only want this code to run when it is loaded 
 
  return (
    <div className='searchBar'>
      {/* imports juans movielist conecting it to the search results */}
      <MoviesList moviesList={movieList} />
    </div>

  )
}
