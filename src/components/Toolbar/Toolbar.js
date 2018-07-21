import React, { Component } from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const ToolbarContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

class Toolbar extends Component {
  render() {
    let ingArray = [];
    for (let key in this.props.ingredients) {
      ingArray.push(key);
    }

    return (
      <ToolbarContainer>
        {ingArray.map(ing => (
          <Button key={ing} clicked={this.props.clicked} name={ing} />
        ))}
      </ToolbarContainer>
    );
  }
}

export default Toolbar;
