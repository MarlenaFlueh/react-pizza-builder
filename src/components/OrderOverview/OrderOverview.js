import React, { Component } from "react";
import styled from "styled-components";

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

const Button = styled.button`
  text-decoration: none;
  border: none;
  margin: 180px auto 0 0;
  box-shadow: 2px 2px 2px #fabe5094;
  border-radius: 2px;
  background-color: white;
  height: 70px;
  width: 130px;
  font: inherit;

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

class OrderOverview extends Component {
  render() {
    let ingredientsArray = [];
    for (let key in this.props.ingredients) {
      ingredientsArray.push({ id: key, config: this.props.ingredients[key] });
    }

    let ingredients = ingredientsArray.map(ing => {
      if (ing.config.selected) {
        return (
          <div key={ing.id}>
            <Span>
              <Ing>{ing.config.name}</Ing>
              {ing.config.price.toFixed(2)}€
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
