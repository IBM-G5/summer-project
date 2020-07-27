import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import loginSmallSvg from "../img/undraw_safe_bnk7.svg";
import logoTransparent from "../img/logo_transparent.png";

class LoginForm extends Component {
  render() {
    return (
      <>
        <p className="text-left">
          <img src={logoTransparent} width="30%" alt="login illustration" />
          <b>Professors Login</b>
        </p>
        <Container className="mt-5">
          <img src={loginSmallSvg} width="55%" alt="login illustration"></img>

          <Form className="mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>

            <Container>
              <Row>
                <Col>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Col>
                <Col>
                  <a href="#" className="text-muted nounderline small">
                    Forgot Password?
                  </a>
                </Col>
              </Row>
            </Container>
          

          <Container className="mt-5 pb-3">
            <a href="./guest" className="text-muted nounderline small">
              Not a professor? <b>Continue as a guest</b>
            </a>
          </Container>
          
        </Container>
      </>
    );
  }
}

export default LoginForm;
