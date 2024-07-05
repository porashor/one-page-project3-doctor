import React from 'react'
import Container from './fragment/Container'
import { foother1, medi, nav, product } from './data/data'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { BsMessenger } from 'react-icons/bs'

const Foother = () => {
  return (
    <div className='bg-slate-800 text-white' data-aos="fade-up" data-aos-delay="2000">
      <div className='py-10'>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4'>
                <div className='py-5 px-2'>
                    <h1 className='uppercase text-4xl font-bold py-2 text-yellow-400'>LOGo</h1>
                    <p className='leading-2 text-slate-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur nam quos tempore laudantium numquam, ullam ducimus? Totam aliquam dolorem laboriosam incidunt, placeat neque quidem molestiae nisi, reprehenderit perspiciatis velit!
                    </p>
                </div>
                <div className='px-2 py-5 space-y-2'>
                    <h1 className='text-2xl uppercasen text-center py-2 border-b-2 my-2'>Recent post</h1>
                    {
                        medi.map((item,index)=>(
                            <div key={index} className='flex gap-4 items-center'>
                                <img src={item.img} className='w-[60px]  h-fit' alt="" />
                                <div>
                                    <p className='text-sm'>{item.date}</p>
                                    <h1 className='text-lg font-semibold'>{item.name}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='px-2 py-5 space-y-5'>
                    <h1 className='text-2xl uppercasen text-center py-2 border-b-2 my-2'>Products</h1>
                    {
                        product.map((item,index)=>(
                            <div key={index} className='flex gap-4 items-center'>
                                <img src={item.img} className='w-[60px]  h-fit' alt="" />
                                <div>
                                    <h1 className='text-lg font-semibold'>{item.name}</h1>
                                    <p className='text-sm'>{item.tk}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='px-2 py-5 space-y-5'>
                    <h1 className='text-2xl uppercasen text-center py-2 border-b-2 my-2'>Our Service</h1>
                    {
                        foother1.map((item,index)=>(
                            <div key={index} className='flex gap-4 items-center'>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
      </div>
      <div className='bg-slate-900 py-5'>
        <Container>
            <div className='flex justify-between'>
                <div>Copyright by BoldThemes 2018. All rights reserved.</div>
                <div className='flex items-center gap-3'>
                <div className='flex gap-3'>{nav.map((item, index)=>(
                    <div key={index}>{item.name}</div>
                ))}</div>
                <div className='flex gap-3 text-xl'>
                    <FaFacebook/>
                    <LiaLinkedin/>
                    <BsMessenger/>
                </div>
                </div>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Foother
