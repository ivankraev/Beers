import './App.css'
import { Routes, Route } from 'react-router-dom'
import {
  Snackbar,
  RandomBeer,
  FavouritesPage,
  Layout,
  HomePage,
  FavouritesContextProvider,
} from '../src/components/index'
import MetamaskTransaction from './components/common/MetaMaskTransaction/MetamaskTransaction'
function App() {
  return (
    <div className="App">
      <FavouritesContextProvider>
        <Snackbar />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="favourites" element={<FavouritesPage />} />
            <Route path="random" element={<RandomBeer />} />
            <Route path="get/:id" element={<MetamaskTransaction />} />
          </Routes>
        </Layout>
      </FavouritesContextProvider>
    </div>
  )
}

export default App
