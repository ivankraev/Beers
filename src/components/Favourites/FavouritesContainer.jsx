import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import styles from "../HomePage/BeersContainer.module.css";
import Card from "../common/Card";
export default function FavouritesContainer() {
  const [forceRender, setForceRender] = useState(false);

  const favBeers =
    localStorage.getItem("favBeers") === null
      ? []
      : JSON.parse(localStorage.getItem("favBeers")).map((beer) =>
          JSON.parse(beer)
        );

  return (
    <div style={{ padding: "24px 2%" }}>
      <div className={styles.header}>
        <h2>Favourites</h2>
      </div>
      <div className={styles.container}>
        {favBeers.length > 0 ? (
          favBeers.map((beer, index) => (
            <Card
              key={index}
              beer={beer}
              setForceRender={setForceRender}
              forceRender={forceRender}
            ></Card>
          ))
        ) : (
          <h5>No beers</h5>
        )}
      </div>
    </div>
  );
}
