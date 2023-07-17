
import './HomeSection3.css'
import React from 'react';







export const HomeSection3 = () => {

    
  return (
    <div className='home-section-3'>
      <div className="home-section-3-left">
        <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688892648/5_rcpvun.jpg" alt="" className='home-section-3-img'/>
      </div>
      <div className="home-section-3-right">
       <h3>Only Quality For Clients</h3>
       <div className="buttons">
         <button className='quality-buttons'>Luxury</button>
         <button className='quality-buttons'>Comfort</button>
         <button className='quality-buttons'>Prestige</button>
       </div>
       <p>We offer a meticulously curated collection of the most <br />sought-after luxury vehicles on the market. Whether you prefer the <br />sporty allure of a high-performance sports car, the <br />sophistication of a sleek and luxurious sedan, or the <br />versatility of a premium SUV, we have the perfect car to <br /> match your discerning taste.</p>
       
      </div>
    </div>
  )
}
export default HomeSection3