import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu} from "react-icons/ai"
import {PAGES_PATH} from "../../constants/PAGES_PATH"

import NavLogo from '../../public/assets/navLogo.png'
import SideBar from './SideBar';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');




    const handleNav = () => {
        setNav(!nav);
      };

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);



  return (
  <div 
    style={{ backgroundColor: `${navBg}` }}
    className={
      shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100]'
    }
  >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
            <Image   src={NavLogo}
              alt='/'
              width='70'
              height='50'
              className='cursor-pointer'/>
            </Link>

            <div>
            <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
              {PAGES_PATH.map((p, i)=>{
                return(
                  <Link key={i} href={p.path}>
                   <li className='ml-10 text-sm uppercase hover:border-b'>{p.linkLabel}</li>
                </Link>
                )
              })}
            </ul>
            </div>
            <div onClick={handleNav} className='md:hidden'>
                 <AiOutlineMenu size={25}/>
            </div>
        </div>
            <SideBar nav={nav} handleNav={handleNav}/>
  </div>
              
  )
}

export default Navbar