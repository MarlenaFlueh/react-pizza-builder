import React from "react";
import styled from "styled-components";

const HeadingBox = styled.div`
  background-color: white;
  text-align: center;
  border: 5px solid #ffe487;

  @media (min-width: 1050px) and (min-height: 700px) {
    height: 40%;
    width: 40%;
    margin: 10% 10%;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

const Heading = () => (
  <HeadingBox>
    <H1>PizzaHus</H1>
  </HeadingBox>
);

export default Heading;
