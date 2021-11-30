import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import RowMovie from "./component/RowMovies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main id="wrapper">
        <Categories />
        <RowMovie />
      </main>
    </div>
  );
}

export default App;
