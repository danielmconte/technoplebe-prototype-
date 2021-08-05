import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'

const ES6 = () => {
    return (
        <>
            <h1 id="technoplebe"> es6</h1>
            <p id="explanation">Added to Javascript in 2015, <b>E</b>cma<b>S</b>cript6 introduced new features.</p>
            <div className="container">

            <Link to="/letconst">
            <TechBlock text="let&const" exampleone="let go" exampletwo="of var,"/>
            </ Link>
            
            <TechBlock text="=> functions" exampleone="arrow" exampletwo="functions,"/>
            <TechBlock text="rest&spread" exampleone="...," exampletwo="...,"/>
            <TechBlock text="destructuring" exampleone="let {bill, ted}" exampletwo="= excellent;"/>
            
            <Link to="/javascript">
            <TechBlock text="BACK" exampleone="to" exampletwo="javascript"/>
            </ Link>
            </div>
           
        </>
    )
}


export default ES6;