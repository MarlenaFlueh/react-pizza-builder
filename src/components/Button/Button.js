import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px 10px 30px 10px;
  margin: 0px 10px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? "#0B610B" : "rgb(179, 18, 18)")};

  &:hover {
    color: rgb(159, 18, 18);
  }

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    margin: 5px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: inline;
`;

class Button extends Component {
  render() {
    const Item = styled(this.props.ings[this.props.name].style)`
      margin: auto;
      left: 0;
      top: 10px;

      @media (min-width: 500px) and (min-height: 401px) {
        margin: auto;
        left: 0;
        top: 30px;
      }
    `;

    return (
      <ButtonBox>
        <Btn
          selected={this.props.selected}
          onClick={() => this.props.clicked(this.props.name)}
        >
          {this.props.name}
          <Item />
        </Btn>
      </ButtonBox>
    );
  }
}

export default Button;
