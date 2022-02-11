import { useState } from 'react'
import styles from '../HomePage/BeersContainer.module.css'
import Card from '../common/Card'
export default function FavouritesContainer() {
  const [forceRender, setForceRender] = useState(false)

  const favBeers =
    localStorage.getItem('favBeers') === null
      ? []
      : JSON.parse(localStorage.getItem('favBeers')).map((beer) =>
          JSON.parse(beer),
        )

  return (
    <div style={{ padding: 48 }}>
      <h1 style={{ marginBottom: 24 }}>Favourites</h1>
      <div className={styles.container}>
        {favBeers.length > 0 ? (
          favBeers.map((beer, index) => (
            <Card
              key={index}
              beer={beer}
              setForceRender={setForceRender}
              forceRender={forceRender}
            ></Card>
          ))
        ) : (
          <h5>No beers</h5>
        )}
      </div>
    </div>
  )
}
