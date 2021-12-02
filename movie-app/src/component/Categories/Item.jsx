import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_categories, delete_categories } from "../../redux/CategorieAction";

const ItemContainer = styled.span`
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;

  background: ${(props) => props.selected && "rgba(36,36,36,0.8)"};
  border-radius: 50px;
  @media screen and (max-width: 768px) {
    margin: 0.2rem;
    font-size: 0.8rem;
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
