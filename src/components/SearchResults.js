
import { useEffect, useState } from 'react';
import { getDataApi } from '../network-requests';
import MovieList from './Movielist';

export const SearchResults = () => {
  const [movieList, setMovieList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`)
    //   apiKeys(" ")
    //   .then((setMovieList)=>{
    //     return setMovieList.json()
    //   })
    //   .then(response =>{
    //     setMovieList(response.data.movies)
    //   })
  }, [])
  const handleSubmit = () => {
    getDataApi('search/movie', `query=${search}`)
      .then(res => setMovieList(res.results))

  }
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

//  when search bar is used options will show on screen
// when?
// loop (looping through movielist)
// key word
//  hand it to the movie props 
// show 20 movies 

  console.log(movieList)
  return (
    <div className='searchBar'>
      <input value={search} onChange={(e) => handleChange(e)}></input>
       <button onClick={handleSubmit}>search</button>
      <MovieList movieList={movieList} />
    </div>
  )
}
