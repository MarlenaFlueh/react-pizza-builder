import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  border: none;
  margin: auto auto auto 0;
  box-shadow: 2px 2px 2px #fabe5094;
  border-radius: 2px;
  background-color: white;
  height: 70px;
  width: 130px;
  font: inherit;

  @media (min-width: 1000px) and (min-height: 700px) {
    margin: auto;
  }

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

export default Button;
