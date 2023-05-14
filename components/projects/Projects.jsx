import React from 'react'
import ProjectItem from '../common/ProjectItem'
import propertyImg from '../../public/assets/projects/property.jpg';
import cryptoImg from   '../../public/assets/projects/crypto.jpg'
import myZoo from  '../../public/assets/projects/myZoo.png'
import twitchImg from   '../../public/assets/projects/twitch.jpg'
import giftStore from "../../public/assets/projects/giftStore.jpeg"
import shosStore from "../../public/assets/projects/shosStore.png"


import okd from "../../public/assets/projects/okd.png"
import okd_2 from "../../public/assets/projects/okd_2.png"

import mentorcruise from "../../public/assets/projects/mentorcruise.png"

const Projects = () => {

 const MY_PROJECTS = [
   {id:2 ,title: 'mentorcruise', backgroundImg: mentorcruise,   subject: 'React JS',projectUrl: '/twitch'},
   {id:6 ,title: 'OKD App', backgroundImg: okd_2,      subject: 'Next JS',projectUrl: '/netflix'},
   {id:1 ,title: 'Gift Store', backgroundImg: giftStore, subject: 'React JS',projectUrl: '/property'},
   {id:4 ,title: 'okd', backgroundImg: okd,   subject: 'React JS',projectUrl: '/twitch'},
   {id:3 ,title: 'myZoo App', backgroundImg: myZoo,      subject: 'React JS',projectUrl: '/netflix'},
   {id:5 ,title: 'Shose Store', backgroundImg: shosStore,        subject: 'Vanilla JS',projectUrl: '/crypto'},
  ]


  return (
  <div id='projects' className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>

      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Projects
      </p>
      <h2 className='py-4'>What I've Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {MY_PROJECTS.map((p,i)=>{
          return(
            <ProjectItem
            key={i}
            projectID ={p.id}
            title={p.title}
            backgroundImg={p.backgroundImg}
            projectUrl={p.projectUrl}
            subject={p.subject}
            />
          )

        })}
      </div>
     
    </div>
  </div>
  )
}

export default Projects