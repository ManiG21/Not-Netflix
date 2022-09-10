import { apiKeys } from '../network-requests';
import { useEffect, useState } from 'react';

export const SearchResults = () =>{
    const [movieList, setMovieList]= useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`)
        apiKeys(" ")
        .then((setMovieList)=>{
          return setMovieList.json()
        })
        .then(response =>{
          setMovieList(response.data.movies)
        })
      },[])
      const handleChange =(e) =>{
        setSearch(e.target.value)
      }
    
      // user can type in lower case and the search will still bring up movie 
      // that is being searched 
      const filterMovies = movieList.filter((movies)=>{
        return movies.name.toLowerCase().includes(search.toLowerCase())
      })
    
    return(
        <div className='searchBar'>
      <input value={search} onChange={(e)=>handleChange(e)}></input>
      <MovieList movieList={filterMovies}/>
      <button>search</button>
      <h1>searchBar</h1>
      </div>
      
    )
}
