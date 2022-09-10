import { useEffect, useState } from 'react';
import './App.css';
import { getDataApi } from './network-requests';
import { Routes, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import MovieList from './components/SearchBar/SearchBar'

function App() {
  const [movieList, setMovieList]= useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`)
    .then((response)=>{
      return response.json()
    })
    .then(response =>{
      setMovieList(response.data.movies)
    })
  },[])
  const handleChange =(e) =>{
    setSearch(e.target.value)
  }

  const filterMovies = movieList.filter((movies)=>{
    return movies.name.toLowerCase().includes(search.toLowerCase())
  })




  const [company, setCompany] = useState(null)
  //run this only when component first hits the page
  useEffect(() => {
    getDataApi("company/2")
      .then(res => setCompany(res))
  }, [])
  return (
    <div className="App">
      <div className='searchBar'>
      <input value={search} onChange={(e)=>handleChange(e)}></input>
      <MovieList movieList={filterMovies}/>
      </div>
  { company?.name } { company?.headquarters }
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>

      {company?.name} {company?.headquarters}
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
      </Routes>
    </div >
  );
}

export default App;
