import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
import Input from "../UI/Input";
import { HeadingMargin } from "../Heading/Heading";
import Button from "../OrderOverview/Button";

const Container = styled.div`
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

class Auth extends Component {

    inputChangeHandler = (value, controlName) => {
        this.props.addAuthData(value, controlName);
    }

    submitHandler = event => {
        event.preventDefault();
    }

    render() {
        const formArray = [];

        for (let key in this.props.authData) {
            formArray.push({
                id: key,
                config: this.props.authData[key],
                type: this.props.authData[key].elementConf.type,
                placeholder: this.props.authData[key].elementConf.placeholder
            });
        }

        const input = formArray.map(item =>
            <Input
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                changed={event => this.inputChangeHandler(event.target.value, item.id)}
                value={item.config.value}
            />
        );

        return (
            <Container>
                <HeadingMargin>
                    Fill in your login data.
                </HeadingMargin>
                <form onSubmit={this.submitHandler}>
                    {input}
                    <Button type="submit" onClick={this.props.clicked}>Log in</Button>
                </form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients.ings,
        fullPrice: state.ingredients.fullPrice,
        contactData: state.contactData.orderForm,
        authData: state.authData.orderForm
    };
};

export default connect(
    mapStateToProps,
    actions
)(Auth);
