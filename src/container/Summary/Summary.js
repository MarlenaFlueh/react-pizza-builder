import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import logo from "../../assets/bike.svg";
import * as actions from "../../actions/";
import * as Grid from "../Pizza/PizzaGrid";
import { HeadingMargin, H2Margin } from "../../components/Heading/Heading";
import Button from "../../components/OrderOverview/Button";
import { postOrder } from "../../components/Api/Api";

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

const LogoImg = styled.img`
	width: 400px;
	margin-top: 12em;
	opacity: 0.8;
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

    postOrderData = async () => {

        const orderObject = {
            customerEmail: this.props.contactData.email.value,
            totalPrice: this.props.ings.fullPrice,
            ings: this.props.ings.ings
        }

        const postResponse = await postOrder(orderObject);
        console.log(postResponse)

        this.props.history.push("/final");
    }

    render() {
        const allowed = ["firstName", "lastName", "email", "address"]

        const filteredContactData = Object.keys(this.props.contactData)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = this.props.contactData[key];
                return obj;
            }, {});

        const ingredientsArray = [];

        for (let key in this.props.ings.ings) {
            ingredientsArray.push({
                name: key.charAt(0).toUpperCase() + key.slice(1),
                num: this.props.ings.ings[key]
            });
        }

        return (
            <Container>
                <Grid.ImageGrid>
                    <OrderForm>
                        <HeadingMargin>Delivery details:</HeadingMargin>
                        <H2Margin>Your data:</H2Margin>
                        <p>First name: {filteredContactData.firstName.value}</p>
                        <p>Last name: {filteredContactData.lastName.value}</p>
                        <p>Address: {filteredContactData.address.value}</p>
                        <p>Email: {filteredContactData.email.value}</p>
                        <H2Margin>Ingredients:</H2Margin>
                        {ingredientsArray.map(item => item.num === 1 ? <p key={item.name}>{item.name}</p> : null)}
                        <H2Margin>Total price: </H2Margin>$ {this.props.fullPrice.toFixed(2)}
                        <H2Margin>Delivery service:</H2Margin>
                        <p>PizzaHype GmbH</p>
                        <p>+49 245789275</p>
                        <Button onClick={this.postOrderData}>order now</Button>
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
        ings: state.ingredients,
        fullPrice: state.ingredients.fullPrice,
        contactData: state.contactData.orderForm
    };
};

export default connect(
    mapStateToProps,
    actions
)(Summary);
