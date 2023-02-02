import React from "react";
import './resume.scss';

function Resume() {

    return (
        <div className='resume' id='resume'>
            <h1> Resume </h1>
            <p> Download <a href='https://drive.google.com/file/d/1X_EdxPMs36wbF1WFk3FkU7lmvAr0W3zh/view?usp=share_link' targer='_blank' rel='noreferrer'>Resume</a></p>
            <h3>Proficiencies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Resume;