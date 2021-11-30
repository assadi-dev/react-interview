import React from "react";
import { Stack } from "@mui/material";
import CardMovie from "../CardMovie";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 70%;
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const RowMovie = () => {
  return (
    <Stack>
      <Stack direction="row" sx={{ w: "100%" }} justifyContent="flex-end">
        <span>nb per page :4</span>
        <span> prev </span>
        <span> suiv </span>
      </Stack>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Grid>
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </Grid>
      </Stack>
    </Stack>
  );
};

export default RowMovie;
