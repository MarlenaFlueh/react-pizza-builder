import styled from "styled-components";

export const Olive = styled.div`
  top: 10px;
  left: 30px;
  width: 7.5px;
  height: 12.5px;
  border-radius: 100%;
  background-color: rgb(0, 0, 0);
  position: relative;

  @media (min-width: 1050px) and (min-height: 700px) {
    width: 15px;
    height: 25px;
    top: 30px;
    left: 40px;
  }
`;

export const Mozerella = styled.div`
  width: 25px;
  height: 35px;
  top: 10px;
  border-radius: 100%;
  background-color: ivory;
  position: relative;
  display: block;
  border: 2px solid #ffe487;

  @media (min-width: 1050px) and (min-height: 700px) {
    width: 50px;
    height: 60px;
  }
`;

export const RedPepper = styled.div`
  left: 50px;
  width: 5px;
  height: 35px;
  border-radius: 100%;
  background-color: #ff0000;
  position: relative;
  transform: rotate(30deg);

  @media (min-width: 1050px) and (min-height: 700px) {
    width: 10px;
    height: 50px;
    left: 40px;
    top: 0px;
  }
`;

export const GreenPepper = styled.div`
  top: 20px;
  left: 15px;
  width: 5px;
  height: 35px;
  border-radius: 100%;
  background-color: rgb(18, 190, 61);
  position: relative;
  transform: rotate(350deg);

  @media (min-width: 1050px) and (min-height: 700px) {
    width: 10px;
    height: 50px;
    left: 50px;
    top: 0px;
  }
`;

export const Pepperoni = styled.div`
  top: 25px;
  left: 10px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: rgb(179, 18, 18);
  position: relative;

  @media (min-width: 1050px) and (min-height: 700px) {
    width: 50px;
    height: 50px;
    left: 40px;
    top: 50px;
  }
`;

export const Tomato = styled.div`
position: relative;
  height: 20px;
  width: 20px;
  background-color: #ff6347;
  border: 1px transparent;
  border-radius: 50%;

&:before {
  content: "";
  background: green;
  position: absolute;
  top: -2px;
  left: 1.5px;
  width: 12.5px;
  height: 0.5px;
  border: 8px solid green;
  border-width: 0 2px 6px 2px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: rotate(30deg);
}

&:after {
  content: "";
  background: green;
  position: absolute;
  top: -5px;
  left: 8px;
  width: 0.5px;
  height: 12.5px;
  border: 5px solid green;
  border-width: 3px 0 0 6px;
  border-top-left-radius: 20px;
  transform: rotate(45deg);
}

@media (min-width: 1050px) and (min-height: 700px) {
    height: 40px;
    width: 40px;
  &:before {
    width: 25px;
    height: 1px;
    top: -4px;
    left: 3px;
  }
  &:after {
    width: 1px;
    height: 25px;
    top: -10px;
    left: 16px;
  }
`;

export const Mushroom = styled.div`
  top: 45px;
  background-color: #c3b5ae;
  position: relative;
  width: 12.5px;
  height: 15px;
  z-index: 20;
  margin: 0 17px 0 -10px;
  transform: rotate(330deg);

  &:before {
    content: "";
    background: #b49989;
    position: absolute;
    top: -10px;
    left: -8.5px;
    width: 30px;
    height: 15px;
    border-width: 0 2px 6px 2px;
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
    transform: rotate(180deg);
  }

  @media (min-width: 1050px) and (min-height: 700px) {
    width: 25px;
    height: 30px;
    &:before {
      width: 60px;
      height: 30px;
      top: -20px;
      left: -17px;
    }
  }
`;
