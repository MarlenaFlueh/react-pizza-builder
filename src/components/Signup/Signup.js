import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../actions/";
import Input from "../UI/Input";
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

class Signup extends Component {
    inputChangeHandler = (value, controlName) => {
        this.props.addContactData(value, controlName);
    }

    render() {

        const formArray = [];
        for (let key in this.props.contactData.orderForm) {
            formArray.push({
                id: key,
                value: this.props.contactData.orderForm[key].value,
                type: this.props.contactData.orderForm[key].elementConf.type,
                placeholder: this.props.contactData.orderForm[key].elementConf.placeholder
            });
        }

        const input = formArray.map(item => {
            return <Input
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                changed={event => this.inputChangeHandler(event.target.value, item.id)}
                value={item.value}
                invalid={!this.props.contactData.orderForm[item.id].valid}
                touched={this.props.contactData.orderForm[item.id].touched}
            />
        }
        );

        return (
            <AuthForm>
                <HeadingMargin>
                    Fill in your data.
                </HeadingMargin>
                <form onSubmit={this.submitHandler}>
                    {input}
                    <Button disabled={!this.props.contactData.formIsValid} type="submit" onClick={this.props.clicked}>
                        Sign up
                    </Button>
                </form>
            </AuthForm>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients.ings,
        fullPrice: state.ingredients.fullPrice,
        contactData: state.contactData
    };
};

export default connect(
    mapStateToProps,
    actions
)(Signup);
