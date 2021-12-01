import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import CardMovie from "../CardMovie";
import styled from "styled-components";
import InfoMovie from "./InfoMovie";
import { useSelector } from "react-redux";

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

const RowMovie = () => {
  const movies = useSelector((state) => state.AllMoviesReducer);

  return (
    <Stack>
      <Stack direction="row" sx={{ w: "100%" }} justifyContent="flex-end">
        <span>nb per page :4</span>
        <span> prev </span>
        <span> suiv </span>
      </Stack>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Grid className="filter-container">
          {movies.map((movie, index) => (
            <CardMovie
              key={index}
              id={movie.id}
              title={movie.title}
              category={movie.category}
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
