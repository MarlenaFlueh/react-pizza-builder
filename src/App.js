import React, { Component } from "react";
import PizzaBuilder from "./components/PizzaBuilder/PizzaBuilder";
import styled from "styled-components";

const Container = styled.main`
  margin-top: 72px;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <PizzaBuilder />
      </Container>
    );
  }
}

export default App;
