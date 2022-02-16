import BeersContainer from "./BeersContainer";
import Searchbar from "./Searchbar";
export default function HomePage() {
  return (
    <div style={{ padding: "24px 2%", backgroundColor: "#fcfcfc" }}>
      <Searchbar />
      <BeersContainer />
    </div>
  );
}
