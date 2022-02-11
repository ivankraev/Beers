import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useContext } from 'react'
import { FavouritesContext } from '../../Contexts/FavouritesContext'
import styles from './Card.module.css'
import { useLocation } from 'react-router-dom'
import beerSound from '../../audio/openbeer.mp3'
export default function Card({ beer }) {
  const [isLiked, setIsLiked] = useState(false)
  const { favouritesSet } = useContext(FavouritesContext)
  let location = useLocation()
  const likeHandler = (favbeer, command) => {
    if (command === 'like') {
      favouritesSet.add(JSON.stringify(favbeer))
    } else {
      favouritesSet.delete(JSON.stringify(favbeer))
    }
    setIsLiked(!isLiked)
    console.log(favouritesSet)
  }

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
        {isLiked ? (
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
            ? beer.description.substring(0, 120) + ' ...'
            : beer.description}
        </p>
      </div>
    </div>
  )
}
