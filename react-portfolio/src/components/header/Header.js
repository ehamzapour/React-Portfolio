import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className='header'>
        <div className='wrapper'>
            <div className='left'>
                <a href='#about' className='logo'>Elham H</a>
            </div>

            <div className='right'>
                <ul>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#resume'>Resume</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Header;