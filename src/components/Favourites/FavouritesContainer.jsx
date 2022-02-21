import styles from "../HomePage/BeersContainer.module.css";
import Card from "../common/Card";
import { useSelector } from "react-redux";

function FavouritesContainer() {
  const favourites = useSelector((state) => state.favourites.favouritesSet);
  return (
    <div style={{ padding: "24px 2%" }}>
      <div className={styles.header}></div>
      <h1 className={styles.favouritesHeader}>Favourites</h1>
      <div className={styles.container}>
        {favourites.length > 0 ? (
          favourites.map((beer, index) => <Card key={index} beer={beer}></Card>)
        ) : (
          <span>No beers...</span>
        )}
      </div>
    </div>
  );
}

export default FavouritesContainer;
