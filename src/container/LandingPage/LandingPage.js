import React, { Component } from "react";
import styled from "styled-components";

import img from "../../assets/pizzabg.jpg";
import logo from "../../assets/logo.svg";

const ContainerImg = styled.div`
    background-image: url(${img});
	height: -webkit-fill-available;
    overflow: auto;
    margin: 0px;
`;

const H3 = styled.div`
margin: 0px;
	font-family: 'Cabin Sketch', cursive;
  	font-size:80px;
  	text-align: center;
  	margin-top: 2em;
  	color: white;
`;

const Container = styled.div`
    height: 100%;
    margin: 0px;
`;

const LogoImg = styled.img`
	width: 400px;
	margin-top: 4em;
	margin-left: 37em;
	margin-bottom: 0.3em;
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
            <Container>
                <title>PizzaHype- DEINE Pizza</title>
                <ContainerImg>
                    <H3>Erstelle DEINE Pizza - Online</H3>
                    <LogoImg alt="Jetzt loslegen" src={logo} onClick={this.redirectToTarget} />

                </ContainerImg>
            </Container>
        )
    }
}

export default LandingPage;