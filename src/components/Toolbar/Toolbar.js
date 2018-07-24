import React, { Component } from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const ToolbarContainer = styled.div`
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f2f2f2;

  @media (min-width: 500px) and (min-height: 401px) {
    width: 150px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 200px;
  }
`;

class Toolbar extends Component {
  render() {
    let ingArray = [];
    for (let key in this.props.ingredients) {
      ingArray.push({ id: key, config: this.props.ingredients[key] });
    }

    return (
      <ToolbarContainer>
        {ingArray.map(ing => (
          <Button
            key={ing.id}
            clicked={this.props.clicked}
            name={ing.config.name}
            selected={ing.config.selected}
            ings={this.props.ingredients}
          />
        ))}
      </ToolbarContainer>
    );
  }
}

export default Toolbar;
