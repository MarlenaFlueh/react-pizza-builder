import React, { Component } from "react";
import styled from "styled-components";

import { GridWrapper, GridItem } from "./GridItems";

const PizzaContainer = styled.div`
  width: 250px;
  height: 250px;
  margin: 10% 10%;
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

const mapping = (array, Component) =>
  array.map((item, index) => (
    <GridItem key={index} col={item.col} row={item.row}>
      <Component />
    </GridItem>
  ));

class PizzaBuilder extends Component {
  render() {
    let ingredientsArray = [];
    for (let key in this.props.ingredients) {
      ingredientsArray.push({ id: key, config: this.props.ingredients[key] });
    }

    const ingredients = ingredientsArray.map(
      ing =>
        ing.config.selected
          ? mapping(ing.config.position, ing.config.style)
          : null
    );

    return (
      <PizzaContainer>
        <GridWrapper>{ingredients}</GridWrapper>
      </PizzaContainer>
    );
  }
}
export default PizzaBuilder;
