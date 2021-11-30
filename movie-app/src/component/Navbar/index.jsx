import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 1.5rem 2.5rem;
  display: flex;
  background: transparent;
`;

const LeftCol = styled.div`
  padding: 1rem;
  flex: 0.25%;
  background: grey;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LeftCol>Movie APP</LeftCol>
    </NavContainer>
  );
};

export default Navbar;
