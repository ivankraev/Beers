
import './App.css';
import { endpoints } from './utils/api-endpoints';
import { axios } from './utils/api-client';
import { useEffect, useState } from 'react';
function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    const getAllBeers = async () => {
      const response = await axios.get(endpoints.beersList)
      setBeers(response.data)
    }
    getAllBeers()
  }, [])

  console.log(beers)
  return (
    <div className="App">
      <h1>My React App</h1>
    </div>
  );
}

export default App;
