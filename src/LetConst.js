import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const LetConst = () => {
    return (
        <>
            <h1 id="technoplebe"> es6</h1>
            <p id="explanation">New ways to declare variables, beyond var.</p>
            <div className="container">
            <div className="blackbox">
                <h3>LET</h3>
                <p className="green-text">let scooby = 'no';</p>
                <br></br>
                <p className="gray-text">//You cannot then redeclare:</p>
                <p className="green-text">let scooby = 'yes'; &nbsp;&nbsp;<span className="red-text">ERROR!</span></p>
                <br></br>
                <p className="gray-text">//But you can reassign just fine:</p>
                <p className="green-text">scooby = 'yes';</p>
             
            </div>
            <Link to="/es6">
            <TechBlock text="BACK" exampleone="to" exampletwo="es6,"/>
            </ Link>
            </div>
           
        </>
    )
}


export default LetConst;