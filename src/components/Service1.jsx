import React from 'react'
import Container from './fragment/Container'
import { service1 } from './data/data'

const Service1 = () => {
  return (
    <div>
      <Container>
        <div className='flex'>
        {service1.map((item, index)=>(
            <div data-aos="zoom-in" data-aos-delay='200' key={index} className='py-20 px-10 bg-gradient-to-r from-blue-400 to-blue-500'>
                <div className=' text-white flex flex-col justify-center gap-4'>
                    <h1 className='text-xl'>{item.name}</h1>
                    <p className='text-sm text-slate-300'>{item.details}</p>
                    <button className='border-2 border-white py-2 uppercase hover:bg-white hover:text-black transition-all duration-200'>{item.btnText}</button>
                </div>
            </div>
        ))}
        </div>
      </Container>
    </div>
  )
}

export default Service1
