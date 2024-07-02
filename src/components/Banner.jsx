import React from 'react'
import Container from './fragment/Container'
import image1 from "../assets/banner.jpg"
const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-slate-500 to-white my-10 relative'>
      <Container>
        <div className=''>
            <div className='grid grid-cols-2 items-center justify-between gap-4 '>
                <div className='text-xl'>
                    <p className='py-2 border-b-2 w-fit border-yellow-400'>Dr. Stephenie Wosniack</p>
                    <h1 className='text-7xl uppercase py-2'><span className='font-thin text-slate-900'>Our</span> <span className='font-bold text-yellow-400'>team</span></h1>
                    <p>
                    Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.
                    </p>
                </div>
                <div className='flex justify-end pt-[20px]'>
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
      </Container>
      <button className='bg-yellow-400 px-6 text-xl text-white absolute right-[50%] -bottom-[4%] translate-x-20 translate-y-1 py-2'>Find out more </button>
    </div>
  )
}

export default Banner
