import React,{Component} from "react"
//import Navi from '../components/Navi'
//import '../css/GuestPage.css'
import GuestPageContainer from '../components/GuestPageContainer'
import Navi from '../components/Navi'

const GuestPage=() =>{
    return (
        <div className="App">
            <Navi/>
            <GuestPageContainer/>

        </div>
    );
};



export default GuestPage;