import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getDataApi } from './network-requests';
import Singlemovie from './components/SingleMovie/single-movie'
import LandingPage from './components/LandingPage';
import MovieList from './components/Movielist';


function App() {
  const [company, setCompany] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi("company/7")
      .then(res => setCompany(res))
  }, [])
  
  console.log(company)
  return (
    <div className="App">
      <h1>M&M</h1>
      {/* {company?.name} {company?.headquarters} */}
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/movie/:id" element = {<Singlemovie/>}/>
        {/* <Route path="/" element = {<MovieList/>}/> */}
      </Routes>
      
    </div>
  );
 
}

export default App;
