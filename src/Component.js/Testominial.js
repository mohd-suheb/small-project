import React, { useState } from 'react'
import Card from './Card'
import reviews from '../data'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testominial = (props) => {
    let reviews = props.reviews
    const [index, setindex] = useState(0);

    function leftshifthandler(){

        if(index-1<0){
            setindex(reviews.length-1);
        }
        else{
            setindex(index-1);
        }

    }

    function rightshifthandler(){

        if(index +1>= reviews.length){
            setindex(0);
        }
        else{

            setindex(index+1);
        }

    }

    function randomshifthandler(){

        let randomindx = Math.floor(Math.random()*reviews.length);
        setindex(randomindx);

    }
  
    // console.log(reviews[0]);
  return (
    <div className='bg-white w-[85vw] md:w-[700px] flex flex-col justify-center items-center 
     transition-all duration-200 mt-10 p-10  hover:shadow-xl'>
       <Card review = {reviews[index]}/>
       <div>

        <button onClick={leftshifthandler}
         className='text-violet-500 mt-10 mx-auto gap-10 px-5 font-bold'
>
        <FiChevronLeft />
        </button>
        <button   onClick={rightshifthandler}
         className='text-violet-500 mt-10 mx-auto gap-10 font-bold'>
        <FiChevronRight />
        </button>
        </div>

        <div>

        <button  onClick={randomshifthandler}
        className='bg-violet-400 text-white rounded-md px-10 py-2 mt-5 hover:bg-violet-800 text-lg font-bold
          transition-all dduration-200 '>
            surprise me
        </button>
        </div>
    </div>
  )
}

export default Testominial;