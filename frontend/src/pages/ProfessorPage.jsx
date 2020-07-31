import React,{Component} from "react"
//import Navi from '../components/Navi'
//import '../css/GuestPage.css'
import ProfessorPageContainer from '../components/ProfessorPageContainer'
import Navi from '../components/Navi'


const GuestPage=() => {
    return (
        <div className="App">
            <Navi/>
            <ProfessorPageContainer />

        </div>
    )
}

export default GuestPage;