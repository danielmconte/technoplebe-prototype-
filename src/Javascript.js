import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'


const Javascript = () => {
    return (
        <>
            <h1 id="technoplebe"> javascript</h1>
            <p id="explanation">A high-level language, known to plays fast and loose with the rules.</p>
            <div className="container">

            <Link to="/es6">
            <TechBlock text="ES6" exampleone="=>" exampletwo="...rest,"/>
            </ Link>

            <Link to="/higherorder">
            <TechBlock text="HIGHER ORDER" exampleone="forEach" exampletwo="filter"/>
            </ Link>
            
            <Link to="/languages">
            <TechBlock text="BACK" exampleone="to" exampletwo="languages"/>
            </ Link>
            </div>
           
        </>
    )
}

export default Javascript;