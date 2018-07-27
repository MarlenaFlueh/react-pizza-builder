import React, { Component } from "react";
import styled from "styled-components";

import * as ingredients from "../../components/PizzaBuilder/Ingredients";

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px 10px 30px 10px;
  margin: 0px 10px;
  font-weight: bold;
  color: "#0B610B";

  &:hover {
    color: grey;
  }

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    margin: 5px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

class Button extends Component {
  render() {
    const Item = styled(ingredients[this.props.name])`
      margin: 0 auto 10px auto;
      left: 0;
      top: 5px;

      @media (min-width: 500px) and (min-height: 401px) {
        margin-bottom: 20px;
        left: 0;
        top: 10px;
      }
    `;

    return (
      <ButtonBox>
        <Btn onClick={() => this.props.clicked(this.props.name)}>
          <Item />
          {this.props.name}
        </Btn>
      </ButtonBox>
    );
  }
}

export default Button;
