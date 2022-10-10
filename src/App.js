import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modals from "./components/Modals";
import Search from "./components/Search";
import { useGlobalContext } from "./context";

function App() {
  const { showModal } = useGlobalContext();

  return (
    <div className="App">
        <main className="container-fluid">
            <Search />
            { /*  <Favorites /> */ }
            <Meals />
            { showModal && <Modals /> }
        </main>
    </div>
  );
}

export default App;
