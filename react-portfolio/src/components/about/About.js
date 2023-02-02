import React from 'react';
import './about.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped'
import img from './images/ProfilePic2.jpg';

function About() {
  const textRef = useRef();

  useEffect (()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1600,
      backSpeed: 50,
      strings: ['Backend', 'Frontend', 'Full Stack' ],
    });

  }, []);

  return (
    <div className='about' id='about'>
      <div className='left'>
        <div className='imgContainer'>
        <img src={img}  alt='user profile pic'/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi! I'm</h2>
          <h1>Elham Hamzapour</h1>
          <h3><span ref={textRef}></span> Developer</h3>
          <p>Recent full-stack web developer graduate with a passion for building web applications with front-end and back-end software. An efficient learner, team-oriented, result driven individual with more than ten years experience in customer service. I am currently working on projects to add to my portfolio and looking forward to bringing that passion to a full-time role.</p>
        </div>
      </div>
    </div>
  );
}
export default About;