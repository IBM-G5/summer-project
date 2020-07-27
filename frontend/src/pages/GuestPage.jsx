import React,{Component} from "react"
import '../css/GuestPage.css'

class GuestPage extends Component{
    constructor(props) {
        super(props);
        
        this.focusRef=React.createRef()
    }
    
    focusInput(){
        this.focusRef.current.focus()
    }
    render(){
        const exams=[
            {
                faculty: "Automatica si calculatoare",
                study_year: "1",
                course: "Analiza Matematica",
                teacher: "Paunescu",
                date: "10.02.2020",
                class: "A101"
            },
            {
                faculty: "Mecanica",
                study_year: "1",
                course: "Analiza Matematica",
                teacher: "Paunescu",
                date: "10.02.2020",
                class: "A101"
            },
            {
                faculty: "Electronica si Electronergetica",
                study_year: "1",
                course: "Analiza Matematica",
                teacher: "Paunescu",
                date: "10.02.2020",
                class: "A101"
            }
        ]
        const header = [
            {
                name: "Faculty",
                props: "faculty"
            },
            {
                name: "Year of study",
                props: "study_year"
            },
            {
                name: "Course",
                props: "course"
            },
            {
                name: "Teacher",
                props: "teacher"
            },
            {
                name: "Date",
                props: "date"
            },
            {
                name: "Class",
                props: "class"
            }]
        return(
                <div>
                    <table> 
                        <thead>
                            <tr>
                                {
                                    header.map((x,i)=> <th>{x.name}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    exams.map(x=>
                                    <tr ref={this.focusRef}>
                                    <td>{x.faculty}</td>
                                    <td>{x.study_year}</td>
                                    <td>{x.course}</td>
                                    <td>{x.teacher}</td>
                                    <td>{x.date}</td>
                                    <td>{x.class}</td>
                                    </tr>
                                    )
                                }
                        </tbody>
                    </table>
                </div>
            );
    }
}

export default GuestPage;