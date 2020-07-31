import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";

import logoTransparent from "../img/logo_transparent.png";
import exams from "../datas/exams.json"

class GuestPageContainer extends Component {

  render() {

    const dataHeader = (
        <tr>
            <th>Course</th>
            <th>Teacher</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
    )

    const dataRow = exams.map((x)=>(
        <tr key={x.id}>
            <td>{x.course}</td>
            <td>{x.teacher}</td>
            <td><Button variant="danger">Delete</Button></td>
            <th><Button variant="secondary">Update</Button></th>
        </tr>
    ))
    return (
      <Container className="vCenterItems shadow p-4">
          <h5 className="text-left mb-4">
              <img src={logoTransparent} width="60px" alt="login illustration" />
              Upcoming exams 
          </h5>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="an1" title="Anul 1">
            <Table striped bordered hover>
                <thead>{dataHeader}</thead>
                <tbody>{dataRow}</tbody>
            </Table>
          </Tab>
          <Tab eventKey="an2" title="Anul 2">
            <Table striped bordered hover>
                <thead>{dataHeader}</thead>
                <tbody>{dataRow}</tbody>
            </Table>
          </Tab>
          <Tab eventKey="an3" title="Anul 3" >
          <Table striped bordered hover>
              <thead>{dataHeader}</thead>
              <tbody>{dataRow}</tbody>
            </Table>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default GuestPageContainer;
