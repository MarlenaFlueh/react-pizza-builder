import React, { Component } from "react";
import styled from "styled-components";

const InputField = styled.input`
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

class Input extends Component {
    render() {
        return (
            <InputField
                onChange={this.props.changed}
                value={this.props.value}
                type={this.props.type}
                placeholder={this.props.placeholder}
            />
        )
    }
}

export default Input;
