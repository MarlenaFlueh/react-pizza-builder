import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Input from "../UI/Input";
import { HeadingMargin } from "../Heading/Heading";
import Button from "../OrderOverview/Button";
import * as actions from "../../actions/index";

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
    state = {
        orderForm: {
            email: {
                elementConf: {
                    type: "email",
                    placeholder: "Your email"
                },
                value: "",
                validation: {
                    required: true,
                },
                touched: false
            },
            password: {
                elementConf: {
                    type: "password",
                    placeholder: "Choose a password"
                },
                value: "",
                validation: {
                    required: true,
                },
                touched: false
            }

        },
        formIsValid: false
    }


    inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.orderForm,
            [controlName]: {
                ...this.state.orderForm[controlName],
                value: event.target.value
            }
        };
        this.setState({ orderForm: updatedControls });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onAuth(this.state.orderForm.email.value, this.state.orderForm.password.value);
    }

    render() {
        const formArray = [];

        for (let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        const input = formArray.map(item =>
            <Input
                key={item.id}
                elementConf={item.config.elementConf}
                changed={event => this.inputChangeHandler(event, item.id)}
                value={item.config.value}
            />
        );

        return (
            <Container >
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

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);