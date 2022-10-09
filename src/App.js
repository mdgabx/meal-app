import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modals from "./components/Modals";
import Search from "./components/Search";

function App() {
  

  return (
    <div className="App">
        <main className="container-fluid">
              <Search />
            { /*  <Favorites /> */ }
            <Meals />
            { /* <Modals /> */ }
        </main>
    </div>
  );
}

export default App;
