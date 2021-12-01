import styled from "styled-components";
import { useState, useEffect } from "react";

const ItemContainer = styled.span`
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  background: ${(props) => props.selected && "rgba(50,50,50,0.8)"};
  border-radius: 50px;
  @media screen and (max-width: 768px) {
    margin: 0.2rem;
    font-size: 0.8rem;
  }
`;

const Item = ({ category, action, filterKey }) => {
  const [toggle, setTogle] = useState(false);

  useEffect(() => {
    if (filterKey.includes(`.${category}`)) {
      setTogle(true);
    } else {
      setTogle(false);
    }
  }, [toggle, filterKey, category]);

  const selected = () => {
    action(category);
  };

  return (
    <ItemContainer onClick={selected} selected={toggle}>
      {category}
    </ItemContainer>
  );
};

export default Item;
