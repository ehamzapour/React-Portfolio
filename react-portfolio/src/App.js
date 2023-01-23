import React from 'react';
import './App.scss';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
import { useState } from 'react';



function App() {
  const [introOpen, setIntroOpen] = useState(false);

  return (
    <div className="app">
      <Header introOpen={introOpen} setIntroOpen={setIntroOpen}/>
      <div className='sections'>
        <About/>
        <Portfolio/>
        <Contact/>
        <Resume/>
        {/* <Footer/> */}
      </div>
      <div className='footer'>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
