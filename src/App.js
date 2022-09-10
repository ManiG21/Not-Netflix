import { useEffect, useState } from 'react';
import './App.css';
import { getDataApi } from './network-requests';
import {Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';


function App() {
  const [company, setCompany] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi("company/7")
      .then(res => setCompany(res))
  }, [])
  return (
    <div className="App">
      <h1>M&M</h1>
      {company?.name} {company?.headquarters}
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
