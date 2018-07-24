import React, { Component } from "react";
import styled from "styled-components";

import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import Toolbar from "../../components/Toolbar/Toolbar";
import * as ingredients from "../../components/PizzaBuilder/Ingredients";
import * as positions from "../../components/PizzaBuilder/IngredientPosition";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 10% 10% 20%;
  grid-auto-rows: 10% 20% 50% 20%;
  background-color: #edf6ff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-template-columns: 20% 30% 20% 10% 20%;
    grid-auto-rows: 10% 20% 35% 35%;
  }
`;

export const SectionOne = styled.div`
  grid-column: 1/6;
  grid-row: 1;
  border: 1px solid black;

  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 3/6;
    grid-row: 2;
  }
`;

export const SectionTwo = styled.div`
  grid-column: 1/6;
  grid-row: 2;
  border: 1px solid black;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 4/6;
    grid-row: 1/5;
  }
`;

export const SectionThree = styled.div`
  grid-column: 1/2;
  grid-row: 3;
  border: 1px solid black;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 1;
    grid-row: 1/5;
  }
`;

export const SectionFour = styled.div`
  grid-column: 2/6;
  grid-row: 3;
  border: 1px solid black;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 2/4;
    grid-row: 1/4;
  }
`;

export const SectionFive = styled.div`
  grid-column: 2/6;
  grid-row: 4;
  border: 1px solid black;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 2;
    grid-row: 4;
  }
`;

class Pizza extends Component {
  state = {
    ings: {
      Mozerella: {
        name: "Mozerella",
        style: ingredients.Mozerella,
        position: positions.mozerella,
        selected: true
      },
      Olive: {
        name: "Olive",
        style: ingredients.Olive,
        position: positions.olive,
        selected: false
      },
      Mushroom: {
        name: "Mushroom",
        style: ingredients.Mushroom,
        position: positions.mushroom,
        selected: true
      },
      Pepperoni: {
        name: "Pepperoni",
        style: ingredients.Pepperoni,
        position: positions.pepperoni,
        selected: true
      },
      Redpepper: {
        name: "Redpepper",
        style: ingredients.RedPepper,
        position: positions.redPepper,
        selected: true
      },
      Greenpepper: {
        name: "Greenpepper",
        style: ingredients.GreenPepper,
        position: positions.greenPepper,
        selected: true
      },
      Tomato: {
        name: "Tomato",
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
        <SectionOne col="3/5" row="2" color="white">
          <h1>heading</h1>
        </SectionOne>
        <SectionTwo col="4/6" row="1/4" color="grey">
          <h1>body</h1>
        </SectionTwo>
        <SectionThree col="1" row="1/4" color="#ffe487">
          <Toolbar
            clicked={this.changeSelectedHandler}
            ingredients={this.state.ings}
          />
        </SectionThree>
        <SectionFour col="2/4" row="1/4" color="#ffe487">
          <PizzaBuilder ingredients={this.state.ings} />
        </SectionFour>
        <SectionFive>
          <h1>order</h1>
        </SectionFive>
      </Container>
    );
  }
}

export default Pizza;
