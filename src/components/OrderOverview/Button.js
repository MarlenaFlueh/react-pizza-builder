import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border: 1.4px solid green;
  border-radius: 2px;
  color: green;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  @media (min-width: 1000px) and (min-height: 700px) {
    margin: auto;
  }

  &:hover {
    color: rgb(18, 190, 61);
    cursor: pointer;
  }
`;

export default Button;
