import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { getDataApi } from './network-requests';
import SingleMovie from './components/SingleMovie/SingleMovie'
import LandingPage from './components/LandingPage';


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
      <h1>M&M</h1>
      {company?.name} 
      {/* {company?.headquarters} */}
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/movie/:id" element = {<SingleMovie/>}/>
      </Routes>
    </div>
  );
 
}

export default App;
