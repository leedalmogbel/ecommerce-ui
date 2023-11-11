/* eslint-disable react/jsx-key */
import styled from "styled-components"
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  console.log(categories)
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories