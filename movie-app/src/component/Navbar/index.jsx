import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  padding: 1rem 2.5rem;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--gradient-bg);
  z-index: 100;
  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const LeftCol = styled.div`
  padding: 0.5rem;
  flex: 0.25%;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LeftCol>Movie APP</LeftCol>
    </NavContainer>
  );
};

export default Navbar;
