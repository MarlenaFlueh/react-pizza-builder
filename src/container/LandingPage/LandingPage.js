import React, { Component } from "react";
import styled from "styled-components";

import img from "../../assets/pizzabg.jpg";
import logo from "../../assets/logo.svg";

const ContainerImg = styled.div`
    display: flex:
    justify-content: center;
    text-align: center;
    background-repeat: no-repeat; 
    background-image: url(${img});
    height: 100vh;
    width: 100%;
    margin: 0;
    overflow: auto;
    background-attachment: fixed;
`;

const H3 = styled.div`
margin: 0px;
	font-family: 'Cabin Sketch', cursive;
  	font-size:80px;
  	text-align: center;
  	margin-top: 2em;
  	color: white;
`;

const LogoImg = styled.img`
	width: 400px;
	margin-top: 5%;
    opacity: 0.7;
      transition:all 1s ease;
      
    &:hover{
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        filter: alpha(opacity=100);
        opacity: 1.0;
        cursor: pointer;
    }
`;

class LandingPage extends Component {

    redirectToTarget = () => {
        this.props.history.push("/pizza");
    }

    render() {
        return (
            <ContainerImg>
                <title>PizzaHype- your Pizza</title>
                <H3>Create YOUR Pizza - Online</H3>
                <LogoImg alt="Jetzt loslegen" src={logo} onClick={this.redirectToTarget} />
            </ContainerImg>
        )
    }
}

export default LandingPage;