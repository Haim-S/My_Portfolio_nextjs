import React from 'react'
import Link from 'next/link';
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";
import { AiOutlineMail} from "react-icons/ai"

const Icons = ({nav}) => {
  return (
   
<div className='flex items-center justify-between my-4 w-full sm:w-[80]'>
<Link href={"https://www.linkedin.com/in/aviv-haim-s-874bb0265/"}>
  <div 
  className={
    nav?'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <FaLinkedinIn />
  </div>
</Link>
<Link href={"https://github.com/Haim-S"}>
  <div 
  className={
    nav?'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <FaGithub />
  </div>
  </Link>
  <Link>
  <div 
  className={
    nav?'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <AiOutlineMail />
  </div>
  </Link>
  <Link>
  <div 
  className={
    nav?'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
  : 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
  }
  >
    <BsFillPersonLinesFill />
  </div>
  </Link>
</div>    
  )
}

export default Icons