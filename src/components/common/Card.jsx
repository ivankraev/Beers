import Button from "react-bootstrap/Button";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import beerSound from "../../audio/openbeer.mp3";
import styles from "./Card.module.css";

const start = () => {
  const openBeerSound = new Audio(beerSound);
  openBeerSound.play();
};

function Card({ beer }) {
  const favs = useSelector((state) => state.favourites.favouritesSet);
  const isLiked = favs.find((favbeer) => favbeer.id === beer.id);
  const dispatch = useDispatch();

  const Star = ({ beer }) => {
    return isLiked ? (
      <AiFillStar
        size={25}
        className={styles.staricon}
        onClick={() => {
          dispatch(removeFromFavourites(beer));
        }}
      />
    ) : (
      <AiOutlineStar
        size={25}
        className={styles.staricon}
        onClick={() => {
          dispatch(addToFavourites(beer));
        }}
      />
    );
  };

  return (
    <div className={`card ${styles.cardholder} shadow`}>
      <img
        onClick={start}
        className={`card-img-top ${styles.image}`}
        src={beer?.image_url}
        alt=""
      />
      <div className={styles.textholder}>
        <Star beer={beer} />
        <h5 className="card-title">{beer?.name}</h5>
        <p>
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

export default Card;
