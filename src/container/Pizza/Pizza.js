import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import logo from "../../assets/logo.svg";
import * as actions from "../../actions/";
import * as Grid from "./PizzaGrid";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import Toolbar from "../../components/Toolbar/Toolbar";
import OrderOverview from "../../components/OrderOverview/OrderOverview";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 10% 10% 20%;
  grid-auto-rows: 0% 0% 50% 40% 10%;
  background-color: #ffe487;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  @media (min-width: 600px) and (min-height: 500px) {
    grid-template-columns: 20% 25% 10% 10% 25% 10%;
    grid-auto-rows: 10% 20% 30% 40%;
  }
`;

const LogoImg = styled.img`
	width: 300px;
	margin-top: 5rem;
	margin-left: 10rem;
	opacity: 0.8;
      transition:all 1s ease;
      
    &:hover{
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        filter: alpha(opacity=100);
        opacity: 1.0;
        cursor: pointer;
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
        <Grid.ImageGrid>
          <LogoImg alt="Jetzt loslegen" src={logo} onClick={this.redirectToTarget} />

        </Grid.ImageGrid>
        <Grid.ToolbarGrid>
          <Toolbar clicked={this.selectIngHandler} ings={this.props.ings} />
        </Grid.ToolbarGrid>
        <Grid.PizzaBuilderGrid>
          <PizzaBuilder ings={this.props.ings} />
        </Grid.PizzaBuilderGrid>
        <Grid.OrderGrid>
          <OrderOverview
            showBtn
            ings={this.props.ings}
            fullPrice={this.props.fullPrice}
          />
        </Grid.OrderGrid>
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
