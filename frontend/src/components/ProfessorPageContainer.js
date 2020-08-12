import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import {Modal} from "react-bootstrap";
import logoTransparent from "../img/logo_transparent.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ExamForm from "./ExamForm";
import axios from "axios";


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
            examToBeDeleted: -1,
            examToBeUpdated: -1,
            faculties:[]
        };
    }

    componentDidMount() {
        this.fetchData();
        this.facultyHandler();
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
                    course: `${examen.exam.course.name}`
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
    AddExamHandler()
    {
        this.setState({
            addExamModalShow: !this.state.addExamModalShow
        })
    }

    UpdateExamHandler(id)
    {
        this.setState({
            updateExamModalShow: !this.state.updateExamModalShow,
            examToBeUpdated: id
        })
    }
    DeleteExamHandler(id)
    {
        this.setState({
            deleteExamModalShow: !this.state.deleteExamModalShow,
            examToBeDeleted: id
        })
    }

    DeleteExam()
    {
        axios.delete('http://localhost:8080/delete/' + this.state.examToBeDeleted)
            .then(response  => {
                this.setState(
                    {
                        examToBeDeleted: -1
                    }
                );
                window.location.reload();
            });
    }
    facultyHandler = () => {
        fetch("http://localhost:8080/getAllFaculties")
            .then((response) => response.json())
            .then((parsedJSON) =>
                parsedJSON.map((f, i) => ({
                    id: `${f.id}`,
                    name: `${f.name}`
                }))
            )
            .then((faculties) =>
                this.setState({
                    faculties,
                    f_isLoading: false,
                })
            )
            .catch((error) => console.log("parsing failed", error));
    }

    render() {

        const {isLoading} = this.state;
        return (

            <Container className="vCenterItems shadow p-4">
                <h5 className="text-left mb-4">
                    <img src={logoTransparent} width="60px" alt="login illustration"/>
                    Exams
                </h5>
                <div className="text-left">


                    <Button onClick={()=>this.AddExamHandler()} variant="success">
                        Add Exam Schedule
                    </Button>{' '}

                    <Modal show={this.state.addExamModalShow} onHide={()=>this.AddExamHandler()}>
                        <Modal.Header closeButton ><h5>Add Exam</h5></Modal.Header>
                        <Modal.Body>
                            <ExamForm add={this.state.add}></ExamForm>
                        </Modal.Body>
                        <Modal.Footer/>
                    </Modal>

                    <Modal show={this.state.updateExamModalShow} onHide={()=>this.UpdateExamHandler()}>
                        <Modal.Header closeButton ><h5>Update Exam</h5></Modal.Header>
                        <Modal.Body>
                            <ExamForm examToBeUpdated={this.state.examToBeUpdated} update={this.state.update} ></ExamForm>
                        </Modal.Body>
                        <Modal.Footer/>
                    </Modal>

                    <Modal show={this.state.deleteExamModalShow} onHide={()=>this.DeleteExamHandler()}>
                        <Modal.Header closeButton ><h5>Delete Exam</h5></Modal.Header>
                        <Modal.Body>
                            <h6>Are you sure you want to delete this exam schedule?</h6>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={()=>this.DeleteExam()}>Delete</Button>
                            <Button onClick={()=> this.setState({deleteExamModalShow: !this.state.deleteExamModalShow})}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle> Faculty </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                this.state.faculties.map((faculty)=>
                                    <Dropdown.Item eventKey={faculty.id}>{faculty.name}</Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>{' '}

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle> Year of Study </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                [1,2,3,4,5,6].map((year)=>
                                    <Dropdown.Item eventKey={year}>{year} year</Dropdown.Item>
                                )
                            }
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
                            const {classroom, date, id, index, numberOfSeats, teacher, course} = examen;
                            return (
                                <tr key={index}>
                                    <td key={id}>{id}</td>
                                    <td key={course}>{course}</td>
                                    <td key={teacher}>{teacher}</td>
                                    <td key={date}>{new Date(date * 1).toLocaleDateString()}</td>
                                    <td key={classroom}>{classroom}</td>
                                    <td key={numberOfSeats}>{numberOfSeats}</td>
                                    <td>
                                        <Button onClick={()=>this.DeleteExamHandler(id)} variant="danger">
                                            Delete
                                        </Button>{' '}
                                    </td>
                                    <th>
                                        <Button onClick={()=>this.UpdateExamHandler(id)} variant="secondary">
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
            <Button variant="warning">Export Excel</Button>
            </Container>
        );
    }
}

export default ProfessorPageContainer;
