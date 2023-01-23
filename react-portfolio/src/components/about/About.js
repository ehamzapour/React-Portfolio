import React from 'react';
import './about.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped'

function About() {
  const textRef = useRef();

  useEffect (()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['marketer', 'leader', 'full stack developer', 'badass'],
    });

  }, []);

  return (
    <div className='about' id='about'>
      <div className='left'>
        <div className='imgContainer'>
          {/* add profile pic here */}
          <img src='#' alt='user profile pic'/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi, I'm</h2>
          <h1>Elham Hamzapour</h1>
          <h3><span ref={textRef}></span> Developer</h3>
          <p>BIO ABOUT ME</p>
        </div>
      </div>
    </div>
  );
}
export default About;