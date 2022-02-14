import Button from "react-bootstrap/Button";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../Contexts/FavouritesContext";
import beerSound from "../../audio/openbeer.mp3";
import styles from "./Card.module.css";
export default function Card({ beer, setForceRender, forceRender }) {
  const { favouritesSet, setNotifications, setNotificationMessage } =
    useContext(FavouritesContext);
  const location = useLocation();
  const favBeers = localStorage.getItem("favBeers") !== null;

  //Checks if the beer is already liked to find out which star will be used.
  const isLiked =
    favBeers &&
    JSON.parse(localStorage.getItem("favBeers"))
      .map((beer) => JSON.parse(beer))
      .find((favbeer) => favbeer.id === beer.id);

  const likeHandler = (favbeer, command) => {
    //If page is refreshed, takes initial set from localstorage becouse favouritesSet will be empty
    const handler = favBeers
      ? new Set(JSON.parse(localStorage.getItem("favBeers")))
      : favouritesSet;

    //If we are on favourites page, user can only remove the beer
    command === "like" && !location.pathname.endsWith("favourites")
      ? handler.add(JSON.stringify(favbeer))
      : command === "dislike" && !location.pathname.endsWith("favourites")
      ? handler.delete(JSON.stringify(favbeer))
      : handler.delete(JSON.stringify(favbeer));

    localStorage.setItem("favBeers", JSON.stringify(Array.from(handler)));

    //Force the page to rerender when beer is deleted
    setForceRender && setForceRender(!forceRender);
    setNotificationMessage(
      isLiked ? "Removed from favourites" : "Added to favourite"
    );
    setNotifications(true);
  };

  // Play open beer sound when clicked on bottle
  const start = () => {
    const openBeerSound = new Audio(beerSound);
    openBeerSound.play();
  };

  return (
    <div className={`card ${styles.cardholder} shadow`}>
      <img
        onClick={start}
        className={`card-img-top ${styles.image}`}
        src={beer?.image_url}
        alt=""
      />
      <div className={`card-body ${styles.textholder}`}>
        {isLiked || location.pathname.endsWith("favourites") ? (
          <AiFillStar
            size={25}
            className={styles.staricon}
            onClick={() => {
              likeHandler(beer, "dislike");
            }}
          />
        ) : (
          <AiOutlineStar
            size={25}
            className={styles.staricon}
            onClick={() => {
              likeHandler(beer, "like");
            }}
          />
        )}
        <h5 className="card-title">{beer?.name}</h5>
        <p className="card-text">
          {beer?.description.length > 120
            ? beer?.description.substring(0, 120) + "..."
            : beer?.description}
        </p>
        <Link to={`/get/${beer?.id}`}>
          <Button variant="secondary" size="sm">
            get this nft
          </Button>
        </Link>
      </div>
    </div>
  );
}
