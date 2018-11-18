import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
import * as Grid from "../Pizza/PizzaGrid";
import { HeadingMargin, H2Margin } from "../../components/Heading/Heading";
import Button from "../../components/OrderOverview/Button";
// import { postOrder } from "../../components/Api/Api";

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

class Summary extends Component {

    componentDidMount() {
        console.log(this.props.contactData)
    }

    postOrderData = async () => {

        const customer = Object.keys(this.props.contactData)
            .reduce((obj, key) => {
                obj[key] = this.props.contactData[key].value;
                return obj;
            }, {});

        const ingredient = Object.keys(this.props.ings)
            .filter(key => this.props.ings[key] === 1)
            .reduce((obj, key) => {
                obj[key] = this.props.ings[key];
                return obj;
            }, {});

        const order = {
            customer,
            ingredient
        }

        // not working yet, needs an api endpoint
        // const postResponse = await postOrder(order);
        // console.log(postResponse)

        console.log(order)
    }

    redirectToTarget = () => {
        this.props.history.push("/summary");
    }

    render() {
        const allowed = ["firstName", "lastName", "email", "address"]

        const filteredContactData = Object.keys(this.props.contactData)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = this.props.contactData[key];
                return obj;
            }, {});

        console.log(filteredContactData)

        const ingredientsArray = [];

        for (let key in this.props.ings) {
            ingredientsArray.push({
                name: key.charAt(0).toUpperCase() + key.slice(1),
                num: this.props.ings[key]
            });
        }

        return (
            <Container>
                <Grid.ImageGrid>
                    <OrderForm>
                        <HeadingMargin>Bestelldetails</HeadingMargin>
                        <H2Margin>Liefern an:</H2Margin>
                        <p>Vorname: {filteredContactData.firstName.value}</p>
                        <p>Nachname: {filteredContactData.lastName.value}</p>
                        <p>Adresse: {filteredContactData.address.value}</p>
                        <p>E-Mail: {filteredContactData.email.value}</p>
                        <H2Margin>Zutaten:</H2Margin>
                        {ingredientsArray.map(item => item.num === 1 ? <p key={item.name}>{item.name}</p> : null)}
                        <H2Margin>Gesamtpreis: </H2Margin>{this.props.fullPrice.toFixed(2)}€
                        <H2Margin>Lieferung erfolgt durch:</H2Margin>
                        <p>PizzaHype GmbH</p>
                        <p>+49 245789275</p>
                        <Button onClick={this.postOrderData}>jetzt bestellen</Button>
                    </OrderForm>
                </Grid.ImageGrid>
                <Grid.PizzaBuilderGrid>
                </Grid.PizzaBuilderGrid>
                <Grid.OrderGrid>
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
)(Summary);
