import { useEffect, useState } from 'react';
import './App.css';
import { getDataApi } from './network-requests';

function App() {
  const [company, setCompany] = useState(null)
  //run this only when component first hits the page
  useEffect(()=> {
    getDataApi()
      .then(res => setCompany(res))
  }, [])
  return (
    <div className="App">
    {company?.name} {company?.headquarters}
    </div>
  );
}

export default App;
