import React from 'react'
import Icons from '../common/Icons'




const Main = () => {


  return (
  <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>

          <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>
          Hi, here is my portfolio
          </h1>
          <h1 className='py-2 text-gray-700'>
          I am
Full-crazy web developer
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I’m focused on building responsive front-end web applications
          integrating back-end technologies.
          </p>

          <div className='flex item-center justify-between max-w-[330px] m-auto py-4'>
            <Icons/>
          </div>

        </div>
    </div>
  </div>
  )
}

export default Main