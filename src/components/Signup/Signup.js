import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from 'redux-form'

import { HeadingMargin } from "../Heading/Heading";
import Button from "../OrderOverview/Button";

const AuthForm = styled.div`
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

const InputField = styled(Field)`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    font-weight: bold;
    display: block;
    margin-bottom: 8px;

    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        background-color: #ccc;
    }
`;

//NEW

let SignupForm = props => {
    const { handleSubmit } = props
    return (
        < AuthForm >
            <HeadingMargin>
                Fill in your data.
            </HeadingMargin>
            <form onSubmit={handleSubmit}>
                <InputField name="firstName" component="input" type="text" />
                <InputField name="lastName" component="input" type="text" />
                <InputField name="address" component="input" type="text" />
                <InputField name="email" component="input" type="email" />
                <InputField name="password" component="input" type="password" />
                <Button type="submit">
                    Sign up
                    </Button>
            </form>
        </AuthForm >
    )

}

SignupForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(SignupForm)

export default SignupForm;
