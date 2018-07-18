import styled from "styled-components";

export const GridItem = styled.div`
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2px;
  grid-auto-rows: minmax(10px, auto);
  background-color: #fad645;
  border-radius: 100%;
  position: realtive;
  width: 80%;
  height: 80%;
  padding: 15px;
  box-shadow: 1px 1px 1px 15px #fabe5094;
  border: 10px solid #fa8e50be;

  @media (min-width: 500px) and (min-height: 400px) {
    box-shadow: 2px 2px 2px 30px #fabe5094;
    border: 20px solid #fa8e50be;
  }
`;
