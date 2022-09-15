import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getDataApi } from './network-requests';
import Singlemovie from './components/Single Movie/single-movie'
import LandingPage from './componentjhm s/LandingPage';
// import { SearchResults } from './components/SearchResults';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [company, setCompany] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi("company/7")
      .then(res => setCompany(res))
  }, [])
  
  // console.log(company)
  //semi colon is being used as ${}
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/movie/:id" element = {<SingleMovie/>}/>
      </Routes>
      
    </div>
  );
 
}

export default App;
