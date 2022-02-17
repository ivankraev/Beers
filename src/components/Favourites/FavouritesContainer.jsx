import styles from "../HomePage/BeersContainer.module.css";
import Card from "../common/Card";
import { removeFromFavourites } from "../../redux/favourites/favourites.actions";
import { connect } from "react-redux";
function FavouritesContainer({ favourites }) {
  return (
    <div style={{ padding: "24px 2%" }}>
      <div className={styles.header}>
        <h2>Favourites</h2>
      </div>
      <div className={styles.container}>
        {favourites.length > 0 ? (
          favourites.map((beer, index) => <Card key={index} beer={beer}></Card>)
        ) : (
          <h5>No beers</h5>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favourites: state.favourites.favouritesSet,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourites: (beer) => dispatch(removeFromFavourites(beer)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritesContainer);
