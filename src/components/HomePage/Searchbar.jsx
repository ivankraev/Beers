import styles from './Search.module.css'
import { useContext } from 'react'
import { SearchContext } from '../../Contexts/SearchContext'
import { axios } from '../../utils/api-client'
import { endpoints } from '../../utils/api-endpoints'
export default function Searchbar() {
  const { search, setSearch, setSearchedBeers } = useContext(SearchContext)

  const searchHandler = async () => {
    if (search === '') return
    const response = await axios
      .get(endpoints.search(search))
      .catch((err) => console.log(err))
    response.data.length === 0 && alert('Sorry, nothing found')
    setSearchedBeers(response.data)
  }

  return (
    <div className={styles.searchholder}>
      <div className="input-group" style={{ width: '50%' }}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search for beer..."
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <button
          onClick={searchHandler}
          type="button"
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  )
}
