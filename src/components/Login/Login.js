import React, { Component } from "react";
import styled from "styled-components";

import Input from "../UI/Input";
import { HeadingMargin } from "../Heading/Heading";
import Button from "../OrderOverview/Button";

const LoginForm = styled.div`
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

class Login extends Component {
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

        let form = (
            <form>
                {input}
            </form>
        )

        return (
            <LoginForm>
                <HeadingMargin>
                    Fill in your data.
                </HeadingMargin>
                {form}
                <Button onClick={this.props.clicked}>
                    Log in
            </Button>
            </LoginForm>
        )
    }
}

export default Login;