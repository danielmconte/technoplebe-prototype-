import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const Languages = () => {
    return (
        <>
            <h1 id="technoplebe"> languages</h1>
            <p id="explanation">Pick a language that interests you.</p>
            <div className="container">
            <Link to="/javascript">
                <TechBlock text="JAVASCRIPT" exampleone="es6," exampletwo="higher order,"/>
            </ Link>
            <TechBlock text="PYTHON" exampleone="..." exampletwo="..."/>
            <TechBlock text="RUST" exampleone="..." exampletwo="..."/>
            <TechBlock text="C++" exampleone="..." exampletwo="..."/>
            <Link to="/">
                <TechBlock text="BACK" exampleone="to" exampletwo="directory"/>
            </ Link>
            </div>
        </>
    )


}

export default Languages;