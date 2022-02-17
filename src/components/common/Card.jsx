import Button from "react-bootstrap/Button";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  triggerNotifications,
  notificationsMessage,
} from "../../redux/notifications/notifications.actions";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favourites/favourites.actions";
import beerSound from "../../audio/openbeer.mp3";
import styles from "./Card.module.css";

function Card({ beer, add, remove, favs, notificationsOn, notificationsMsg }) {
  const isLiked = favs.find((favbeer) => favbeer.id === beer.id);

  const likeHandler = (favbeer, command) => {
    command === "like" ? add(favbeer) : remove(favbeer);
    notificationsOn();
    notificationsMsg(
      isLiked ? "Removed from favourites" : "Added to favourite"
    );
  };

  const Star = ({ beer }) => {
    return isLiked ? (
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
  notificationsOn: () => dispatch(triggerNotifications()),
  notificationsMsg: (message) => dispatch(notificationsMessage(message)),
});

const mapStateToProps = (state) => ({
  favs: state.favourites.favouritesSet,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
