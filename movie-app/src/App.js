import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import RowMovie from "./component/RowMovies";
import { useEffect, useState, useRef } from "react";
import { get_dataMovie, get_movies } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_movies());
    dispatch(get_dataMovie());
  }, [dispatch]);

  const store = useSelector((state) => state.AllMoviesReducer);

  const category = [
    ...new Set(
      store.map((m) => {
        return m.category;
      })
    ),
  ];

  return (
    <div className="App">
      <Navbar />
      <main id="wrapper">
        <Categories categories={category} />
        <RowMovie />
      </main>
    </div>
  );
}

export default App;
