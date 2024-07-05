import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Service1 from './components/Service1';
import Working from './components/Working';
import Banner from './components/Banner';
import Doctor from './components/Doctor';
import Latest from './components/Latest';
import Testimonial from './components/Testimonial';
import Foother from './components/Foother';
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone", // Show animations only on desktop (optional)
      duration: 700, // Animation duration (optional)
      easing: "ease-out-cubic", // Easing function (optional)
      once: true, // Display animation only once (optional)
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service1/>
      <Working/>
      <Banner/>
      <Doctor/>
      <Latest/>
      <Testimonial/>
      <Foother/>
    </div>
  )
}

export default App
