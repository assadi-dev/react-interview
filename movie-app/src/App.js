import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import RowMovie from "./component/RowMovies";
import { useEffect, useState, useRef } from "react";
import { get_movieCategory, get_movies } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";
import Isotope from "isotope-layout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_movies());
  }, [dispatch]);

  const [filterKey, setFilterKey] = useState([]);
  const isotope = useRef();
  const store = useSelector((state) => state.AllMoviesReducer);

  const category = [
    ...new Set(
      store.map((m) => {
        return m.category;
      })
    ),
  ];

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  });

  useEffect(() => {
    !filterKey
      ? isotope.current.arrange({ filter: [] })
      : isotope.current.arrange({ filter: `${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => {
    let value = `.${key}`;
    if (filterKey.includes(value)) {
      return setFilterKey(filterKey.filter((v) => v !== value));
    }
    setFilterKey([...filterKey, value]);
  };

  return (
    <div className="App">
      <Navbar />
      <main id="wrapper">
        <Categories
          filterKey={filterKey}
          categories={category}
          filter={handleFilterKeyChange}
        />
        <RowMovie />
      </main>
    </div>
  );
}

export default App;
