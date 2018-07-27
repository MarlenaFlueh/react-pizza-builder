import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Button from "../Button/Button";
import * as actions from "../../actions/";

const ToolbarContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  box-shadow: 0 2px 3px #fabe5094;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;

  @media (min-width: 500px) and (min-height: 401px) {
    width: 150px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 200px;
  }
`;

class Toolbar extends Component {
  selectIngHandler = name => {
    if (this.props.ings[name] === 0) {
      this.props.addIngredient(name);
    } else {
      this.props.removeIngredient(name);
    }
  };

  render() {
    const ingredients = Object.keys(this.props.ings).map(ing => (
      <Button key={ing} clicked={this.selectIngHandler} name={ing} />
    ));

    return <ToolbarContainer>{ingredients}</ToolbarContainer>;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients.ings
  };
};

export default connect(
  mapStateToProps,
  actions
)(Toolbar);
