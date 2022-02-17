import Button from "react-bootstrap/Button";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../Contexts/FavouritesContext";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import beerSound from "../../audio/openbeer.mp3";
import styles from "./Card.module.css";
function Card({ beer, addToFavourites, removeFromFavourites, favs }) {
  const { setNotifications, setNotificationMessage } =
    useContext(FavouritesContext);
  const location = useLocation();
  //Checks if the beer is already liked to find out which star will be used.
  const isLiked = favs.find((favbeer) => favbeer.id === beer.id);

  const likeHandler = (favbeer, command) => {
    //If we are on favourites page, user can only remove the beer
    command === "like" && !location.pathname.endsWith("favourites")
      ? addToFavourites(favbeer)
      : command === "dislike" && !location.pathname.endsWith("favourites")
      ? removeFromFavourites(favbeer)
      : //If we are on favourites page we can only remove items
        removeFromFavourites(favbeer);

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

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (beer) => dispatch(addToFavourites(beer)),
  removeFromFavourites: (beer) => dispatch(removeFromFavourites(beer)),
});

const mapStateToProps = (state) => ({
  favs: state.favourites.favouritesSet,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
