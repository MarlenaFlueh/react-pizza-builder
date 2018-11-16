import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
import * as Grid from "../Pizza/PizzaGrid";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import LoginForm from "../../components/Auth/Auth";
import SignupForm from "../../components/Signup/Signup";
import OrderOverview from "../../components/OrderOverview/OrderOverview";
import { postUser } from "../../components/Api/Api";

export const Container = styled.div`
display: grid;
grid-template-columns: 30% 30% 10% 10% 20%;
grid-auto-rows: 0% 0% 50% 40% 10%;
background-color: #ffe487;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
@media (min-width: 1050px) and (min-height: 700px) {
  grid-template-columns: 20% 25% 10% 10% 25% 10%;
  grid-auto-rows: 10% 20% 30% 40%;
}
`;

const ChangeLink = styled.a`
  color: green;
  cursor: pointer;
`;

const Question = styled.p`
  text-align: center;
`;

class Order extends Component {
  state = {
    showLogin: false
  }

  postSignupData = async () => {

    const filteredContactData = Object.keys(this.props.contactData)
      .reduce((obj, key) => {
        obj[key] = this.props.contactData[key];
        return obj;
      }, {});

    await postUser(filteredContactData.firstName.value, filteredContactData.lastName.value, filteredContactData.address.value, filteredContactData.password.value, filteredContactData.email.value);

    this.props.history.push("/summary");
  }

  changeLoginHandler = () => {
    this.setState(prevState => ({ showLogin: !prevState.showLogin }));
  }

  render() {

    const loginQuestion = <Question>Already have an account?<ChangeLink onClick={this.changeLoginHandler}> Log in</ChangeLink></Question>
    const authQuestion = <Question>Don't have an account?<ChangeLink onClick={this.changeLoginHandler}> Sign up</ChangeLink></Question>


    return (
      <Container>
        <Grid.ImageGrid>
          {this.state.showLogin ? <LoginForm clicked={this.authAndRedirect} /> : <SignupForm />}
          {this.state.showLogin ? authQuestion : loginQuestion}
        </Grid.ImageGrid>
        <Grid.PizzaBuilderGrid>
          <PizzaBuilder ings={this.props.ings} />
        </Grid.PizzaBuilderGrid>
        <Grid.OrderGrid>
          <OrderOverview
            ings={this.props.ings}
            fullPrice={this.props.fullPrice}
          />
        </Grid.OrderGrid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients.ings,
    fullPrice: state.ingredients.fullPrice,
    contactData: state.contactData.orderForm
  };
};

export default connect(
  mapStateToProps,
  actions
)(Order);
