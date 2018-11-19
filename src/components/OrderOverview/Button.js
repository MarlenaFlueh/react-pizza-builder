import styled from "styled-components";

const Button = styled.button`
  background-color: ivory;
  border-radius: 2px;
  outline: none;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  color: ${props => props.disabled ? "grey" : "green"};
  border: ${props => props.disabled ? "1.4px solid grey" : "1.4px solid green"};
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  @media (min-width: 600px) and (min-height: 500px) {
    margin: auto;
  }
`;

export default Button;
