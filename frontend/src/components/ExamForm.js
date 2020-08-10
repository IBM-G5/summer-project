import React, {Component} from 'react';
import Button from "react-bootstrap/cjs/Button";
import exams from '../datas/exams.json';

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
            yearOfStudy_state: null,
            semester_state: 2,
            t_id_state: null,
            t_name_state: null,
            email_state: "@mail",
            password_state: "pass",
            numberOfSeats_state: null,
            date_state: null,
            classroom_state: null
        }
    };

    saveHandler=()=>{

        fetch("http://localhost:8080/create",{
            method: 'POST',
            body:JSON.stringify({
                id: `${this.state.id_state}`,
                exam:{
                    id: `${this.state.e_id_state}`,
                    academicYear: `${this.state.academicYear_state}`,
                    faculty:{
                        id: `${this.state.f_id_state}`,
                        name: `${this.state.f_name_state}`
                    },
                    course:{
                        id:`${this.state.c_id_state}`,
                        name: `${this.state.c_name_state}`,
                    },
                    teacher:{
                        id:`${this.state.t_id_state}`,
                        name:`${this.state.t_name_state}`,
                        email:`${this.state.email_state}`,
                        password:`${this.state.password_state}`
                    },
                },
                numberOfSeats:`${this.state.numberOfSeats_state}`,
                date: `${this.state.date_state}`,
                classroom: `${this.state.classroom_state}`
            })
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
    handlerFacultyChange=(item)=>{
        this.setState({
            f_name_state:item.target.value,
        })
    }
    handlerYearOfStudyChange=(item)=>{
        this.setState({
            yearOfStudy_state:item.target.value,
        })
    }
    handlerCourseChange=(item)=>{
        this.setState({
            c_name_state:item.target.value,
        })
    }
    handlerAcademicYearChange=(item)=>{
        this.setState({
            academicYear_state:item.target.value,
        })
    }
    handlerTeacherChange=(item)=>{
        this.setState({
            t_name_state:item.target.value,
        })
    }
    handlerNoOfSeatsChange=(item)=>{
        this.setState({
            numberOfSeats_state:item.target.value,
        })
    }
    handlerClassRoomChange=(item)=>{
        this.setState({
            classroom_state:item.target.value,
        })
    }
    handlerDataChange=(item)=>{
        this.setState({
            date_state:item.target.value,
        })
    }


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
                                <option value="" disabled selected>Select a faculty</option>
                                {
                                    allFaculty.map((f) =>
                                        <option value={f}>{f}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Year of study</label>
                            <select className="form-control" value={this.state.yearOfStudy_state} onChange={this.handlerYearOfStudyChange} required>
                                <option value="" disabled selected>Select the year of study</option>
                                {
                                    [1, 2, 3, 4, 5, 6].map((y) =>
                                        <option value={y}>{y} year</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="form-row">
                        <div className="col">
                            <label>Course</label>
                            <select className="form-control" value={this.state.c_name_state} onChange={this.handlerCourseChange}required>
                                <option value="" disabled selected>Select a course</option>
                                {
                                    courses.map((c) =>
                                        <option value={c}>{c}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Teacher</label>
                            <select className="form-control" value={this.state.t_name_state} onChange={this.handlerTeacherChange}required>
                                <option value="" disabled selected>Select a teacher</option>
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
                            <label>Academic Year</label>
                            <select className="form-control" value={this.state.academicYear_state} onChange={this.handlerAcademicYearChange}required>
                                <option value="" disabled selected>Select the academic year</option>
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
                                <option value="" disabled selected>Select the number of seats</option>
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
                                <option value="" disabled selected>Select a classroom</option>
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