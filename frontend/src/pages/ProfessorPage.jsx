import React,{Component} from "react"
import ProfessorPageContainer from '../components/ProfessorPageContainer'
import Navi from '../components/Navi'


const ProfessorPage=() => {
    return (
        <div className="App">
            <Navi/>
            <ProfessorPageContainer />

        </div>
    )
}

export default ProfessorPage;