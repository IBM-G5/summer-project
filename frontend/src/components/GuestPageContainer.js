import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import logoTransparent from "../img/logo_transparent.png";

class GuestPageContainer extends Component {
  render() {
    return (
      <Container className="vCenterItems shadow p-4">

          <h5 className="text-left mb-4">
              <img src={logoTransparent} width="60px" alt="login illustration" />
              Upcoming exams 
          </h5>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="an1" title="Anul 1">
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Faculty</th>
                  <th>Year of Study</th>
                  <th>Course</th>
                  <th>Teacher</th>
                  <th>Date</th>
                  <th>Class</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Automatica si Calculatoare</td>
                  <td>1</td>
                  <td>Analiza Matematica</td>
                  <td>Paunescu</td>
                  <td>10.20.2020</td>
                  <td>A101</td>
                </tr>

              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="an2" title="Anul 2">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Faculty</th>
                  <th>Year of Study</th>
                  <th>Course</th>
                  <th>Teacher</th>
                  <th>Date</th>
                  <th>Class</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Automatica si Calculatoare</td>
                  <td>1</td>
                  <td>Analiza Matematica</td>
                  <td>Paunescu</td>
                  <td>10.20.2020</td>
                  <td>A101</td>
                </tr>

              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="an3" title="Anul 3" ></Tab>
        </Tabs>
      </Container>
    );
  }
}
export default GuestPageContainer;
