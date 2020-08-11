import React, {Component} from 'react';
import Button from "react-bootstrap/cjs/Button";

class ExamForm extends Component {
    constructor(props) {
        super(props);
        this.state={
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
            classroom_state: null
        }
    };

    componentDidMount()
    {
        {this.updateHandler()}
    }

    saveHandler=()=>{

        if(this.props.add) {

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
        }
        else if(this.props.update){

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

    updateHandler=()=>
    {
        if(this.props.update){

            fetch('http://localhost:8080/getall')
                .then((response) => response.json())
                .then((parsedJSON) => {
                        parsedJSON.filter(examfilter =>parseInt(examfilter.id,10)===parseInt(this.props.examToBeUpdated,10)).map((e) =>
                            {
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
            f_name_state:item.target.value
        })
    };
    handlerYearOfStudyChange = (item) => {
        this.setState({
            c_yearOfStudy_state:item.target.value
        })
    };
    handlerSemesterChange = (item) => {
        this.setState({
            c_semester_state: item.target.value
        })
    };
    handlerCourseChange = (item) => {
        this.setState({
            c_name_state:item.target.value
        })
    };
    handlerAcademicYearChange = (item) => {
        this.setState({
            academicYear_state:item.target.value
        })
    };
    handlerTeacherChange = (item) => {
        this.setState({
            t_name_state:item.target.value
        })
    };
    handlerNoOfSeatsChange = (item) => {
        this.setState({
            numberOfSeats_state:item.target.value
        })
    };
    handlerClassRoomChange = (item) => {
        this.setState({
            classroom_state:item.target.value
        })
    };
    handlerDataChange = (item) => {
        this.setState({
            date_state:item.target.value
        })
    };


    render() {

        // const faculty=[ this.state.f_id, this.state.f_name];
        // const course=[this.state.c_id, this.state.c_name, this.state.yearOfStudy, this.state.semester];
        // const teacher=[this.state.t_id, this.state.t_name, this.state.email, this.state.password];
        // const exam=[this.state.e_id, this.state.academicYear, faculty,course,teacher];
        // const examSchedule=[this.state.id, exam, this.state.numberOfSeats, this.state.date, this.state.classroom];
        //
        // this.state.examToAdd=examSchedule;

        const allFaculty = ["Automatica si Calculatoare","Mecanica","Constructii","Arhitectura si Urbanism"];
        const courses = ["Programare", "Algebra", "Analiza Matematica"];
        const teachers = ["Paunescu", "Martinescu"];
        const rooms = ["A101", "D1"];

        return (
            <div>
                <form onSubmit={this.saveHandler}>
                    <div className="form-row">
                        <div className="col">
                            <label> Faculty</label>
                            <select className="form-control" value={this.state.f_name_state} onChange={this.handlerFacultyChange} required>
                                <option value={this.state.f_name_state} disabled selected>{this.state.f_name_state}</option>
                                {
                                    allFaculty.map((f) =>
                                        <option value={f}>{f}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Teacher</label>
                            <select className="form-control" value={this.state.t_name_state} onChange={this.handlerTeacherChange} required>
                                <option value={this.state.t_name_state} disabled selected>{this.state.t_name_state}</option>
                                {
                                    teachers.map((t) =>
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
                            <select className="form-control" value={this.state.c_name_state} onChange={this.handlerCourseChange} required>
                                <option value={this.state.c_name_state}  disabled selected>{this.state.c_name_state} </option>
                                {
                                    courses.map((c) =>
                                        <option value={c}>{c}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Year of study</label>
                            <select className="form-control" value={this.state.c_yearOfStudy_state} onChange={this.handlerYearOfStudyChange} required>
                                <option value={this.state.c_yearOfStudy_state} disabled selected>{this.state.c_yearOfStudy_state}</option>
                                {
                                    [1, 2, 3, 4, 5, 6].map((y) =>
                                        <option value={y}>{y}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Semester</label>
                            <select className="form-control" value={this.state.c_semester_state} onChange={this.handlerSemesterChange} required>
                                <option value={this.state.c_semester_state} disabled selected>{this.state.c_semester_state}</option>
                                {
                                    [1, 2].map((y) =>
                                        <option value={y}>{y}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="col">
                            <label>Academic Year</label>
                            <select className="form-control" value={this.state.academicYear_state} onChange={this.handlerAcademicYearChange}required>
                                <option value={this.state.academicYear_state} disabled selected>{this.state.academicYear_state}</option>
                                {
                                    ["2017","2018","2019","2020"].map((a) =>
                                        <option value={a}>{a}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Number of seats</label>
                            <select className="form-control" value={this.state.numberOfSeats_state} onChange={this.handlerNoOfSeatsChange}required>
                                <option value={this.state.numberOfSeats_state} disabled selected>{this.state.numberOfSeats_state}</option>
                                {
                                    [300, 200, 250].map((s) =>
                                        <option value={s}>{s}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Classroom</label>
                            <select className="form-control" value={this.state.classroom_state} onChange={this.handlerClassRoomChange}required>
                                <option value={this.state.classroom_state}  disabled selected>{this.state.classroom_state} </option>
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
                            <input type="date" value={this.state.date_state} onChange={this.handlerDataChange} required></input>
                        </div>
                        <div className="col">
                            <label>Time</label>{'  '}
                            <input type="time" min="08:00" max="20:00" ></input>{'  '}
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