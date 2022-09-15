import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getDataApi } from './network-requests';
import Singlemovie from './components/Single Movie/single-movie'
import LandingPage from './components/LandingPage';
// import { SearchResults } from './components/SearchResults';
import Navbar from './components/Navbar/Navbar';

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
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/movie/:id" element = {<Singlemovie/>}/>
       {/* <div> */}
       {/* <Navbar/> */}
        {/* <Route path="/search" element={<SearchResults/>}/> */}
      {/* </div> */}
      </Routes>
    </div>
  );
 
}

export default App;
