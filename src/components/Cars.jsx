import React from 'react'
import CarsPage1 from './CarsPage1'
import CarsPage2 from './CarsPage2'
import Navbar from './Navbar';
import Footer from './Footer';
export const Cars = () => {
  return (
    <>
    <Navbar/>
       <CarsPage1/>
    <CarsPage2/>
    <Footer/>
    
    </>
 
  )
}
export default Cars
