import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components/'
import Gallery from './components/Gallery';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { isMobile } from 'react-device-detect';

const App = () => {
  useEffect(() => {
    if (isMobile) {
      window.location.replace("https://m.mohammedarshad.com");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-opacity-20 bg-cover bg-no-repeat bg-center'>

          <Navbar />
          <Hero />
        </div>
        <About />
        <Gallery />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
