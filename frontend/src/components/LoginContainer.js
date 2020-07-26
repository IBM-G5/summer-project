import React, { Component } from "react";
//import './Navbar.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";

import TeacherIllustration from "../img/undraw_teaching_f1cm.svg";

class LoginContainer extends Component {
  render() {
    return (
        <Container className="vCenterItems shadow">
          <Row>
            <Col md lg={4} className="bg-light">
                <LoginForm/>
            </Col>
            <Col className="d-none d-lg-block">
                <img src={TeacherIllustration} alt="Teacher Illustration" width="100%"/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default LoginContainer;
