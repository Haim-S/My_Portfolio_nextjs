import React from 'react'
import { useRouter } from 'next/router';
// import { useParams } from 'next/router';
import Image from 'next/legacy/image'
import Link from 'next/link'
import giftStore from "../../public/assets/projects/giftStore.jpeg"
import {RiRadioButtonFill} from "react-icons/ri"
import { MY_PROJECTS } from '@/constants/PAGES_PATH'

const ProjectInformation = () => {

  const router = useRouter();
  const { id } = router.query;


let Item = MY_PROJECTS.find((obj) => obj.id == id);


console.log(Item);



  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] lg:w-full relative'>
        <div className='absolute top-0 left-0 w-[100vw] h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Item?.img}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{Item?.titleName}</h2>
          <h3>{Item?.titleFramework}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          {Item?.about}
          </p>
          <a
            href={Item?.githubUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href={Item?.diployUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {Item?.Technologies.map((p, i)=>(
                <p key={i} className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> {p}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectInformation