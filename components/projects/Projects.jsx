import React from 'react'
import ProjectItem from '../common/ProjectItem'
import propertyImg from '../../public/assets/projects/property.jpg';
import cryptoImg from   '../../public/assets/projects/crypto.jpg'
import netflixImg from  '../../public/assets/projects/netflix.png'
import twitchImg from   '../../public/assets/projects/twitch.jpg'
import giftStore from "../../public/assets/projects/giftStore.jpeg"
import shosStore from "../../public/assets/projects/shosStore.png"

const Projects = () => {

 const MY_PROJECTS = [
    {title: 'Gift Store', backgroundImg: giftStore, subject: 'React JS',projectUrl: '/property'},
    {title: 'Shose Store', backgroundImg: shosStore,        subject: 'Vanilla JS',projectUrl: '/crypto'},
    {title: 'Netflix App', backgroundImg: netflixImg,      subject: 'React JS',projectUrl: '/netflix'},
    {title: 'Property Finder', backgroundImg: twitchImg,   subject: 'Next JS',projectUrl: '/twitch'},
    {title: 'Property Finder', backgroundImg: twitchImg,   subject: 'Next JS',projectUrl: '/twitch'},
    {title: 'Property Finder', backgroundImg: twitchImg,   subject: 'Next JS',projectUrl: '/twitch'},
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