import SearchContextProvider from "../../Contexts/SearchContext";
import BeersContainer from "./BeersContainer";
import Searchbar from "./Searchbar";
export default function HomePage() {
  return (
    <SearchContextProvider>
      <div style={{ padding: 48, backgroundColor: "#fcfcfc" }}>
        <Searchbar />
        <BeersContainer></BeersContainer>
      </div>
    </SearchContextProvider>
  );
}
