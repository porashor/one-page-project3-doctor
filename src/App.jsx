import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Service1 from './components/Service1';
import Working from './components/Working';
import Banner from './components/Banner';
import Doctor from './components/Doctor';
import Latest from './components/Latest';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service1/>
      <Working/>
      <Banner/>
      <Doctor/>
      <Latest/>
    </div>
  )
}

export default App
