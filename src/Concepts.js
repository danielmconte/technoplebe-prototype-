import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const Concepts = () => {
    return (
        <>
            <h1 id="technoplebe"> concepts</h1>
            <p id="explanation">Programming strategies shared across multiple langauges.</p>
            <div className="container">
            <TechBlock text="OOP" exampleone="..." exampletwo="...,"/>
            <TechBlock text="RESTful API" exampleone="..." exampletwo="..."/>
            <TechBlock text="AJAX" exampleone="..." exampletwo="..."/>
            <TechBlock text="..." exampleone="..." exampletwo="..."/>
            <Link to="/">
            <TechBlock text="BACK" exampleone="to" exampletwo="directory"/>
            </ Link>
            </div>
           
        </>
    )


  
   

}

export default Concepts;