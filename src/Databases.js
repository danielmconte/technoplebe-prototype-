import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const Databases = () => {
    return (
        <>
            <h1 id="technoplebe"> databases</h1>
            <p id="explanation">Tables vs. NoTables.</p>
            <div className="container">
            <TechBlock text="SQL" exampleone="..." exampletwo="...,"/>
            <TechBlock text="NoSQL" exampleone="..." exampletwo="..."/>
          
            <Link to="/">
            <TechBlock text="BACK" exampleone="to" exampletwo="directory"/>
            </ Link>
            </div>
           
        </>
    )

  
 

}

export default Databases;