import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import * as utils from "../../utils";
import Button from "./Button";

const Ing = styled.label`
  display: block;
  width: 130px;
  font-weight: bold;
`;

const Span = styled.div`
  display: flex;
  font: inherit;
  padding: 2px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) and (min-height: 700px) {
    flex-direction: row;
    height: 90%;
  }
`;

const Col = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const H2 = styled.h2`
  margin-top: 0;
`;

class OrderOverview extends Component {

  redirectToTarget = () => {
    this.props.history.push("/order");
  }

  render() {
    const ingredients = Object.keys(this.props.ings).map(ing => {
      if (this.props.ings[ing] === 1) {
        return (
          <div key={ing}>
            <Span>
              <Ing>{utils.capitalize(ing)}</Ing>
              {utils.prices[ing].toFixed(2)}€
            </Span>
          </div>
        );
      }
      return null;
    });

    return (
      <Row>
        <Col>
          <H2>Gesamtpreis: {this.props.fullPrice.toFixed(2)}€</H2>
          {ingredients}
        </Col>
        {this.props.showBtn ? <Button onClick={this.redirectToTarget}>bestellen</Button> : null}
      </Row>
    );
  }
}

export default withRouter(OrderOverview);
