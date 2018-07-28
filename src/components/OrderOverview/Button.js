import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  border: none;
  margin: 180px auto 0 0;
  box-shadow: 2px 2px 2px #fabe5094;
  border-radius: 2px;
  background-color: white;
  height: 70px;
  width: 130px;
  font: inherit;

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

export default Button;
