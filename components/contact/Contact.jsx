import Image from 'next/image'
import React from 'react'
import ContactImg from '../../public/assets/contact.jpg';
import Icons from '../common/Icons';
import Form from '../common/Form';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  return (
<div id='contact' className='w-full lg:h-screen'>
  <div  className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>

    <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
      <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
      <div className='lg:p-4 h-full '>
            <Image
             className='rounded-xl hover:scale-105 ease-in duration-300'
             src={ContactImg}
             alt='/'
            />
            <h2 className='py-2'>Aviv Haim-s</h2>
            <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
      <p className='uppercase pt-8'>Connect With Me</p>
      <Icons/>
      </div>
      </div>
     


          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
            <Form/>
            </div>
          </div>
    </div>

    <div className='flex justify-center py-12'>
    <Link href='/'>
            
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
           
    </Link>
    </div>
  </div>
</div>
  )
}

export default Contact