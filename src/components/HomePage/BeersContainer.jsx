import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setSearchedBeers } from "../../redux/search/search.actions";
import styles from "./BeersContainer.module.css";
import Card from "../common/Card";
import { fetchBeersStart } from "../../redux/fetch-all-beers/beers.actions";
function BeersContainer({
  searchBeers,
  currentSearch,
  setSearchedBeers,
  startFetching,
  beers,
}) {
  useEffect(() => {
    startFetching();
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
          : beers?.map((beer) => <Card key={beer.id} beer={beer}></Card>)}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSearchedBeers: (beers) => dispatch(setSearchedBeers(beers)),
  startFetching: () => dispatch(fetchBeersStart()),
});

const mapStateToProps = (state) => ({
  searchBeers: state.search.beers,
  currentSearch: state.search.search,
  beers: state.fetchBeers.beers,
});

export default connect(mapStateToProps, mapDispatchToProps)(BeersContainer);
