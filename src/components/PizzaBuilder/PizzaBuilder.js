import React from "react";
import styled from "styled-components";

import { GridWrapper } from "./GridItems";
import * as ingredients from "./PizzaIngredients";

const PizzaContainer = styled.div`
  width: 250px;
  height: 250px;
  margin: 100px auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 450px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 500px;
    height: 500px;
  }
`;

const PizzaBuilder = () => (
  <PizzaContainer>
    <GridWrapper>
      {ingredients.mushroom}
      {ingredients.tomato}
      {ingredients.pepper}
      {ingredients.olive}
      {ingredients.pepperoni}
      {ingredients.mozerella}
    </GridWrapper>
  </PizzaContainer>
);

export default PizzaBuilder;
