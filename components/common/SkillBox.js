import React from 'react'
import Image from 'next/image';
import Html from '../../public/assets/skills/html.png';
import Css from '../../public/assets/skills/css.png';
import Javascript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import Tailwind from '../../public/assets/skills/tailwind.png';
import Github from '../../public/assets/skills/github1.png';
import NextJS from '../../public/assets/skills/nextjs.png'
import MongoDB from '../../public/assets/skills/mongo.png'
import Node from "../../public/assets/skills/node.png"
import Shopify from "../../public/assets/skills/shopify.png"
import mySql from "../../public/assets/skills/mysql.png"
import Mui from "../../public/assets/skills/mui.png"


const SkillBox = () => {

    const SKILL = [
        {img: Html, name: "HTML"},
        {img: Css, name: "Css"},
        {img: Javascript, name: "Javascript"},
        {img: ReactImg, name: "React"},
        {img: Tailwind, name: "Tailwind"},
        {img: Mui, name: "Mui"},
        {img: Node, name: "Node"},
        {img: Github, name: "Github"},
        {img: NextJS, name: "NextJS"},
        {img: MongoDB, name: "MongoDB"},
        {img: mySql, name: "MySQL"},
        {img: Shopify, name: "Shopify"},
    ]
  return (
  <>
  {SKILL.map((p, i)=> {
    return(
        <div key={i} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
            <Image src={p.img} width='60' height='60' alt='/' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>{p.name}</h3>
          </div>
        </div>
      </div>

    )
  })}
 
  </>
  )
}

export default SkillBox