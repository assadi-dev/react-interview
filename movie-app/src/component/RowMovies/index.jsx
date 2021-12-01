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
import { useSelector } from "react-redux";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

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

const RowMovie = () => {
  const movies = useSelector((state) => state.AllMoviesReducer);

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
          <NbElement name="nbElement" id="">
            <OptionElement value="4">4</OptionElement>
            <OptionElement value="8">8</OptionElement>
            <OptionElement value="12">12</OptionElement>
          </NbElement>
        </span>
        <span>
          {" "}
          <IconButton color="inherit" aria-label="Précédent">
            <ArrowBackIosRounded />
          </IconButton>{" "}
        </span>
        <span>
          {" "}
          <IconButton color="inherit" aria-label="Suivant">
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
              className={`filter-item ${movie.category}`}
            />
          ))}
        </Grid>
        <InfoMovie />
      </Stack>
    </Stack>
  );
};

export default RowMovie;
