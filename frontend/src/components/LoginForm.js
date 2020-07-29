import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import loginSmallSvg from "../img/undraw_safe_bnk7.svg";
import logoTransparent from "../img/logo_transparent.png";

import axios from "axios";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      successMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);

    this.API_BASE_URL = "http://localhost:8080/login";
  }
  redirectToHome(props) {
    props.updateTitle("Home");
    props.history.push("/home");
  }
  handleSubmitClick(e, props) {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(this.API_BASE_URL, payload)
      .then(function (response) {
        if (response.data.code === 200) {
          this.setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          this.redirectToHome();
          props.showError(null);
        } else if (response.data.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <>
        <p className="text-left">
          <img src={logoTransparent} width="30%" alt="login illustration" />
          Login
        </p>
        <Container className="mt-5">
          <img src={loginSmallSvg} width="55%" alt="login illustration"></img>
          <Form className="mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                onChange={this.handleChange}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Container>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(event) => this.handleSubmitClick(event)}
                  >
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
          </Form>
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
