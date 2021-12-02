import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_categories, delete_categories } from "../../redux/CategorieAction";

const ItemContainer = styled.span`
  margin: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  border: 2px solid var(--color-blog);
  background: ${(props) =>
    props.selected ? "var(--color-text)" : "var(--gradient-bg)"};
  border-radius: 25px;
  box-shadow: 0px 0px 8px 0px var(--color-blog);
  color: ${(props) =>
    props.selected ? "var(--color-bg)" : "var(--color-text)"};
  transition: all 0.4s ease;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    margin: 1rem 0.2rem;
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

const Item = ({ category }) => {
  const [toggle, setTogle] = useState(false);

  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.CategoriesReducer);

  useEffect(() => {
    if (categoryState.includes(category)) {
      setTogle(true);
    } else {
      setTogle(false);
    }
  }, [toggle, category, categoryState]);

  const selected = () => {
    if (categoryState.includes(category)) {
      return dispatch(delete_categories(category));
    }
    dispatch(add_categories(category));
  };

  return (
    <ItemContainer onClick={selected} selected={toggle}>
      {category}
    </ItemContainer>
  );
};

export default Item;
