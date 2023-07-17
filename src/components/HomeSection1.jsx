import React from 'react'
import './HomeSection1.css'
import {TfiCup} from 'react-icons/tfi'
import {FaRoad} from 'react-icons/fa'
import { Button } from './Button'


export const HomeSection1 = () => {
  return (
    <>
     <div className='homesection1'>
     
    <div className='explore-the-world'>
     <h1 className='explore-the-world-h1'>
        Explore the world with <br/>
        comfortable car
     </h1>
     <p className='explore-the-world-p'>Embark on unforgettable adventures and discover the world in <br/>
         unparalleled comfort and style with our fleet of exceptionally <br/>
         comfortable cars.
     </p>
     </div>
     <div className='homesection-icons'>
         <TfiCup className='kubok-iconu'></TfiCup>
         <div className='homesection-icons1-1'>
        
        <h4 className='homesection-icons1-1'><span className='first-class'>First class services</span><br/>Est dolore ut laboris eu <br/> enim eu veniam nostrud <br/> esse laborum duis</h4>
         </div>
         <FaRoad className='yol-iconu'></FaRoad>
         <div className='homesection-icons1-2'>
    
       
         <h4 className='homesection-icons1-2'>
            <span className='road-asistance'>24/7 road asistance</span> <br/>Est dolore ut laboris eu <br/> enim eu veniam nostrud <br/> esse laborum duis
         </h4>
         </div>
     </div>
     <Button butonunIcindekiDeyer="Choose a Car" />

     </div>
 
    <div className='homesection2'></div>
    </>
  )
}

export default HomeSection1
