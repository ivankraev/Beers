import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useContext } from 'react'
import { FavouritesContext } from '../../Contexts/FavouritesContext'
import { useLocation } from 'react-router-dom'
import styles from './Card.module.css'
import beerSound from '../../audio/openbeer.mp3'
export default function Card({ beer, setForceRender, forceRender }) {
  const [isLiked, setIsLiked] = useState(false)
  const { favouritesSet } = useContext(FavouritesContext)
  const location = useLocation()

  const likeHandler = (favbeer, command) => {
    command === 'like' && !location.pathname.endsWith('favourites')
      ? favouritesSet.add(JSON.stringify(favbeer))
      : command === 'dislike' && !location.pathname.endsWith('favourites')
      ? favouritesSet.delete(JSON.stringify(favbeer))
      : favouritesSet.delete(JSON.stringify(favbeer))
    setIsLiked(!isLiked)
    setForceRender(!forceRender)
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
        src={beer.image_url}
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
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">
          {beer.description.length > 120
            ? beer.description.substring(0, 120) + '...'
            : beer.description}
        </p>
      </div>
    </div>
  )
}
