import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import RowMovie from "./component/RowMovies";
import { useEffect, useState } from "react";
import { get_dataMovie, get_movies } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { random_arrayIndex } from "./utils/utils";

const BackGroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-attachment: fixed;
  filter: blur(0px) opacity(0.15);
  z-index: -5;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  transition: all 0.4s ease;
  @media (max-width: 768px) {
    filter: opacity(0.1);
  }
`;

const FramerImage = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  transition: all 0.4s ease;
  top: -20px;
`;

function App() {
  const dispatch = useDispatch();

  const [backdrop, setBackdrop] = useState("");
  const store = useSelector((state) => state.AllMoviesReducer);
  const movieData = useSelector((state) => state.InfoMovieReducer);

  useEffect(() => {
    dispatch(get_movies());
    dispatch(get_dataMovie());
    if (movieData.length > 0) {
      let index = random_arrayIndex(movieData);
      setBackdrop(index.background);
    }
  }, [movieData, store, dispatch]);

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
      <FramerImage>
        <main id="wrapper">
          <Categories categories={category} />
          <RowMovie />
        </main>
        <BackGroundImage img={backdrop}></BackGroundImage>
      </FramerImage>
    </div>
  );
}

export default App;
