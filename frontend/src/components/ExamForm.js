import React, {Component} from 'react';
import Button from "react-bootstrap/cjs/Button";
import exams from '../datas/exams.json';

class ExamForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: '',
            e_id:'',
            academicYear: '',
            f_id: '',
            f_name: '',
            c_id: '',
            c_name: '',
            yearOfStudy: '',
            semester: '',
            t_id: '',
            t_name: '',
            email: '',
            password: '',
            numberOfSeats: '',
            date: '',
            classroom: ''
        }
    };

    saveHandler=(exam)=>{
        alert(this.state.f_name +""+ this.state.yearOfStudy);
        exam.preventDefault();
    }
    handlerFacultyChange=(item)=>{
        this.setState({
            f_name:item.target.value,
        })
    }
    handlerYearOfStudyChange=(item)=>{
        this.setState({
            yearOfStudy:item.target.value,
        })
    }
    handlerCourseChange=(item)=>{
        this.setState({
            c_name:item.target.value,
        })
    }
    handlerAcademicYearChange=(item)=>{
        this.setState({
            academicYear:item.target.value,
        })
    }
    handlerTeacherChange=(item)=>{
        this.setState({
            t_name:item.target.value,
        })
    }
    handlerNoOfSeatsChange=(item)=>{
        this.setState({
            numberOfSeats:item.target.value,
        })
    }
    handlerClassRoomChange=(item)=>{
        this.setState({
            classroom:item.target.value,
        })
    }
    handlerDataChange=(item)=>{
        this.setState({
            date:item.target.value,
        })
    }


    render() {

        const faculty=[ this.state.f_id, this.state.f_name];
        const course=[this.state.c_id, this.state.c_name, this.state.yearOfStudy, this.state.semester];
        const teacher=[this.state.t_id, this.state.t_name, this.state.email, this.state.password];
        const exam=[this.state.e_id, this.state.academicYear, faculty,course,teacher];
        const examSchedule=[this.state.id, exam, this.state.numberOfSeats, this.state.date, this.state.classroom];

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
                            <select className="form-control" value={this.state.f_name} onChange={this.handlerFacultyChange}>
                                {
                                    allFaculty.map((f) =>
                                        <option value={f}>{f}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Year of study</label>
                            <select className="form-control" value={this.state.yearOfStudy} onChange={this.handlerYearOfStudyChange}>
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
                            <select className="form-control" value={this.state.c_name} onChange={this.handlerCourseChange}>
                                {
                                    courses.map((c) =>
                                        <option value={c}>{c}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Teacher</label>
                            <select className="form-control" value={this.state.t_name} onChange={this.handlerTeacherChange}>
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
                            <select className="form-control" value={this.state.academicYear} onChange={this.handlerAcademicYearChange}>
                                {
                                    ["2017","2018","2019","2020"].map((a) =>
                                        <option value={a}>{a}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Number of seats</label>
                            <select className="form-control" value={this.state.numberOfSeats} onChange={this.handlerNoOfSeatsChange}>
                                {
                                    [300, 200, 250].map((s) =>
                                        <option value={s}>{s}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="col">
                            <label>Classroom</label>
                            <select className="form-control" value={this.state.classroom} onChange={this.handlerClassRoomChange}>
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
                            <input type="date" value={this.state.date} onChange={this.handlerDataChange}></input>
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