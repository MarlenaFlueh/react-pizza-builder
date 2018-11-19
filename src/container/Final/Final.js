import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import logo from "../../assets/logo.svg";
import * as actions from "../../actions";
import * as Grid from "../Pizza/PizzaGrid";
import { HeadingMargin } from "../../components/Heading/Heading";

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

const OrderForm = styled.div`
    background-color: ivory;
    margin: 20px auto;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;

    @media (min-width: 600px) {
          width: 500px;
    }
`;

const Redirect = styled.p`
    color: green;
    cursor: pointer;

    &:hover {
        color: #006400;
    }
`;

const LogoImg = styled.img`
	width: 300px;
	margin-top: 12em;
	opacity: 0.7;
      transition:all 1s ease;
      
    &:hover{
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        filter: alpha(opacity=100);
        opacity: 1.0;
        cursor: pointer;
    }
`;

class Summary extends Component {


    redirectToTarget = () => {
        this.props.history.push("/");
    }

    render() {

        return (
            <Container>
                <Grid.ImageGrid>
                    <OrderForm>
                        <HeadingMargin>Thank you! Your order will be delivered.</HeadingMargin>
                        <Redirect onClick={this.redirectToTarget}>back home...</Redirect>
                    </OrderForm>
                </Grid.ImageGrid>
                <Grid.PizzaBuilderGrid>
                    <LogoImg alt="Jetzt loslegen" src={logo} onClick={this.redirectToTarget} />
                </Grid.PizzaBuilderGrid>
                <Grid.OrderGrid>
                </Grid.OrderGrid>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    };
};

export default connect(
    mapStateToProps,
    actions
)(Summary);
