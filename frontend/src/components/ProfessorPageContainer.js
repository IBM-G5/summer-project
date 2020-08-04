import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import logoTransparent from "../img/logo_transparent.png";

class ProfessorPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      exams: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://randomuser.me/api/?results=5&nat=us,dk,fr,gb&page=2")
      .then((response) => response.json())
      .then((parsedJSON) =>
        parsedJSON.results.map((exam, i) => ({
          name: `${exam.name.last}`,
          username: `${exam.login.username}`,
          email: `${exam.email}`,
          location: `${exam.location.city}`,
          index: i,
        }))
      )
      .then((exams) =>
        this.setState({
          exams,
          isLoading: false,
        })
      )
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Container className="vCenterItems shadow p-4">
        <h5 className="text-left mb-4">
          <img src={logoTransparent} width="60px" alt="login illustration" />
          Exams
        </h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Course</th>
              <th>Teacher</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && this.state.exams.length > 0 ? (
              this.state.exams.map((exam) => {
                const { username, name, email, location, index } = exam;
                console.log({ username, index });
                return (
                  <tr key={index}>
                    <td key={name}>{name}</td>
                    <td key={location}>{location}</td>
                    <td key={username}>
                      <Button variant="danger" key={("bt1", username)}>
                        Delete
                      </Button>
                    </td>
                    <th key={email}>
                      <Button variant="secondary" key={("bt2", username)}>
                        Update
                      </Button>
                    </th>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">
                  <h5>Nothing to be desplayed.</h5>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default ProfessorPageContainer;
