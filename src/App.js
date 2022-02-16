import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ethers } from 'ethers'
import { connect } from "react-redux";
import { setSearchField } from './redux/search/search.actions'
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
function App({ setSearchField }) {
  const [isConnected, setIsConnected] = useState(false)
  const { pathname } = useLocation();

  const isPageDifferentFromHome = pathname !== '/'

  const getAddress = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      address && setIsConnected(true)
    } catch (error) {
      setIsConnected(false)
    }
  }

  useEffect(() => {
    getAddress()
    setSearchField('')
  }, [isPageDifferentFromHome])


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
                <Route path="/" element={<HomePage pathname={pathname} />} />
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

const mapDispatchToProps = (dispatch) => ({
  setSearchField: (beers) => dispatch(setSearchField(beers)),
});

export default connect(null, mapDispatchToProps)(App);
