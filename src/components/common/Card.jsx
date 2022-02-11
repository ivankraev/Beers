import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useContext } from "react";
import { FavouritesContext } from "../../Contexts/FavouritesContext";
import styles from "./Card.module.css";
import beerSound from "../../audio/openbeer.mp3";
export default function Card({ beer }) {
  const [isLiked, setIsLiked] = useState(false);
  const { setFavourites, favourites } = useContext(FavouritesContext);

  const likeHandler = (favbeer, command) => {
    setIsLiked(!isLiked);
    command === "like"
      ? setFavourites([...favourites, favbeer])
      : setFavourites(favourites.filter((beer) => beer.id !== favbeer.id));
  };

  const start = () => {
    const openBeerSound = new Audio(beerSound);
    openBeerSound.play();
  };

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
              likeHandler(beer, "dislike");
            }}
          />
        ) : (
          <AiOutlineStar
            className={styles.staricon}
            onClick={() => {
              likeHandler(beer, "like");
            }}
          />
        )}
        <h5 className="card-title">{beer.name}</h5>
        <p className={`card-text ${styles.cardtext}`}>{beer.description}</p>
      </div>
    </div>
  );
}
