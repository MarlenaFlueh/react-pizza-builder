import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
import * as Grid from "../Pizza/PizzaGrid";
import PizzaBuilder from "../../components/PizzaBuilder/PizzaBuilder";
import LoginForm from "../../components/Auth/Auth";
import SignupForm from "../../components/Signup/Signup";
import OrderOverview from "../../components/OrderOverview/OrderOverview";
import { postUser, getUser } from "../../components/Api/Api";

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
@media (min-width: 600px) and (min-height: 500px) {
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

const FailedMessage = styled.p`
  text-align: center;
  color: red;
`;

class Order extends Component {
  state = {
    showLogin: false
  }

  postSignupData = async () => {

    const filteredContactData = Object.keys(this.props.contactData.orderForm)
      .reduce((obj, key) => {
        obj[key] = this.props.contactData.orderForm[key];
        return obj;
      }, {});

    const res = await postUser(filteredContactData.firstName.value, filteredContactData.lastName.value, filteredContactData.address.value, filteredContactData.password.value, filteredContactData.email.value);
    if (res.success) {
      this.props.history.push("/summary");
    }
    this.props.contactDataFailed()
  }

  changeLoginHandler = () => {
    this.setState(prevState => ({ showLogin: !prevState.showLogin }));
  }

  authAndRedirect = async () => {
    // test: "marlenaflueh@gmail.com", "Test123"
    const res = await getUser(this.props.authData.orderForm.email.value, this.props.authData.orderForm.password.value)

    if (res.email === this.props.authData.orderForm.email.value) {
      const allowed = ["firstName", "lastName", "email", "address", "password"]

      const filteredContactData = Object.keys(res)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = res[key];
          return obj;
        }, {});

      this.props.getContactData(filteredContactData);
      this.props.history.push("/summary");
    }

    else if (res)
      this.props.authFailed();
  }

  render() {

    const loginQuestion = <Question>Already have an account?<ChangeLink onClick={this.changeLoginHandler}> Log in</ChangeLink></Question>
    const authQuestion = <Question>Don't have an account?<ChangeLink onClick={this.changeLoginHandler}> Sign up</ChangeLink></Question>


    return (
      <Container>
        <Grid.ImageGrid>
          {this.state.showLogin ? <SignupForm clicked={this.postSignupData} /> : <LoginForm clicked={this.authAndRedirect} />}
          {this.props.authData.error ? <FailedMessage>Check your login data.</FailedMessage> : null}
          {this.props.contactData.error ? <FailedMessage>User already exists.</FailedMessage> : null}
          {this.state.showLogin ? loginQuestion : authQuestion}
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
    contactData: state.contactData,
    authData: state.authData
  };
};

export default connect(
  mapStateToProps,
  actions
)(Order);
