import { axios } from "../../utils/api-client";
import styles from "./Card.module.css";
import beerSound from "../../audio/openbeer.mp3";
import { useParams } from "react-router-dom";
import { endpoints } from "../../utils/api-endpoints";
import { useState, useEffect } from "react";
export default function PaymentPoster() {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getBeer = async () => {
      const response = await axios
        .get(endpoints.getSingleBeer(id))
        .catch((err) => console.log(err));
      setBeer(response.data[0]);
    };
    getBeer();
  }, []);

  // Play open beer sound when clicked on bottle
  const start = () => {
    const openBeerSound = new Audio(beerSound);
    openBeerSound.play();
  };

  return (
    <div className={`card ${styles.cardholder}`}>
      <img
        onClick={start}
        className={`card-img-top ${styles.image}`}
        src={beer?.image_url}
        alt=""
        style={{ height: 300, width: 200 }}
      />
      <div className={`card-body ${styles.textholder}`}>
        <h5 className="card-title">{beer?.name}</h5>
        <p className="card-text">{beer?.description}</p>
        <h5 className="card-title">Tips:</h5>
        <p className="card-text">{beer?.brewers_tips}</p>
      </div>
    </div>
  );
}
