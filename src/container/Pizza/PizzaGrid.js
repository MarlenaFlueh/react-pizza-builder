import styled from "styled-components";

export const SectionOne = styled.div`
  grid-column: 1/6;
  grid-row: 1/2;
  z-index: 1;

  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 3/6;
    grid-row: 1/4;
  }
`;

export const SectionTwo = styled.div`
  grid-column: 1/6;
  grid-row: 2;
  background-color: white;

  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 4/6;
    grid-row: 1/5;
  }
`;

export const SectionThree = styled.div`
  grid-column: 1/2;
  grid-row: 3/5;

  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 1;
    grid-row: 1/5;
  }
`;

export const SectionFour = styled.div`
  grid-column: 2/6;
  grid-row: 3;

  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 2/4;
    grid-row: 1/4;
  }
`;

export const SectionFive = styled.div`
  grid-column: 2/6;
  grid-row: 4;
  @media (min-width: 1050px) and (min-height: 700px) {
    grid-column: 2/4;
    grid-row: 4/5;
  }
`;
