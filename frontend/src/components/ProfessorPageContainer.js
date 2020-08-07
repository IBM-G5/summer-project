import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import {Modal} from "react-bootstrap";
import logoTransparent from "../img/logo_transparent.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ExamForm from "./ExamForm";


class ProfessorPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            exams: [],
            show: false,
            deleteExamModalShow: false,
            examToBeDeleted: -1
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
                    examInfo: `${examen}`,
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
            show: !this.state.show
        })
    }

    DeleteExamHandler(id)
    {
        this.setState({
            deleteExamModalShow: !this.state.deleteExamModalShow,
            examToBeDeleted: id
        })
    }

    DeleteExam(id)
    {
        fetch('http://localhost:8080/delete/'+this.state.examToBeDeleted)
        .then((response) => response.json())
            .then((parsedJSON) =>
                parsedJSON.map((examen, i) => ({
                    classroom: `${examen.classroom}`,
                    date: `${examen.date}`,
                    examInfo: `${examen}`,
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
                    deleteExamModalShow: !this.state.deleteExamModalShow
                }))
    }

    render() {

        const {isLoading} = this.state;
        const faculty = [
            {
                id:1,
                name:"Automatica si Calculatoare"
            },
            {
                id:2,
                name:"Mecanica"
            },
            {
                id:3,
                name:"Constructii"
            },
            {
                id:4,
                name:"Arhitectura si Urbanism"
            },
        ];
        const yearofstudy=[1,2,3,4,5,6]
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

                    <Modal show={this.state.show} onHide={()=>this.AddExamHandler()}>
                        <Modal.Header closeButton ><h5>Add Exam</h5></Modal.Header>
                        <Modal.Body>
                            <ExamForm></ExamForm>
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
                                faculty.map((faculty)=>
                                    <Dropdown.Item eventKey={faculty.id}>{faculty.name}</Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>{' '}

                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle> Year of Study </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                yearofstudy.map((year)=>
                                    <Dropdown.Item eventKey={year}>{year} year</Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

                <Table striped bordered hover className="mt-3">
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
                            const {classroom, date, examInfo, id, index, numberOfSeats, teacher, course} = examen;
                            return (
                                <tr key={index}>
                                    <td key={course}>{course}</td>
                                    <td key={teacher}>{teacher}</td>
                                    <td key={date}>{new Date(date).toString()}</td>
                                    <td key={classroom}>{classroom}</td>
                                    <td key={id, numberOfSeats}>{numberOfSeats}</td>
                                    <td>
                                        <Button onClick={()=>this.DeleteExamHandler()} variant="danger">
                                            Delete
                                        </Button>{' '}
                                    </td>
                                    <th>
                                        <Button variant="secondary">
                                            Update
                                        </Button>
                                    </th>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="7">
                                <h5>No exams to be displayed.</h5>
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
