import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";
import logoTransparent from "../img/logo_transparent.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ExamForm from "./ExamForm";
import axios from "axios";

import { Redirect, withRouter } from "react-router-dom";

class ProfessorPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: true,
      update: true,
      isLoading: true,
      exams: [],
      addExamModalShow: false,
      updateExamModalShow: false,
      deleteExamModalShow: false,
      exportModal: false,
      examToBeDeleted: -1,
      examToBeUpdated: -1,
      facultyFilterValue: null,
      yearOfStudyFilterValue: null,
      facultyFilter: false,
      yearOfStudyFilter: false,
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
          id: `${examen.id}`,
          index: i,
          numberOfSeats: `${examen.numberOfSeats}`,
          teacher: `${examen.exam.teacher.name}`,
          course: `${examen.exam.course.name}`,
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
  AddExamHandler() {
    this.setState({
      addExamModalShow: !this.state.addExamModalShow,
    });
  }

  ExportModalHandler() {
    this.setState({
      exportModal: !this.state.exportModal,
    });
  }

  UpdateExamHandler(id) {
    this.setState({
      updateExamModalShow: !this.state.updateExamModalShow,
      examToBeUpdated: id,
    });
  }
  DeleteExamHandler(id) {
    this.setState({
      deleteExamModalShow: !this.state.deleteExamModalShow,
      examToBeDeleted: id,
    });
  }

  DeleteExam() {
    axios
      .delete("http://localhost:8080/delete/" + this.state.examToBeDeleted)
      .then((response) => {
        this.setState({
          examToBeDeleted: -1,
        });
        window.location.reload();
      });
  }

  ExportToExcel() {
    window.open("http://localhost:8080/download/exam-schedules.xlsx", "_blank");
  }

  FilterExam(type, e) {
    var API_URL_FILTER = "";

    if (e == "Select a faculty") {
      this.setState({
        facultyFilterValue: "",
        facultyFilter: false,
      });

      this.fetchData();
      return;
    } else if (e == "Select a") {
      this.setState({
        yearOfStudyFilterValue: "",
        yearOfStudyFilter: false,
      });

      this.fetchData();
      return;
    }

    if (this.state.facultyFilter && this.state.yearOfStudyFilter)
      type = "filterByYearOfStudyAndFaculty";

    switch (type) {
      case "filterByFaculty":
        API_URL_FILTER = "http://localhost:8080/filterByFaculty/" + e;
        this.setState({
          facultyFilterValue: e,
          facultyFilter: true,
        });
        break;

      case "filterByYearOfStudy":
        API_URL_FILTER = "http://localhost:8080/filterByYearOfStudy/" + e;
        this.setState({
          yearOfStudyFilterValue: e,
          yearOfStudyFilter: true,
        });
        break;

      case "filterByYearOfStudyAndFaculty":
        API_URL_FILTER =
          "http://localhost:8080/filterByYearOfStudyAndFaculty/" +
          this.state.yearOfStudyFilterValue +
          "&" +
          this.state.facultyFilterValue;
        break;
    }
    console.log(e, type, API_URL_FILTER);

    fetch(API_URL_FILTER)
      .then((response) => response.json())
      .then((parsedJSON) =>
        parsedJSON.map((examen, i) => ({
          classroom: `${examen.classroom}`,
          date: `${examen.date}`,
          id: `${examen.id}`,
          index: i,
          numberOfSeats: `${examen.numberOfSeats}`,
          teacher: `${examen.exam.teacher.name}`,
          course: `${examen.exam.course.name}`,
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
    const faculty = [
      {
        id: 0,
        name: "Select a faculty",
      },
      {
        id: 1,
        name: "Automatica si Calculatoare",
      },
      {
        id: 2,
        name: "Mecanica",
      },
      {
        id: 3,
        name: "Constructii",
      },
      {
        id: 4,
        name: "Arhitectura si Urbanism",
      },
    ];
    const yearofstudy = ["Select a", 1, 2, 3, 4, 5, 6];
    return (
      <Container className="vCenterItems shadow p-4">
        <h5 className="text-left mb-4">
          <img src={logoTransparent} width="60px" alt="login illustration" />
          Exams
        </h5>
        <div className="text-left">
          <Button onClick={() => this.AddExamHandler()} variant="success">
            Add Exam Schedule
          </Button>{" "}
          <Modal
            show={this.state.exportModal}
            onHide={() => this.ExportModalHandler()}
          >
            <Modal.Header closeButton>
              <h5>Export Table</h5>
            </Modal.Header>
            <Modal.Body>
              <h3>Table Exported Successfuly!</h3>
            </Modal.Body>
            <Modal.Footer />
          </Modal>
          <Modal
            show={this.state.addExamModalShow}
            onHide={() => this.AddExamHandler()}
          >
            <Modal.Header closeButton>
              <h5>Add Exam</h5>
            </Modal.Header>
            <Modal.Body>
              <ExamForm add={this.state.add}></ExamForm>
            </Modal.Body>
            <Modal.Footer />
          </Modal>
          <Modal
            show={this.state.updateExamModalShow}
            onHide={() => this.UpdateExamHandler()}
          >
            <Modal.Header closeButton>
              <h5>Update Exam</h5>
            </Modal.Header>
            <Modal.Body>
              <ExamForm
                examToBeUpdated={this.state.examToBeUpdated}
                update={this.state.update}
              ></ExamForm>
            </Modal.Body>
            <Modal.Footer />
          </Modal>
          <Modal
            show={this.state.deleteExamModalShow}
            onHide={() => this.DeleteExamHandler()}
          >
            <Modal.Header closeButton>
              <h5>Delete Exam</h5>
            </Modal.Header>
            <Modal.Body>
              <h6>Are you sure you want to delete this exam schedule?</h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => this.DeleteExam()}>
                Delete
              </Button>
              <Button
                onClick={() =>
                  this.setState({
                    deleteExamModalShow: !this.state.deleteExamModalShow,
                  })
                }
              >
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
          <Dropdown
            as={ButtonGroup}
            onSelect={(e) => this.FilterExam("filterByFaculty", e)}
          >
            <Dropdown.Toggle> Faculty </Dropdown.Toggle>
            <Dropdown.Menu>
              {faculty.map((faculty) => (
                <Dropdown.Item eventKey={faculty.name}>
                  {faculty.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>{" "}
          <Dropdown
            as={ButtonGroup}
            onSelect={(e) => this.FilterExam("filterByYearOfStudy", e)}
          >
            <Dropdown.Toggle> Year of Study </Dropdown.Toggle>
            <Dropdown.Menu>
              {yearofstudy.map((year) => (
                <Dropdown.Item eventKey={year}>{year} year</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
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
                const {
                  classroom,
                  date,
                  id,
                  index,
                  numberOfSeats,
                  teacher,
                  course,
                } = examen;
                return (
                  <tr key={index}>
                    <td key={id}>{id}</td>
                    <td key={course}>{course}</td>
                    <td key={teacher}>{teacher}</td>
                    <td key={date}>
                      {new Date(date * 1).toLocaleDateString()}
                    </td>
                    <td key={classroom}>{classroom}</td>
                    <td key={numberOfSeats}>{numberOfSeats}</td>
                    <td>
                      <Button
                        onClick={() => this.DeleteExamHandler(id)}
                        variant="danger"
                      >
                        Delete
                      </Button>{" "}
                    </td>
                    <th>
                      <Button
                        onClick={() => this.UpdateExamHandler(id)}
                        variant="secondary"
                      >
                        Update
                      </Button>
                    </th>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8">
                  <h5>No exams to be displayed.</h5>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button variant="warning" onClick={() => this.ExportToExcel()}>
          Export Excel
        </Button>
      </Container>
    );
  }
}

export default ProfessorPageContainer;
