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

        // bug in contactDataReducer, after input "value" deletes all attributes
        const formArray = [];
        for (let key in this.props.contactData) {
            console.log(this.props.contactData[key].elementConf.type)
            formArray.push({
                id: key,
                value: this.props.contactData[key].value,
                //type: this.props.contactData[key].elementConf.type,
                //placeholder: this.props.contactData[key].elementConf.placeholder
            });
        }
        console.log(formArray)

        const input = formArray.map(item => {
            console.log(item.type)
            return <Input
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                changed={event => this.inputChangeHandler(event.target.value, item.id)}
                value={item.value}
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
                    <Button type="submit" onClick={this.props.clicked}>
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
        contactData: state.contactData.orderForm
    };
};

export default connect(
    mapStateToProps,
    actions
)(Signup);
