import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "./Item";

const Container = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  display: flex;
  position: sticky;
  top: 0;
  background: rgba(36, 36, 36, 1);
  z-index: 25;
  overflowy: hidden;
`;

const Categories = ({ filter, filterKey }) => {
  const store = useSelector((state) => state.AllMoviesReducer);

  const selected = (category) => {
    filter(category);
  };

  const category = [
    ...new Set(
      store.map((m) => {
        return m.category;
      })
    ),
  ];
  return (
    <Container>
      {category.map((category, index) => (
        <Item
          key={index}
          category={category}
          filterKey={filterKey}
          action={selected}
        />
      ))}
    </Container>
  );
};

export default Categories;
