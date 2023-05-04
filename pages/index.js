import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'

import Main from '@/components/main/Main'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'



export default function Home() {
  return (
    <>
      <Head>
      <title>Aviv Haim-s | Full Stack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}
