import React, { useState } from 'react';
import './app.css';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className='sections'>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
        <Footer></Footer>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
