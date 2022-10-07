import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modals from "./components/Modals";
import Search from "./components/Search";

function App() {
  

  return (
    <div className="App">
        <main className="container">
          <div className="row">
            <div className="col-8">
            { /*  <Search /> */ }
            { /*  <Favorites /> */ }
            <Meals />
            { /* <Modals /> */ }
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
