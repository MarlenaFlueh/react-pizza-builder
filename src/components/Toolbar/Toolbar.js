import React from "react";
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

const Toolbar = () => (
  <ToolbarContainer>
    <Button name="Tomate" />
    <Button name="Olive" />
    <Button name="Chili" />
    <Button name="Pilz" />
    <Button name="Mozerella" />
    <Button name="Salami" />
  </ToolbarContainer>
);

export default Toolbar;
