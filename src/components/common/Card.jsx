import Button from "react-bootstrap/Button";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import beerSound from "../../audio/openbeer.mp3";
import styles from "./Card.module.css";

function Card({ beer, add, remove, favs }) {
  const isLiked = favs.find((favbeer) => favbeer.id === beer.id);

  const likeHandler = (command) => {
    command === "like" ? add(beer) : remove(beer);
  };

  const Star = () => {
    return isLiked ? (
      <AiFillStar
        size={25}
        className={styles.staricon}
        onClick={() => {
          likeHandler("dislike");
        }}
      />
    ) : (
      <AiOutlineStar
        size={25}
        className={styles.staricon}
        onClick={() => {
          likeHandler("like");
        }}
      />
    );
  };

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
        <Star beer={beer} />
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
  add: (beer) => dispatch(addToFavourites(beer)),
  remove: (beer) => dispatch(removeFromFavourites(beer)),
});

const mapStateToProps = (state) => ({
  favs: state.favourites.favouritesSet,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
