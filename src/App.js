import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import FavouritesContextProvider from './Contexts/FavouritesContext';
function App() {


  return (
    <div className="App">
      <FavouritesContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </FavouritesContextProvider>
    </div>
  );
}

export default App;
