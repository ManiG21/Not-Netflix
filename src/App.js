import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getDataApi } from './network-requests';
import SingleMovie from './components/SingleMovie/SingleMovie'
import LandingPage from './components/LandingPage/LandingPage';
import { SearchResults } from './components/SearchResults/SearchResults';
import Navbar from './components/Navbar/Navbar';
import Categorybox from './components/CategoryBox/Categorybox';

function App() {

  const [genres, setGenres] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi("genre/movie/list")
      .then(res => setGenres(res.genres))
  }, [])
  
  console.log(genres)
  //semi colon is being used as ${}
  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element = {<LandingPage genres={genres}/>}/>
        <Route path="/movie/:id" element = {<SingleMovie/>}/>
        <Route path ="/search" element ={<SearchResults/>}/>
        <Route path ="/genre/:id" element ={<Categorybox/>}/>

      </Routes>
      
    </div>
  );
 
}

export default App;
