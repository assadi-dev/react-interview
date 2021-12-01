import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import RowMovie from "./component/RowMovies";
import { useEffect, useState, useRef } from "react";
import { get_movieCategory, get_movies } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_movies());
  }, [dispatch]);

  const [filterKey, setFilterKey] = useState([]);

  const store = useSelector((state) => state.AllMoviesReducer);

  const category = [
    ...new Set(
      store.map((m) => {
        return m.category;
      })
    ),
  ];

  const handleFilterKeyChange = (key) => {
    let value = `.${key}`;
    if (filterKey.includes(value)) {
      return setFilterKey(filterKey.filter((v) => v !== value));
    } else if (category.includes(key)) {
      return setFilterKey([...filterKey, value]);
    } else {
      return setFilterKey([]);
    }
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
        <RowMovie filter={handleFilterKeyChange} />
      </main>
    </div>
  );
}

export default App;
