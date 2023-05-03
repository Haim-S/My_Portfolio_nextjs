import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineClose} from "react-icons/ai"
import Icons from '../common/Icons';
import {PAGES_PATH} from "../../constants/PAGES_PATH"
import NavLogo from '../../public/assets/navLogo.png'

const SideBar = ({nav, handleNav}) => {

  

  return (
<div  className={
     nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': "" 
  }
>
 <div className={nav? 
'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 
 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
>
    <div className='flex w-full items-center justify-between'>
    <Image   src={NavLogo}
              alt='/'
              width='50'
              height='50'
              className='cursor-pointer'
    />
   <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
        <AiOutlineClose />
    </div>
    </div>
    <div className='border-b border-gray-300 my-4'>
        <p className='w-[85%] md:w-[90%] py-4'>Les't build something legendary together</p>
    </div> 

    <div className='py-4 flex flex-col'>
        <ul className='uppercase'>
        {PAGES_PATH.map((p, i)=>{
                return(
                  <Link key={i} href={p.path}>
                   <li className='py-4 text-sm'>{p.linkLabel}</li>
                </Link>
                )
              })}
        </ul>
        <div className='pt-28'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <Icons nav={nav}/>  
        </div>
    </div>

 </div>
</div>
  )
}

export default SideBar