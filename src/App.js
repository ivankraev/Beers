import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import FavouritesContextProvider from './Contexts/FavouritesContext'
import Layout from './components/common/Layout'
import FavouritesPage from './components/Favourites/FavouritesPage'
import RandomBeer from './components/RandomBeer/RandomBeer'
function App() {
  return (
    <div className="App">
      <FavouritesContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="random" element={<RandomBeer />} />
          </Routes>
        </Layout>
      </FavouritesContextProvider>
    </div>
  )
}

export default App
