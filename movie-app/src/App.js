import Navbar from "./component/Navbar";
import Categories from "./component/Categories";
import RowMovie from "./component/RowMovies";
import { useEffect, useState } from "react";
import { get_dataMovie, get_movies } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

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
  @media (max-width: 768px) {
    filter: opacity(0.1);
  }
`;

const FramerImage = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  top: -20px;
`;

function App() {
  const dispatch = useDispatch();

  const [backdrop, setBackdrop] = useState(
    "https://www.themoviedb.org/t/p/w1280/scQf03Fm3jeyv4FH04qvi4fp4wh.jpg"
  );

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
