import React from 'react';
import './TechBlock.scss';

const TechBlock = ({text, exampleone, exampletwo}) => {
    return (
        <>
        <div id="tech-block">
            <div id="inner-border">
                <h3 id="inner-text">{text}</h3>
                <ul>
                    <li className="examples">{exampleone}</li>
                    <li className="examples">{exampletwo}</li>
                    <li className="examples">etc.</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default TechBlock;