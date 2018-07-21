import React, { Component } from "react";

import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import Toolbar from "../../components/Toolbar/Toolbar";
import * as ingredients from "../../components/PizzaBuilder/Ingredients";
import * as positions from "../../components/PizzaBuilder/IngredientPosition";
import styled from "styled-components";

const Container = styled.main`
  margin-top: 72px;
  text-align: center;
`;

class Pizza extends Component {
  state = {
    ings: [
      {
        name: "Mozerella",
        style: ingredients.Mozerella,
        position: positions.mozerella,
        selected: true
      },
      {
        name: "Olive",
        style: ingredients.Olive,
        position: positions.olive,
        selected: true
      },
      {
        name: "Mushroom",
        style: ingredients.Mushroom,
        position: positions.mushroom,
        selected: true
      },
      {
        name: "Pepperoni",
        style: ingredients.Pepperoni,
        position: positions.pepperoni,
        selected: true
      },
      {
        name: "Pepper",
        style: ingredients.PepperOne,
        position: positions.pepperOne,
        selected: true
      },
      {
        name: "Pepper",
        style: ingredients.PepperTwo,
        position: positions.pepperTwo,
        selected: true
      },
      {
        name: "Tomato",
        style: ingredients.Tomato,
        position: positions.tomato,
        selected: true
      }
    ]
  };

  changeSelectedHandler = name => {
    console.log(name);
  };

  render() {
    return (
      <Container>
        <Toolbar clicked={this.changeSelectedHandler} />
        <PizzaBuilder ingredients={this.state.ings} />
      </Container>
    );
  }
}

export default Pizza;
