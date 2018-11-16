import React, { Component } from "react";
import styled from "styled-components";

import Input from "../UI/Input";
import { HeadingMargin } from "../Heading/Heading";
import Button from "../OrderOverview/Button";
import { getUser } from "../../components/Api/Api";

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

    authAndRedirect = async (email, password) => {
        // test: "marlenaflueh@gmail.com", "Test123"
        const res = await getUser(email, password)

        if (res.email === email) {
            this.props.history.push("/summary");
        }
    }

    submitHandler = event => {
        event.preventDefault();
    }

    render() {
        const formArray = [];

        for (let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config: this.state.orderForm[key],
                type: this.state.orderForm[key].elementConf.type,
                placeholder: this.state.orderForm[key].elementConf.placeholder
            });
        }

        const input = formArray.map(item =>
            <Input
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                changed={event => this.inputChangeHandler(event, item.id)}
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
                    <Button type="submit" onClick={() => this.authAndRedirect(this.state.orderForm.email.value, this.state.orderForm.password.value)}>Log in</Button>
                </form>
            </Container>
        )
    }
}

export default Auth;