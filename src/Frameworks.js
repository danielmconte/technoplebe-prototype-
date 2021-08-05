import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const Frameworks = () => {
    return (
        <>
            <h1 id="technoplebe"> frameworks</h1>
            <p id="explanation">Select from a collection of frontend and backend frameworks.</p>
            <div className="container">
            <TechBlock text="REACT" exampleone="..." exampletwo="...,"/>
            <TechBlock text="ANGULAR" exampleone="..." exampletwo="..."/>
            <TechBlock text="NODE" exampleone="..." exampletwo="..."/>
            <TechBlock text="FLASK" exampleone="..." exampletwo="..."/>
            <Link to="/">
            <TechBlock text="BACK" exampleone="to" exampletwo="directory"/>
            </ Link>
            </div>
           
        </>
    )
    

}

export default Frameworks;