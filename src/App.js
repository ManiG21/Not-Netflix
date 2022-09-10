import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getDataApi } from './network-requests';
import Singlemovie from './components/Single Movie/single-movie'
import LandingPage from './components/LandingPage';

function App() {
  const [company, setCompany] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi("company/2")
      .then(res => setCompany(res))
  }, [])
  
  console.log(company)
  return (
    <div className="App">
      {company?.name} {company?.headquarters}
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/movie/:id" element = {<Singlemovie/>}/>
      </Routes>
    </div>
  );
 
}

export default App;
