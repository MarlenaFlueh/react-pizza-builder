import React, { Component } from "react";
import styled from "styled-components";

import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import Toolbar from "../../components/Toolbar/Toolbar";
import * as ingredients from "../../components/PizzaBuilder/Ingredients";
import * as positions from "../../components/PizzaBuilder/IngredientPosition";
import Heading from "../../components/Heading/Heading";
import * as PizzaGrid from "./PizzaGrid";
import OrderOverview from "../../components/OrderOverview/OrderOverview";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 10% 10% 20%;
  grid-auto-rows: 10% 20% 40% 30%;
  background-color: #ffe487;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-template-columns: 20% 20% 10% 10% 40%;
    grid-auto-rows: 10% 20% 30% 40%;
  }
`;

class Pizza extends Component {
  state = {
    ings: {
      Mozerella: {
        name: "Mozerella",
        style: ingredients.Mozerella,
        position: positions.mozerella,
        selected: true,
        price: 1.2
      },
      Olive: {
        name: "Olive",
        style: ingredients.Olive,
        position: positions.olive,
        selected: true,
        price: 1.0
      },
      Mushroom: {
        name: "Mushroom",
        style: ingredients.Mushroom,
        position: positions.mushroom,
        selected: true,
        price: 1.1
      },
      Pepperoni: {
        name: "Pepperoni",
        style: ingredients.Pepperoni,
        position: positions.pepperoni,
        selected: true,
        price: 1.3
      },
      Redpepper: {
        name: "Redpepper",
        style: ingredients.RedPepper,
        position: positions.redPepper,
        selected: true,
        price: 1.4
      },
      Greenpepper: {
        name: "Greenpepper",
        style: ingredients.GreenPepper,
        position: positions.greenPepper,
        selected: true,
        price: 1.4
      },
      Tomato: {
        name: "Tomato",
        style: ingredients.Tomato,
        position: positions.tomato,
        selected: true,
        price: 1.0
      }
    },
    fullPrice: 13.4
  };

  changeSelectedHandler = name => {
    let updateSelectedObj = {
      ...this.state.ings[name],
      selected: !this.state.ings[name].selected
    };
    let updateIngs = { ...this.state.ings, [name]: updateSelectedObj };

    this.setState(() => {
      if (this.state.ings[name].selected) {
        return {
          ings: updateIngs,
          fullPrice: this.state.fullPrice - this.state.ings[name].price
        };
      } else {
        return {
          ings: updateIngs,
          fullPrice: this.state.fullPrice + this.state.ings[name].price
        };
      }
    });
  };

  render() {
    return (
      <Container>
        <PizzaGrid.SectionOne>
          <Heading />
        </PizzaGrid.SectionOne>
        <PizzaGrid.SectionTwo />
        <PizzaGrid.SectionThree>
          <Toolbar
            clicked={this.changeSelectedHandler}
            ingredients={this.state.ings}
          />
        </PizzaGrid.SectionThree>
        <PizzaGrid.SectionFour col="2/4" row="1/4" color="#ffe487">
          <PizzaBuilder ingredients={this.state.ings} />
        </PizzaGrid.SectionFour>
        <PizzaGrid.SectionFive>
          <OrderOverview
            ingredients={this.state.ings}
            fullPrice={this.state.fullPrice}
          />
        </PizzaGrid.SectionFive>
      </Container>
    );
  }
}

export default Pizza;
