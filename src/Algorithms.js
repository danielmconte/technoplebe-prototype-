import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const Algorithms = () => {
    return (
        <>
            <h1 id="technoplebe"> algorithms</h1>
            <p id="explanation">Rules to be followed.</p>
            <div className="container">
            <TechBlock text="SORTING" exampleone="..." exampletwo="...,"/>
            <TechBlock text="DIJKSTRA'S" exampleone="..." exampletwo="..."/>
            <TechBlock text="..." exampleone="..." exampletwo="..."/>
            <TechBlock text="..." exampleone="..." exampletwo="..."/>
            <Link to="/">
            <TechBlock text="BACK" exampleone="to" exampletwo="directory"/>
            </ Link>
            </div>
           
        </>
    )




}

export default Algorithms;