import React, { useEffect, useState } from "react";
import { Stack, IconButton, Input, Box } from "@mui/material";
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
  background: transparent;
  border: none;
  color: var(--color-text);
  outline-color: var(--color-text);
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 60px;
    padding: 0.5rem;
    background: rgba(36, 36, 35, 0);
  }
`;

const OptionElement = styled.option`
  color: #444;
`;

const LabelSelectElemnt = styled.label`
  font-size: 1rem;
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

const RowMovie = () => {
  const movieState = useSelector((state) => state.AllMoviesReducer);
  const selectedCategory = useSelector((state) => state.CategoriesReducer);
  const dispatch = useDispatch();
  const [nbOfItems, setNbOfItems] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState({
    start: 0,
    end: nbOfItems,
    sizeItems: movieState.length,
  });

  const handleSelectNbElement = (e) => {
    let value = parseInt(e.target.value);
    setNbOfItems(value);
    dispatch(edit_elements_pages(value));
    setPage({ ...page, start: 0, end: value });
  };

  const checkSelected = () => {
    let array = [];
    if (selectedCategory.length <= 0) {
      return setMovies(movieState.slice(page.start, page.end));
    }

    for (let selected in selectedCategory) {
      let temp = movieState.filter((m) =>
        m.category
          .toLowerCase()
          .includes(selectedCategory[selected].toLowerCase())
      );
      array = array.concat(temp);
    }

    setMovies(array.slice(page.start, page.end));
  };

  const maxItems = () => {
    if (selectedCategory.length <= 0) {
      return setPage({ ...page, sizeItems: movieState.length });
    }
    setPage({ ...page, sizeItems: movies.length });
  };

  const nextPage = () => {
    let first = parseInt(nbOfItems);
    let start = 0;
    if (first === 0) {
      start = first;
    } else {
      start = page.end;
    }
    let end = start + nbOfItems;
    setPage({ ...page, start, end });
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
    setPage({ ...page, start, end });
  };

  const searchTitle = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    maxItems();
    checkSelected();
  }, [
    movieState,
    selectedCategory,
    nbOfItems,
    page.start,
    page.end,
    page.sizeItems,
    searchTerm,
  ]);

  return (
    <Stack>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        sx={{ w: "100%", my: "1.5rem", px: { xs: "0.5rem", sm: "1rem" } }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems="center"
      >
        <div>
          <LabelSelectElemnt htmlFor="nbElement">
            {" "}
            Elements par pages :
          </LabelSelectElemnt>{" "}
          <span>
            <NbElement
              onChange={handleSelectNbElement}
              value={nbOfItems}
              name="nbElement"
              id="nbElement"
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
              disabled={page.end <= page.sizeItems ? false : true}
              color="inherit"
              aria-label="Suivant"
              onClick={nextPage}
            >
              <ArrowForwardIosRounded />
            </IconButton>{" "}
          </span>
        </div>

        <Box
          component="div"
          sx={{
            "& > :not(style)": { m: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            sx={{ color: "inherit" }}
            placeholder="Rechercher un titre"
            inputProps={{ "aria-label": "search movie by title" }}
            onChange={searchTitle}
          />
        </Box>
      </Stack>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Grid className="filter-container">
          {movies
            .filter((m) =>
              m.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((movie, index) => (
              <CardMovie
                key={index}
                id={movie.id}
                title={movie.title}
                category={movie.category}
                likes={movie.likes}
                dislikes={movie.dislikes}
              />
            ))}
        </Grid>
        <InfoMovie />
      </Stack>
    </Stack>
  );
};

export default RowMovie;
