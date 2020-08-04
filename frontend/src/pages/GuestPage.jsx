import React,{Component} from "react"
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