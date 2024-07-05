import React from 'react'
import Container from './fragment/Container'
import { doctor } from './data/data'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'

const Doctor = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-10 py-10'>
            {
                doctor.map((item,index)=>(
                    <div key={index} className='' data-aos="fade-up" data-aos-delay={item.data}>
                        <div className='relative pb-6'>
                        <img src={item.img} alt="" width={300} height={320} className=' cover' />
                        <div className='flex gap-2 absolute -bottom-[10px] px-2'>
                            <div className='p-4 rounded-full border-4 border-yellow-400 hover:bg-yellow-400 transition-all duration-200 bg-white w-[60px] h-[60px] flex items-center justify-center'>
                                <FaFacebook className='text-yellow-400 hover:text-white  text-4xl  transition-all duration-200'/>
                            </div>
                            <div className='p-4 rounded-full bg-black w-[50px] h-[50px] flex items-center justify-center'>
                                <LiaLinkedin className='text-white text-2xl'/>
                            </div>
                            <div className='p-4 rounded-full bg-black w-[50px] h-[50px] flex items-center justify-center'>
                                <FaFacebook className='text-white text-2xl'/>
                            </div>
                            <div className='p-4 rounded-full bg-black w-[50px] h-[50px] flex items-center justify-center'>
                                <FaFacebook className='text-white text-2xl'/>
                            </div>
                        </div>
                        </div>
                        <div className='text-xl py-5 text-slate-800'>
                        <p >{item.title}</p>
                        <h1 className='text-2xl font-bold py-3'>{item.name}</h1>
                        <p className='text-md'>{item.details}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </Container>
    </div>
  )
}

export default Doctor
