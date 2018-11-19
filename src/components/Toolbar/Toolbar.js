import React, { Component } from "react";
import styled from "styled-components";

import ToolbarItem from "./ToolbarItem";

const ToolbarContainer = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  box-shadow: 0 2px 3px #fabe5094;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  background-color: ivory;

  @media (min-width: 500px) and (min-height: 401px) {
    width: 150px;
  }

  @media (min-width: 600px) and (min-height: 500px) {
    width: 200px;
    height: 100%;
  }
`;

class Toolbar extends Component {
  render() {
    const ingredients = Object.keys(this.props.ings).map(ing => (
      <ToolbarItem key={ing} clicked={this.props.clicked} name={ing} />
    ));

    return <ToolbarContainer>{ingredients}</ToolbarContainer>;
  }
}

export default Toolbar;
