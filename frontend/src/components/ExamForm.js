import React, {Component} from 'react';
import Button from "react-bootstrap/cjs/Button";

class ExamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_state: null,
            e_id_state: null,
            academicYear_state: null,
            f_id_state: null,
            f_name_state: null,
            c_id_state: null,
            c_name_state: null,
            c_semester_state: null,
            c_yearOfStudy_state: null,
            t_id_state: null,
            t_name_state: null,
            email_state: "pisi@prof.com",
            password_state: "pass",
            numberOfSeats_state: null,
            date_state: null,
            classroom_state: null,
            teachers: [],
            courses: [],
            faculties: []
        }
    };

    componentDidMount() {
        this.updateHandler();
        //this.teachersHandler();
        //this.coursesHandler();
        //this.facultiesHandler();
    }

    saveHandler = () => {

        if (this.props.add) {

            fetch("http://localhost:8080/create", {
                method: 'POST',
                body: JSON.stringify({
                    id: `${this.state.id_state}`,
                    exam: {
                        id: `${this.state.e_id_state}`,
                        academicYear: `${this.state.academicYear_state}`,
                        faculty: {
                            id: `${this.state.f_id_state}`,
                            name: `${this.state.f_name_state}`
                        },
                        course: {
                            id: `${this.state.c_id_state}`,
                            name: `${this.state.c_name_state}`,
                            semester: `${this.state.c_semester_state}`,
                            yearOfStudy: `${this.state.c_yearOfStudy_state}`
                        },
                        teacher: {
                            id: `${this.state.t_id_state}`,
                            name: `${this.state.t_name_state}`,
                            email: `${this.state.email_state}`,
                            password: `${this.state.password_state}`
                        },
                    },
                    numberOfSeats: `${this.state.numberOfSeats_state}`,
                    date: `${this.state.date_state}`,
                    classroom: `${this.state.classroom_state}`
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('The exam schedule was saved!')
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else if (this.props.update) {

            fetch("http://localhost:8080/update/" + this.props.examToBeUpdated, {
                method: 'PUT',
                body: JSON.stringify({
                    id: `${this.state.id_state}`,
                    exam: {
                        id: `${this.state.e_id_state}`,
                        academicYear: `${this.state.academicYear_state}`,
                        faculty: {
                            id: `${this.state.f_id_state}`,
                            name: `${this.state.f_name_state}`
                        },
                        course: {
                            id: `${this.state.c_id_state}`,
                            name: `${this.state.c_name_state}`,
                            semester: `${this.state.c_semester_state}`,
                            yearOfStudy: `${this.state.c_yearOfStudy_state}`
                        },
                        teacher: {
                            id: `${this.state.t_id_state}`,
                            name: `${this.state.t_name_state}`,
                            email: `${this.state.email_state}`,
                            password: `${this.state.password_state}`
                        },
                    },
                    numberOfSeats: `${this.state.numberOfSeats_state}`,
                    date: `${this.state.date_state}`,
                    classroom: `${this.state.classroom_state}`
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('The exam schedule was updated!');
                    window.location.reload();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    updateHandler = () => {
        if (this.props.update) {

            fetch('http://localhost:8080/getall')
                .then((response) => response.json())
                .then((parsedJSON) => {
                        parsedJSON.filter(examfilter => parseInt(examfilter.id, 10) === parseInt(this.props.examToBeUpdated, 10)).map((e) => {
                                this.setState(
                                    {
                                        academicYear_state: `${e.exam.academicYear}`,
                                        f_name_state: `${e.exam.faculty.name}`,
                                        c_name_state: `${e.exam.course.name}`,
                                        c_semester_state: `${e.exam.course.semester}`,
                                        c_yearOfStudy_state: `${e.exam.course.yearOfStudy}`,
                                        t_name_state: `${e.exam.teacher.name}`,
                                        numberOfSeats_state: `${e.numberOfSeats}`,
                                        date_state: `${e.date}`,
                                        classroom_state: `${e.classroom}`,
                                        id_state: `${e.id}`,
                                        e_id_state: `${e.exam.id}`,
                                        f_id_state: `${e.exam.faculty.id}`,
                                        c_id_state: `${e.exam.course.id}`,
                                        t_id_state: `${e.exam.teacher.id}`,
                                        email_state: "pisi@prof.com",
                                        password_state: "pass",
                                    })
                            }
                        )
                    }
                )
                .then((exams) =>
                    this.setState({
                        exams,
                        isLoading: false,
                    })
                )
                .catch((error) => console.log("parsing failed", error));
        }

    }
    handlerFacultyChange = (item) => {
        this.setState({
            f_name_state: item.target.value
        })
    };
    handlerYearOfStudyChange = (item) => {
        this.setState({
            c_yearOfStudy_state: item.target.value
        })
    };
    handlerSemesterChange = (item) => {
        this.setState({
            c_semester_state: item.target.value
        })
    };
    handlerCourseChange = (item) => {
        this.setState({
            c_name_state: item.target.value
        })
    };
    handlerAcademicYearChange = (item) => {
        this.setState({
            academicYear_state: item.target.value
        })
    };
    handlerTeacherChange = (item) => {
        this.setState({
            t_name_state: item.target.value
        })
    };
    handlerNoOfSeatsChange = (item) => {
        this.setState({
            numberOfSeats_state: item.target.value
        })
    };
    handlerClassRoomChange = (item) => {
        this.setState({
            classroom_state: item.target.value
        })
    };
    handlerDataChange = (item) => {
        this.setState({
            date_state: item.target.value
        })
    };
    teachersHandler = () => {
        fetch("http://localhost:8080/getAllTeachers")
            .then((response) => response.json())
            .then((parsedJSON) =>
                parsedJSON.map((t, i) => ({
                    id: `${t.id}`,
                    name: `${t.name}`
                }))
            )
            .then((teachers) =>
                this.setState({
                    teachers,
                    isLoading: false,
                })
            )
            .catch((error) => console.log("parsing failed", error));
    }
    coursesHandler = () => {
        fetch("http://localhost:8080/getAllCourses")
            .then((response) => response.json())
            .then((parsedJSON) =>
                parsedJSON.map((c, i) => ({
                    id: `${c.id}`,
                    name: `${c.name}`
                }))
            )
            .then((courses) =>
                this.setState({
                    courses,
                    isLoading: false,
                })
            )
            .catch((error) => console.log("parsing failed", error));
    }
    facultiesHandler = () => {
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
                    isLoading: false,
                })
            )
            .catch((error) => console.log("parsing failed", error));
    }

    render() {

        const allFaculties = ["Automatica si Calculatoare", "Mecanica", "Constructii", "Arhitectura si Urbanism", "Electronica", "Elctrotehnica", "Management"];
        const allCourses = ["Programare", "Algebra", "Analiza Matematica", "Java", "Engleza", "MTP", "FIE", "FIETC"];
        const allTeachers = ["Paunescu", "Andronescu", "Bojan", "Hedrea"];
        const rooms = ["A101", "D1", "A201", "B200"];

        return (

            <div>
                <form onSubmit={this.saveHandler}>
                    <div className="form-row">
                        <div className="col">
                            <label> Faculty</label>

                            {/*<input value={this.state.f_name_state} type="text" list="faculties" onChange={this.handlerFacultyChange} required/>*/}
                            {/*<datalist id="faculties">*/}
                            {/*    {*/}
                            {/*        allFaculties.map((f) =>*/}
                            {/*            <option value={f}></option>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</datalist>*/}

                            <select className="form-control" value={this.state.f_name_state}
                                    onChange={this.handlerFacultyChange} required>
                                <option value={this.state.f_name_state} disabled
                                        selected>{this.state.f_name_state}</option>
                                {
                                    allFaculties.map((f) =>
                                        <option value={f}>{f}</option>
                                    )
                                }
                            </select>

                        </div>
                        <div className="col">
                            <label>Teacher</label>

                            {/*<input value={this.state.t_name_state} type="text" list="teachers" onChange={this.handlerTeacherChange} required></input>*/}
                            {/*<datalist id="teachers">*/}
                            {/*    {*/}
                            {/*        allTeachers.map((t) =>*/}
                            {/*            <option value={t}></option>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</datalist>*/}

                            <select className="form-control" value={this.state.t_name_state}
                                    onChange={this.handlerTeacherChange} required>
                                <option value={this.state.t_name_state} disabled
                                        selected>{this.state.t_name_state}</option>
                                {
                                    allTeachers.map((t) =>
                                        <option value={t}>{t}</option>
                                    )
                                }
                            </select>

                        </div>
                    </div>

                    <br/>
                    <div className="form-row">
                        <div className="col">
                            <label>Course</label>

                            {/*<input value={this.state.c_name_state} type="text" list="courses" onChange={this.handlerCourseChange} required/>*/}
                            {/*<datalist id="courses">*/}
                            {/*    {*/}
                            {/*        allCourses.map((c) =>*/}
                            {/*            <option value={c}></option>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</datalist>*/}

                            <select className="form-control" value={this.state.c_name_state}
                                    onChange={this.handlerCourseChange} required>
                                <option value={this.state.c_name_state} disabled
                                        selected>{this.state.c_name_state} </option>
                                {
                                    allCourses.map((c) =>
                                        <option value={c}>{c}</option>
                                    )
                                }
                            </select>

                        </div>
                        <div className="col">
                            <label>Year of study</label>
                            <select className="form-control" value={this.state.c_yearOfStudy_state}
                                    onChange={this.handlerYearOfStudyChange} required>
                                <option value={this.state.c_yearOfStudy_state} disabled
                                        selected>{this.state.c_yearOfStudy_state}</option>
                                {
                                    [1, 2, 3, 4, 5, 6].map((y) =>
                                        <option value={y}>{y}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <br/>

                    <div className="form-row">
                        <div className="col">
                            <label>Semester</label>
                            <select className="form-control" value={this.state.c_semester_state}
                                    onChange={this.handlerSemesterChange} required>
                                <option value={this.state.c_semester_state} disabled
                                        selected>{this.state.c_semester_state}</option>
                                {
                                    [1, 2].map((y) =>
                                        <option value={y}>{y}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Academic Year</label>
                            <select className="form-control" value={this.state.academicYear_state}
                                    onChange={this.handlerAcademicYearChange} required>
                                <option value={this.state.academicYear_state} disabled
                                        selected>{this.state.academicYear_state}</option>
                                {
                                    ["2017", "2018", "2019", "2020"].map((a) =>
                                        <option value={a}>{a}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <br/>

                    <div className="form-row">

                        <div className="col">
                            <label>Number of seats</label>

                            {/*<input value={this.state.numberOfSeats_state} type="text" list="seats" onChange={this.handlerNoOfSeatsChange} required/>*/}
                            {/*<datalist id="seats">*/}
                            {/*    {*/}
                            {/*        [100,200,250,300].map((n) =>*/}
                            {/*            <option value={n}>{n}</option>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</datalist>*/}

                            <select className="form-control" value={this.state.numberOfSeats_state}
                                    onChange={this.handlerNoOfSeatsChange} required>
                                <option value={this.state.numberOfSeats_state} disabled
                                        selected>{this.state.numberOfSeats_state}</option>
                                {
                                    [300, 200, 250].map((s) =>
                                        <option value={s}>{s}</option>
                                    )
                                }
                            </select>

                        </div>
                        <div className="col">
                            <label>Classroom</label>

                            {/*<input value={this.state.classroom_state} type="text" list="classroom" onChange={this.handlerClassRoomChange} required/>*/}
                            {/*<datalist id="classroom">*/}
                            {/*    {*/}
                            {/*        rooms.map((c) =>*/}
                            {/*            <option value={c}>{c}</option>*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</datalist>*/}

                            <select className="form-control" value={this.state.classroom_state}
                                    onChange={this.handlerClassRoomChange} required>
                                <option value={this.state.classroom_state} disabled
                                        selected>{this.state.classroom_state} </option>
                                {
                                    rooms.map((r) =>
                                        <option value={r}>{r}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="col">
                            <label>Date</label>{'  '}
                            <input type="date" value={this.state.date} onChange={this.handlerDataChange} required></input>
                        </div>
                        <div className="col">
                            <label>Time</label>{'  '}
                            <input type="time" min="08:00" max="20:00"></input>{'  '}
                        </div>
                    </div>
                    <br/>
                    <Button type="submit" color="success">Save the exam</Button>
                </form>
            </div>
        );
    }
}

export default ExamForm;