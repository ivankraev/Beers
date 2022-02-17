import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { endpoints } from "../../utils/api-endpoints";
import { axios } from "../../utils/api-client";
import { setSearchedBeers } from "../../redux/search/search.actions";
import styles from "./BeersContainer.module.css";
import Card from "../common/Card";
function BeersContainer({ searchBeers, currentSearch, setSearchedBeers }) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getAllBeers = async () => {
      const response = await axios
        .get(endpoints.beersList)
        .catch((err) => console.log(err));
      setBeers(response.data);
    };
    getAllBeers();
  }, []);

  const navigation = () => {
    return (
      <>
        <Button
          className={styles.bckbtn}
          onClick={() => {
            setSearchedBeers([]);
          }}
        >
          Back
        </Button>
        <h4 style={{ textAlign: "center" }}>
          Search results for: "{currentSearch}"
        </h4>
      </>
    );
  };

  return (
    <>
      {searchBeers.length > 0 && navigation()}
      <br />
      <div className={styles.container}>
        {searchBeers.length > 0
          ? searchBeers.map((beer) => <Card key={beer.id} beer={beer}></Card>)
          : beers.map((beer) => <Card key={beer.id} beer={beer}></Card>)}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSearchedBeers: (beers) => dispatch(setSearchedBeers(beers)),
});

const mapStateToProps = (state) => ({
  searchBeers: state.search.beers,
  currentSearch: state.search.search,
});

export default connect(mapStateToProps, mapDispatchToProps)(BeersContainer);
