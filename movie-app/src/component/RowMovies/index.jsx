import React, { useEffect, useState } from "react";
import {
  Stack,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CardMovie from "../CardMovie";
import styled from "styled-components";
import InfoMovie from "./InfoMovie";
import { useSelector, useDispatch } from "react-redux";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { edit_elements_pages } from "../../redux/ElementsPageAction";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  width: 100%;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const NbElement = styled.select`
  width: 75px;
  padding: 1rem;
  background: rgba(36, 35, 36, 0);
  border: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const OptionElement = styled.option`
  color: #444;
`;

const RowMovie = ({ filter }) => {
  const movieState = useSelector((state) => state.AllMoviesReducer);
  const dispatch = useDispatch();
  const [nbOfItems, setNbOfItems] = useState(4);

  const [movies, setMovies] = useState([]);
  const [page, setPages] = useState({
    start: 0,
    end: nbOfItems,
  });

  const handleSelectNbElement = (e) => {
    let value = parseInt(e.target.value);
    setNbOfItems(value);
    dispatch(edit_elements_pages(value));
    setPages({ ...page, start: 0, end: value });
  };

  useEffect(() => {
    setMovies(movieState.slice(page.start, page.end));
  }, [nbOfItems, movieState, page]);

  const nextPage = () => {
    let first = parseInt(nbOfItems);
    let start = 0;
    if (first === 0) {
      start = first;
    } else {
      start = page.end;
    }
    let end = start + nbOfItems;
    setPages({ ...page, start, end });
  };

  const prevPage = () => {
    let first = parseInt(nbOfItems);
    let start = 0;

    if (first === 0) {
      start = first;
    } else {
      start = page.start - first;
    }
    let end = page.start;
    setPages({ ...page, start, end });
  };

  return (
    <Stack>
      <Stack
        direction="row"
        sx={{ w: "100%", my: "1.5rem", px: "1rem" }}
        justifyContent={{ xs: "flex-end", sm: "flex-start" }}
        alignItems="center"
      >
        <span> Elements par pages : </span>
        <span>
          <NbElement
            onChange={handleSelectNbElement}
            value={nbOfItems}
            name="nbElement"
            id=""
          >
            <OptionElement value={4}>4</OptionElement>
            <OptionElement value={8}>8</OptionElement>
            <OptionElement value={12}>12</OptionElement>
          </NbElement>
        </span>
        <span>
          {" "}
          <IconButton
            disabled={page.start <= 0 ? true : false}
            color="inherit"
            aria-label="Précédent"
            onClick={prevPage}
          >
            <ArrowBackIosRounded />
          </IconButton>{" "}
        </span>
        <span>
          {" "}
          <IconButton
            disabled={page.end <= movieState.length ? false : true}
            color="inherit"
            aria-label="Suivant"
            onClick={nextPage}
          >
            <ArrowForwardIosRounded />
          </IconButton>{" "}
        </span>
      </Stack>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Grid className="filter-container">
          {movies.map((movie, index) => (
            <CardMovie
              key={index}
              id={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
              filter={filter}
            />
          ))}
        </Grid>
        <InfoMovie />
      </Stack>
    </Stack>
  );
};

export default RowMovie;
