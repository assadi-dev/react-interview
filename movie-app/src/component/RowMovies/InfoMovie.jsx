import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    display: none;
  }
`;

const InfoMovie = () => {
  return <Container></Container>;
};

export default InfoMovie;
