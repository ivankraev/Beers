import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'
import { FavouritesContext } from '../../Contexts/FavouritesContext'
import styles from './Card.module.css'
import beerSound from '../../audio/openbeer.mp3'
export default function Card({ beer, setForceRender, forceRender }) {
  const [isLiked, setIsLiked] = useState(false)
  const { favouritesSet, setNotifications } = useContext(FavouritesContext)
  const location = useLocation()

  const likeHandler = (favbeer, command) => {
    //If page is refreshed, takes initial set from localstorage becouse favouritesSet will be empty
    const handler =
      localStorage.getItem('favBeers') !== null
        ? new Set(JSON.parse(localStorage.getItem('favBeers')))
        : favouritesSet

    //If we are on favourites page, user can only remove the beer
    command === 'like' && !location.pathname.endsWith('favourites')
      ? handler.add(JSON.stringify(favbeer))
      : command === 'dislike' && !location.pathname.endsWith('favourites')
      ? handler.delete(JSON.stringify(favbeer))
      : handler.delete(JSON.stringify(favbeer))

    localStorage.setItem('favBeers', JSON.stringify(Array.from(handler)))
    setIsLiked(!isLiked)
    //Force the page to rerender when beer is deleted
    setForceRender && setForceRender(!forceRender)

    setNotifications(true)
  }

  // Play open beer sound when clicked on bottle
  const start = () => {
    const openBeerSound = new Audio(beerSound)
    openBeerSound.play()
  }

  return (
    <div className={`card ${styles.cardholder}`}>
      <img
        onClick={start}
        className={`card-img-top ${styles.image}`}
        src={beer?.image_url}
        alt=""
      />
      <div className={`card-body ${styles.textholder}`}>
        {isLiked || location.pathname.endsWith('favourites') ? (
          <AiFillStar
            className={styles.staricon}
            onClick={() => {
              likeHandler(beer, 'dislike')
            }}
          />
        ) : (
          <AiOutlineStar
            className={styles.staricon}
            onClick={() => {
              likeHandler(beer, 'like')
            }}
          />
        )}
        <h5 className="card-title">{beer?.name}</h5>
        <p className="card-text">
          {beer?.description.length > 120
            ? beer?.description.substring(0, 120) + '...'
            : beer?.description}
        </p>
      </div>
    </div>
  )
}
