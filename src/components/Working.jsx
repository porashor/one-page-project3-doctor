import React from 'react'
import Container from './fragment/Container'
import { day, working } from './data/data'

const Working = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-[3fr_1fr] items-center gap-3'>
            
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-3'>
                {
                    working.map((item, index)=>(
                        <div key={index} className='text-center space-y-3'>
                            <div className='relative mb-10'>
                            <img src={item.image} alt="" className='w-full'/>
                            <div className='w-[80px] h-[80px] rounded-full bg-blue-400 absolute bottom-0 right-[45%] translate-x-6 translate-y-9'></div>
                            </div>
                            <h1 className='text-xl py-1'>{item.subName}</h1>
                            <h1 className='text-3xl font-bold py-3 uppercase'>{item.name}</h1>
                            <p>{item.details}</p>
                        </div>
                    ))
                }
            </div>
            <div className='px-3 py-10 text-center bg-slate-300 border border-slate-400'>
                <h1 className='text-4xl font-bold px-10 pb-5'>Working hours</h1>
                <p className='pb-5'>Lorem ipsum dolor, Ducimus voluptatem totam nulla, mollitia soluta obcaecati?</p>
                <div className='flex flex-col justify-center gap-3'>
                    {day.map((item, index)=>(
                        <div key={index} className='flex justify-between items-center gap-5 border-b border-slate-600 py-3'>
                            <div className='font-bold'>{item.name}</div>
                            <div className='text-slate-500'>{item.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Working
