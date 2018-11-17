import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  border-radius: 2px;
  outline: none;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  color: ${props => props.disabled ? "grey" : "green"};
  border: ${props => props.disabled ? "1.4px solid grey" : "1.4px solid green"};
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  @media (min-width: 1000px) and (min-height: 700px) {
    margin: auto;
  }
`;

export default Button;
