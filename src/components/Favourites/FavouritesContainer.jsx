import { useContext } from 'react'
import { FavouritesContext } from '../../Contexts/FavouritesContext'
import { Button } from 'react-bootstrap'
import styles from '../HomePage/BeersContainer.module.css'
import Card from '../common/Card'
export default function FavouritesContainer() {
  const { favouritesSet } = useContext(FavouritesContext)
  const formattedSet = [...favouritesSet].map((item) => {
    if (typeof item === 'string') return JSON.parse(item)
    else if (typeof item === 'object') return item
  })
  return (
    <div style={{ padding: 48 }}>
      <h1 style={{ marginBottom: 24 }}>Favourites</h1>
      <div className={styles.container}>
        {Array.from(formattedSet).map((beer, index) => (
          <Card key={index} beer={beer}></Card>
        ))}
      </div>
    </div>
  )
}
