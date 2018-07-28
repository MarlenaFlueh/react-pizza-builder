import React, { Component } from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const ToolbarContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: 0 2px 3px #fabe5094;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;

  @media (min-width: 500px) and (min-height: 401px) {
    width: 150px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 200px;
  }
`;

class Toolbar extends Component {
  render() {
    const ingredients = Object.keys(this.props.ings).map(ing => (
      <Button key={ing} clicked={this.props.clicked} name={ing} />
    ));

    return <ToolbarContainer>{ingredients}</ToolbarContainer>;
  }
}

export default Toolbar;
