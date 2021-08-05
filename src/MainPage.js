import React from 'react';
import { Link } from 'react-router-dom';
import TechBlock from './TechBlock'
import './MainPage.scss'

const MainPage = () => {
    return (
 
        <>
        
            <h1 id="technoplebe"> techno_plebe</h1>
            <p id="explanation">Choose an area to learn about.</p>
            <div className="container">
                <Link to="/languages">
                    <TechBlock text="LANGUAGES" exampleone="javascript," exampletwo="python,"/>
                </Link>
                <Link to="/frameworks">
                    <TechBlock text="FRAMEWORKS" exampleone="react," exampletwo="node," example/>
                </Link>
                <Link to="/concepts">
                    <TechBlock text="CONCEPTS" exampleone="oop," exampletwo="ajax," />
                </Link>
                <Link to="/databases">
                    <TechBlock text="DATABASES" exampleone="sql," exampletwo="nosql,"  />
                </Link>
                <Link to="/algorithms">
                <TechBlock text="ALGORITHMS" exampleone="sorting," exampletwo="dijkstra's,"  />
                </Link>
                <TechBlock text="BLANKBLOCK" exampleone="blank," exampletwo="blank," />
                <TechBlock text="BLANKBLOCK" exampleone="blank," exampletwo="blank," />
                <TechBlock text="BLANKBLOCK" exampleone="blank," exampletwo="blank," />
                
               
            </div>
        
        </>
    )
}

export default MainPage;