import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import * as utils from "../../utils";
import Button from "./Button";

const Ing = styled.label`
  font-weight: bold;
`;

const Span = styled.div`
  font: inherit;
  padding: 0.3rem;
  text-align: center;
`;

const H2 = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 0 1.5rem 0;
`;

const OrderForm = styled.div`
    background-color: #ffe487;
    margin: auto;
    width: 70%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    box-sizing: border-box;

    @media (min-width: 600px) {
          width: 60%;
          margin: 10px auto 10px 30%;
    }
`;

class OrderOverview extends Component {

  redirectToTarget = () => {
    this.props.history.push("/order");
  }

  render() {
    const ingredients = Object.keys(this.props.ings).map(ing => {
      if (this.props.ings[ing] === 1) {
        return (
          <Span key={ing}>
            <Ing>{utils.capitalize(ing)}: </Ing>
            ${utils.prices[ing].toFixed(2)}
          </Span>
        );
      }
      return null;
    });

    return (
      <OrderForm>
        <H2>Total price: ${this.props.fullPrice.toFixed(2)}</H2>
        <Container>
          {ingredients}
        </Container>
        {this.props.showBtn ? <Button onClick={this.redirectToTarget}>order now</Button> : null}
      </OrderForm>
    );
  }
}

export default withRouter(OrderOverview);
