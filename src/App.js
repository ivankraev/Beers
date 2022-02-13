import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import {
  Snackbar,
  RandomBeer,
  FavouritesPage,
  Layout,
  HomePage,
  FavouritesContextProvider,
  StartScreenPage,
} from '../src/components/index'
import MetamaskTransaction from './components/common/MetaMaskTransaction/MetamaskTransaction'
function App() {
  const [isConnected, setIsConnected] = useState(
    Boolean(localStorage.getItem('metamask-account')),
  )

  return (
    <div className="App">
      <FavouritesContextProvider>
        {!isConnected ? (
          <StartScreenPage
            setIsConnected={setIsConnected}
            isConnected={isConnected}
          />
        ) : (
          <>
            <Snackbar />
            <Layout setIsConnected={setIsConnected}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="favourites" element={<FavouritesPage />} />
                <Route path="random" element={<RandomBeer />} />
                <Route path="get/:id" element={<MetamaskTransaction />} />
              </Routes>
            </Layout>
          </>
        )}
      </FavouritesContextProvider>
    </div>
  )
}

export default App
