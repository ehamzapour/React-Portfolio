import React from "react";
import './resume.scss';

function Resume() {

    return (
        <div className='resume' id='resume'>
            <h2> Resume </h2>
            <p> Download <a href='#' targer='_blank' rel='noreferrer'>Resume</a></p>
            <h3>Full Stack Development</h3>
            <p> Experienced in:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDBt</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Resume;