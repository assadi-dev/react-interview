import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Item from "./Item";

const Container = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  display: flex;
  position: relative;
  top: 0;
  background: rgba(36, 36, 36, 0);
  border-bottom: 2px solid var(--color-text);
  z-index: 25;
  overflowy: hidden;
  @media screen and (max-width: 768px) {
    background: rgba(36, 36, 36, 0);
  }
`;

const Categories = () => {
  const store = useSelector((state) => state.AllMoviesReducer);

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
        <Item key={index} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
