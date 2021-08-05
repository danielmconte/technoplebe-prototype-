import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const HigherOrder = () => {
    return (
        <>
            <h1 id="technoplebe"> higher order functions</h1>
            <p id="explanation">Important array methods that use callbacks.</p>
            <div className="container">
            <TechBlock text="forEach" exampleone="..." exampletwo="..."/>
            <TechBlock text="map" exampleone="..." exampletwo="..."/>
            <TechBlock text="filter" exampleone="..." exampletwo="..."/>
            <TechBlock text="reduce" exampleone="..." exampletwo="..."/>
            <Link to="/javascript">
            <TechBlock text="BACK" exampleone="to" exampletwo="javascript"/>
            </ Link>
            </div>
           
        </>
    )
}


export default HigherOrder;