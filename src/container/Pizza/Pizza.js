import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
import * as PizzaGrid from "./PizzaGrid";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import Toolbar from "../../components/Toolbar/Toolbar";
import Heading from "../../components/Heading/Heading";
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
  selectIngHandler = name => {
    if (this.props.ings[name] === 0) {
      this.props.addIngredient(name);
    } else {
      this.props.removeIngredient(name);
    }
  };

  render() {
    return (
      <Container>
        <PizzaGrid.SectionOne>
          <Heading />
        </PizzaGrid.SectionOne>
        <PizzaGrid.SectionTwo />
        <PizzaGrid.SectionThree>
          <Toolbar clicked={this.selectIngHandler} ings={this.props.ings} />
        </PizzaGrid.SectionThree>
        <PizzaGrid.SectionFour>
          <PizzaBuilder ings={this.props.ings} />
        </PizzaGrid.SectionFour>
        <PizzaGrid.SectionFive>
          <OrderOverview
            ings={this.props.ings}
            fullPrice={this.props.fullPrice}
          />
        </PizzaGrid.SectionFive>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients.ings,
    fullPrice: state.ingredients.fullPrice
  };
};

export default connect(
  mapStateToProps,
  actions
)(Pizza);
