import React from 'react'
import './HomeSection4.css'
import {TfiCup} from 'react-icons/tfi'
import {FaRoad} from 'react-icons/fa'
import {FaMapPin} from 'react-icons/fa'

export const HomeSection4 = () => {
  return (
    <>
    <div className="home-section-4 ">
    <h5 className="home-section-4-h5">
        Explore the <br />world with <br />comfortable <br /> car
    </h5>
 <div className="home-section-4-birinci-hisse ">
   <TfiCup className='home-section-4-icon'> </TfiCup>
   <h6 className="home-section-4-h6">
   First Class Services
   </h6>
   <p className="home-section-4-p">
   Where luxury meets exceptional <br />care, creating unforgettable <br />moments and exceeding your <br />every expectation.
   </p>
 </div>
<div className="home-section-4-ikinci-hisse">
     <FaRoad className='home-section-4-icon'></FaRoad>
     <h6 className="home-section-4-h6">
     24/7 road assistance   </h6>
   <p className="home-section-4-p">
   Reliable support when you need it <br />most, keeping you on the move <br />with confidence and peace of <br />mind.
   </p>
 </div>
 <div className="home-section-4-ucuncu-hisse">
    <FaMapPin className='home-section-4-icon'></FaMapPin>
     <h6 className="home-section-4-h6">
     Free Pick-Up & Drop-Off
   </h6>
   <p className='home-section-4-p'>Enjoy free pickup and drop-off <br /> services, adding an extra layer of <br />ease to your car rental experience.</p>

   </div>
    


    </div>
    
    
    </>
  )
}

export default HomeSection4