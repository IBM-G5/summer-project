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
    fetch("http://localhost:8080/getall")
      .then((response) => response.json())
      .then((parsedJSON) =>
        parsedJSON.map((examen, i) => ({
          classroom: `${examen.classroom}`,
          date: `${examen.date}`,
          examInfo: `${examen.exam}`,
          id: `${examen.id}`,
          index: i,
          numberOfSeats: `${examen.numberOfSeats}`,
          teacher: `${examen.exam.teacher}`,
          course: `${examen.exam.course}`
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
              <th>Date</th>
              <th>Classroom</th>
              <th>No. of seats</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && this.state.exams.length > 0 ? (
              this.state.exams.map((examen) => {
                const { classroom, date, examInfo, id, index, numberOfSeats, teacher, course } = examen;
                return (
                  <tr key={index}>
                    <td key={course}>{course}</td>
                    <td key={teacher}>{teacher}</td>
                    <td key={date}>{new Date(date).toString()}</td>
                    <td key={classroom}>{classroom}</td>
                    <td key={id, numberOfSeats}>{numberOfSeats}</td>
                    <td key={id}>
                      <Button variant="danger" key={("bt1", classroom)}>
                        Delete
                      </Button>
                    </td>
                    <th key={index}>
                      <Button variant="secondary" key={("bt2", classroom)}>
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
