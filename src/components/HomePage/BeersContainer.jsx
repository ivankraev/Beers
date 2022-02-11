import { endpoints } from '../../utils/api-endpoints'
import { axios } from '../../utils/api-client'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/SearchContext'
import { Button } from 'react-bootstrap'
import styles from './BeersContainer.module.css'
import Card from '../common/Card'
function BeersContainer() {
  const [beers, setBeers] = useState([])
  const { searchedBeers, setSearchedBeers, search } = useContext(SearchContext)
  useEffect(() => {
    const getAllBeers = async () => {
      const response = await axios
        .get(endpoints.beersList)
        .catch((err) => console.log(err))
      setBeers(response.data)
    }
    getAllBeers()
  }, [])

  return (
    <>
      {searchedBeers.length > 0 && (
        <Button
          className={styles.backbutton}
          onClick={() => {
            setSearchedBeers([])
          }}
        >
          Back
        </Button>
      )}
      {searchedBeers.length > 0 && (
        <h4 style={{ textAlign: 'center' }}>Search results for {search}</h4>
      )}
      <br />
      <div className={styles.container}>
        {searchedBeers.length === 0
          ? beers.map((beer) => <Card key={beer.id} beer={beer}></Card>)
          : searchedBeers.map((beer) => (
              <Card key={beer.id} beer={beer}></Card>
            ))}
      </div>
    </>
  )
}

export default BeersContainer
