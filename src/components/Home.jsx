import React from 'react'
import { HomeSection1 } from './HomeSection1';
import { HomeSection2 } from './HomeSection2';
import {HomeSection3} from './HomeSection3'
import {HomeSection4} from './HomeSection4'
import {HomeSection5} from './HomeSection5'
import {HomeSection6} from './HomeSection6'
import {HomeSection7} from './HomeSection7'
import {RuningMarquee} from './RuningMarquee'
import Navbar from './Navbar';
import Footer from './Footer';

export const Home = () => {
  return (
    <>
   <Navbar/>
     <HomeSection1 />
     <HomeSection2 />
     <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
     <HomeSection6 /> 
     <HomeSection7 />
     <RuningMarquee />
     <Footer/>
    </>
  )
}

export default Home
