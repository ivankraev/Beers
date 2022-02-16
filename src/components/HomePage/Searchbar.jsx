import styles from "./Search.module.css";
import { connect } from "react-redux";
import { axios } from "../../utils/api-client";
import { endpoints } from "../../utils/api-endpoints";
import {
  setSearchField,
  setSearchedBeers,
} from "../../redux/search/search.actions";
import { useState } from "react";

function Searchbar({ setSearchField, setSearchedBeers }) {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = async () => {
    if (searchValue === "") return;
    const response = await axios
      .get(endpoints.search(searchValue))
      .catch((err) => console.log(err));
    response.data.length === 0
      ? alert("Sorry, nothing found")
      : setSearchedBeers(response.data);
  };

  return (
    <div className={styles.searchholder}>
      <div className="input-group" style={{ width: "50%" }}>
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search for beer..."
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            searchHandler();
            setSearchField(searchValue);
          }}
          type="button"
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSearchField: (search) => dispatch(setSearchField(search)),
  setSearchedBeers: (beers) => dispatch(setSearchedBeers(beers)),
});

export default connect(null, mapDispatchToProps)(Searchbar);
