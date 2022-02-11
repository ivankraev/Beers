import SearchContextProvider from "../../Contexts/SearchContext";
import BeersContainer from "./BeersContainer";
import Layout from "../common/Layout";
import Searchbar from "./Searchbar";
export default function HomePage() {
  return (
    <Layout>
      <SearchContextProvider>
        <div style={{ padding: 48 }}>
          <Searchbar />
          <BeersContainer></BeersContainer>
        </div>
      </SearchContextProvider>
    </Layout>
  );
}
