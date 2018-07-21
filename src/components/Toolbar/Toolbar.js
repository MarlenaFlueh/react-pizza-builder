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

const Toolbar = ({ clicked }) => (
  <ToolbarContainer>
    <Button clicked={clicked} name="Tomato" />
    <Button clicked={clicked} name="Olive" />
    <Button clicked={clicked} name="Pepper" />
    <Button clicked={clicked} name="Mushroom" />
    <Button clicked={clicked} name="Mozerella" />
    <Button clicked={clicked} name="Tomato" />
  </ToolbarContainer>
);

export default Toolbar;
