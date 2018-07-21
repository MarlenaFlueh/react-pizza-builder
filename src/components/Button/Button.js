import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 5px;
  margin: 5px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? "#0B610B" : "rgb(179, 18, 18)")};

  &:hover {
    color: rgb(159, 18, 18);
  }

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Button = ({ name, clicked, selected }) => (
  <ButtonBox>
    <Btn selected={selected} onClick={() => clicked(name)}>
      {name}
    </Btn>
  </ButtonBox>
);

export default Button;
