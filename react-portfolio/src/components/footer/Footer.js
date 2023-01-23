import React from 'react';
import './footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

    return (
        <div className='footer' id='footer'>
            <ul>
                <li><a href='https://github.com/ehamzapour' target='_blank' rel='noreferrer'><GitHubIcon className='icon'></GitHubIcon></a></li>
                <li><a href='https://www.linkedin.com/in/elham-viyan-hamzapour-282a36112/' targer='_blank' rel='noreferrer'><LinkedInIcon className='icon'></LinkedInIcon></a></li>
            </ul>
        </div>
    );
}       

export default Footer; 