import React from "react";
import styled from "styled-components";

const HeadingBox = styled.div`
  background-color: white;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  text-align: center;
  @media (min-width: 1050px) and (min-height: 700px) {
    height: 60%;
    width: 60%;
  }
`;

const Heading = () => (
  <HeadingBox>
    <h1>PizzaHus</h1>
  </HeadingBox>
);

export default Heading;
