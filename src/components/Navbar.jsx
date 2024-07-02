import React, { Component } from 'react';
import Container from './fragment/Container';
import { detailsNav, nav } from './data/data';
import { BsClock } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-[100]'>
        <div className='border-b border-slate-200 py-5'>
        <Container>
            <div className='grid grid-cols-[4fr_3fr_3fr_3fr] items-center justify-between gap-2  '>
                <div className='text-4xl font-bold uppercase text-yellow-400'>Logo</div>
                <div className='flex gap-3 items-center '>
                    <BsClock className='text-yellow-400 text-5xl'/>
                    <div>
                        <span>Sunday - Thursday 10:00- 16:00</span>
                        <div>Friday and Saturday - CLOSED</div>
                    </div>
                </div>
                <div className='flex gap-3 items-center '>
                    <BsClock className='text-yellow-400 text-5xl'/>
                    <div>
                        <span>+880-01*******</span>
                        <div>office@gmail.com</div>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <BsClock className='text-yellow-400 text-5xl '/>
                    <div>
                        <span>27th Avenue</span>
                        <div>New York, W2 3XE</div>
                    </div>
                </div>
            </div>
        </Container>
        </div>
        <div className='border-b border-slate-200'>
            <Container>
                <div className='flex items-center justify-between gap-2 '>
                    <div>
                        <ul className='flex gap-3 uppercase text-[18px] font-semibold text-slate-700'>
                            {
                                nav.map((item, index)=>(
                                    <li key={index}>
                                        <a href={item.links} className='hover:text-yellow-400 transition-all duration-200'>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* //search bar is here */}
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center justify-start border-x border-slate-400 py-5 px-4'>
                            <input type="text" placeholder='Looking for...'  className='text-xs outline-none text-black'/>
                            <BiSearch/>
                        </div>
                        <div className='flex gap-4 items-center text-yellow-400'>
                            <FaFacebook/>
                            <CgTwitter/>
                            <FaPinterest/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar
