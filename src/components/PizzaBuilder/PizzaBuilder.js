import React, { Component } from "react";
import styled from "styled-components";

import { GridWrapper, GridItem } from "./GridItems";
import * as positions from "./IngredientPosition";
import * as styles from "./Ingredients";
import * as utils from "../../utils";

const PizzaContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 20% auto;
  text-align: center;
  font-weight: bold;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 600px) and (min-height: 500px) {
    width: 400px;
    height: 400px;
    margin: 20% 0;
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
    const finalIngs = Object.keys(this.props.ings).map(ing => {
      if (this.props.ings[ing] === 1) {
        return mapping(positions[ing], styles[utils.capitalize(ing)]);
      }
      return null;
    });

    return (
      <PizzaContainer>
        <GridWrapper>{finalIngs}</GridWrapper>
      </PizzaContainer>
    );
  }
}

export default PizzaBuilder;
