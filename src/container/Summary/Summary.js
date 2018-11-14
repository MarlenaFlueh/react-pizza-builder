import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
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

    redirectToTarget = () => {
        this.props.history.push("/summary");
    }

    render() {

        const ingredientsArray = [];

        for (let key in this.props.ings) {
            ingredientsArray.push({
                name: key.charAt(0).toUpperCase() + key.slice(1),
                num: this.props.ings[key]
            });
        }

        console.log(ingredientsArray);

        return (
            <Container>
                <Grid.ImageGrid>
                    <OrderForm>
                        <HeadingMargin>Bestelldetails</HeadingMargin>
                        {ingredientsArray.map(item => item.num === 1 ? <p key={item.name}>{item.name}: {item.num}</p> : null)}
                        <HeadingMargin>Liefern an:</HeadingMargin>
                        <HeadingMargin>Gesamtpreis: </HeadingMargin>{this.props.fullPrice.toFixed(2)}€
                        <HeadingMargin>Von:</HeadingMargin>
                        <p>PizzaHype GmbH</p>
                        <p>+49245789275</p>
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
        fullPrice: state.ingredients.fullPrice
    };
};

export default connect(
    mapStateToProps,
    actions
)(Summary);
