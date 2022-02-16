import { useEffect, useState } from "react";
import { endpoints } from "../../utils/api-endpoints";
import { axios } from "../../utils/api-client";
import Card from "../common/Card";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState();
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
    <div style={{ padding: "5%" }}>
      <h1 style={{ marginBottom: 24 }}>Your Beer:</h1>
      {randomBeer ? <Card beer={randomBeer}></Card> : <p>Loading...</p>}
    </div>
  );
}

export default RandomBeer;
