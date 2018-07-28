import React, { Component } from "react";
import styled from "styled-components";

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
  }
`;

const Col = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
`;

class OrderOverview extends Component {
  render() {
    const ingredients = Object.keys(this.props.ings).map(ing => {
      if (this.props.ings[ing] === 1) {
        return (
          <div key={ing}>
            <Span>
              <Ing>{ing}</Ing>
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
          <h2>Gesamtpreis: {this.props.fullPrice.toFixed(2)}€</h2>
          {ingredients}
        </Col>
        <Button>bestellen</Button>
      </Row>
    );
  }
}

export default OrderOverview;
