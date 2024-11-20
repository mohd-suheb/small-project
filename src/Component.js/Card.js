import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
    let review = props.review
    console.log(review);
  return (
    <div className='flex flex-col   md:relative'>

        <div className=' absolute top-[-7rem] z-[10] mx-auto  '>
            <img className=' aspect-square rounded-full  z-[25] h-[140px] w-[140px]'
             src = {review.image}/>
             
        <div className='h-[140px] w-[140px] rounded-full bg-violet-500 absolute
        top-[-6px] left-[10px] z-[-10]'></div>
        </div>

        <div className='text-center mt-7'>
            <h1 className='text-2xl font-bold capitalize'>{review.name}</h1>
        </div>

        <div className='text-center mt-7'>
            <p className='text-violet-300 text-sm uppercase'>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-7'>
        <FaQuoteLeft />
        </div>

        <div className='text-slate-500 text-center mt-4 w-[500px]'>

            <p>{review.text}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-7'>
        <FaQuoteRight />
        </div>

        

    </div>
  )
}

export default Card