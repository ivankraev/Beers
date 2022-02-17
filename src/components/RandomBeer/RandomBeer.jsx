import { useEffect, useState } from "react";
import { endpoints } from "../../utils/api-endpoints";
import { axios } from "../../utils/api-client";
import styles from "../HomePage/BeersContainer.module.css";
import Card from "../common/Card";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  useEffect(() => {
    const getRandomBeer = async () => {
      const response = await axios
        .get(endpoints.randomBeer)
        .catch((err) => console.log(err));
      setRandomBeer(response.data[0]);
    };
    getRandomBeer();
  }, []);

  return (
    <div style={{ padding: "24px 2%" }}>
      <h1 className={styles.favouritesHeader}>Your Beer:</h1>
      <div style={{ padding: "1% 3%" }}>
        {randomBeer ? <Card beer={randomBeer}></Card> : <span>Loading...</span>}
      </div>
    </div>
  );
}

export default RandomBeer;
