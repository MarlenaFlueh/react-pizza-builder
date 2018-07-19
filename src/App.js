import React, { Component } from "react";
import styled from "styled-components";

import PizzaBuilder from "./components/PizzaBuilder/PizzaBuilder";
import Toolbar from "./components/Toolbar/Toolbar";

const Container = styled.main`
  margin-top: 72px;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Toolbar />
        <PizzaBuilder />
      </Container>
    );
  }
}

export default App;
