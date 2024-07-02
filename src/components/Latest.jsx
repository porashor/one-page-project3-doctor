import React from 'react'
import Container from './fragment/Container'
import { medi } from './data/data'
import { BiPlus } from 'react-icons/bi'

const Latest = () => {
  return (
    <div>
      <Container>
        <div className='py-10'>
            <div className='text-center w-[80%] mx-auto space-y-4 text-lg py-3'>
                <h1 className='text-4xl uppercase font-bold'>Latest News</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum
                </p>
            </div>
            <div className='grid grid-cols- md:grid-cols-3 items-center gap-10'>
                {medi.map((item, index)=>(
                    <div key={index} className='border bg-slate-300 border-slate-600 px-3 text-xl py-6 space-y-4' >
                        <div className='relative'>
                        <img src={item.img} alt="" className='pb-5' />
                        <div className='w-[50px] h-[50px] bg-yellow-400 flex items-center justify-center rounded-full absolute bottom-0 left-4'>
                        <BiPlus className='text-3xl'/>
                        </div>
                        </div>
                        <p>{item.date}</p>
                        <h1 className='text-3xl font-semibold'>{item.name}</h1>
                        <p className='text-sm text-slate-700'>{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Latest
