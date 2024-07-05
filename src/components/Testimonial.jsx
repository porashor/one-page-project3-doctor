import React from 'react'
import { testimonial } from './data/data'

const Testimonial = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-[5fr_3fr] items-center bg-slate-300'>
        <div className='' data-aos="fade-up" data-aos-delay="900">
          <div className='text-center'>
            <h1 className='text-3xl font-bold uppercase py-2 border-b '>Petient Testimonials</h1>
            <p className='text-xl font-thin py-3'>
              It’s always the word of mouth that’s the best advice. Here are some of our…
            </p>
          </div>
          <div className='flex items-center my-6'>
            {
              testimonial.map((item, index)=>(
                <div className='grid grid-cols-2 items-center' key={index}>
                  <div className='flex flex-col justify-center items-center'>
                    <img src={item.img} alt="" className='w-[150px] h-[150px] cover rounded-full border-4 border-blue-500' />
                    <h1 className='text-center font-semibold uppercase py-5'>{item.name}</h1>
                    <img src={item.sign} alt="" />
                  </div>
                  <div className='px-10 text-lg font-thin'>{item.details}</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='bg-blue-500 p-20 text-xl text-white font-thin'>
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl font-bold py-5 border-b-2 border-yellow-400 w-fit my-5'>A Kid's thought</h1>
            <p data-aos="fade-up" data-aos-delay="300">What do our smallest patients</p>
            <div className='p-5' data-aos="zoom-in" data-aos-delay="700">
            Quisque posuere rhoncus erat, sit amet aliquet augue. Nunc eleifend ornare venenatis. Mauris quis arcu et sem suscipit sollicitudin at quis tellus. Ut maximus ex semper, ultricies lorem in, viverra nisl. Proin lorem quam, tincidunt at neque et, semper molestie urna. Sed vel scelerisque quam, id fringilla ante
            </div>
            <div  className='flex justify-end'>
                <button data-aos="fade-right" data-aos-delay="300" className='border-2 px-6 py-2 my-4 text-white hover:bg-white hover:text-black duration-200 transition-all'>Read more</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
