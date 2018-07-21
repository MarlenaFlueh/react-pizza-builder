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
    ings: {
      Mozerella: {
        style: ingredients.Mozerella,
        position: positions.mozerella,
        selected: true
      },
      Olive: {
        style: ingredients.Olive,
        position: positions.olive,
        selected: true
      },
      Mushroom: {
        style: ingredients.Mushroom,
        position: positions.mushroom,
        selected: true
      },
      Pepperoni: {
        style: ingredients.Pepperoni,
        position: positions.pepperoni,
        selected: true
      },
      PepperOne: {
        style: ingredients.PepperOne,
        position: positions.pepperOne,
        selected: true
      },
      PepperTwo: {
        style: ingredients.PepperTwo,
        position: positions.pepperTwo,
        selected: true
      },
      Tomato: {
        style: ingredients.Tomato,
        position: positions.tomato,
        selected: true
      }
    },
    test: 1
  };

  changeSelectedHandler = name => {
    let updatedObj = {
      ...this.state.ings[name],
      selected: !this.state.ings[name].selected
    };
    let updateState = { ...this.state.ings, [name]: updatedObj };
    this.setState({ ings: updateState });
  };

  render() {
    return (
      <Container>
        <Toolbar
          clicked={this.changeSelectedHandler}
          ingredients={this.state.ings}
        />
        <PizzaBuilder ingredients={this.state.ings} />
      </Container>
    );
  }
}

export default Pizza;
