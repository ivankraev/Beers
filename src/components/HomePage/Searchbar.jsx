import styles from "./Search.module.css";
import { useContext } from "react";
import { connect } from "react-redux";
import { SearchContext } from "../../Contexts/SearchContext";
import { axios } from "../../utils/api-client";
import { endpoints } from "../../utils/api-endpoints";
import { setSearchField } from "../../redux/search/search.actions";
function Searchbar({ setSearchField, currentSearch }) {
  const { setSearchedBeers } = useContext(SearchContext);

  const searchHandler = async () => {
    if (currentSearch === "") return;
    const response = await axios
      .get(endpoints.search(currentSearch))
      .catch((err) => console.log(err));
    response.data.length === 0 && alert("Sorry, nothing found");
    setSearchedBeers(response.data);
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
            setSearchField(e.target.value);
          }}
        />
        <button
          onClick={searchHandler}
          type="button"
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentSearch: state.search.search,
});
const mapDispatchToProps = (dispatch) => ({
  setSearchField: (search) => dispatch(setSearchField(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
