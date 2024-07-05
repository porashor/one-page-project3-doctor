import React from 'react'
import { hero } from './data/data'
import { BsHospital } from 'react-icons/bs'
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='h-screen w-full relative'>
      <div data-aos="fade-in" data-aos-delay="500">
        <Slider {...settings}>
        {hero.map((item,index)=>(
          <div key={index} className='min-h-[500px]'>
            <img src={item.image} alt="image" className='absolute top-0 left-0 right-0 bottom-0 w-full h-fit -z-[1] ' />
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/60 -z-[1]'></div>
            <div className='z-[100] grid grid-cols-[1fr_1fr]  items-center h-[500px]'>
              <div className='space-y-4 max-w-[600px] mx-auto flex justify-center flex-col'>
                <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold text-yellow-400'>{item.name}</h1>
                <p className='text-slate-300 text-sm'>{item.details}</p>
                <div className='flex items-center gap-3'>
                  <BsHospital className='text-4xl text-yellow-400'/>
                  <div>
                    <h1 className='text-xl text-white'>{item.iconName}</h1>
                    <p className='text-xs text-slate-300'>{item.iconDetails}</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
