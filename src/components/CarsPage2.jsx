import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './CarsPage2.css'
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import Button from './Button'
import {BsPeopleFill} from 'react-icons/bs'
import {BsHandbagFill} from 'react-icons/bs'
import {GiCarDoor} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai'

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export const CarsPage2 = () => {
  return (
    <div className="carspage2">
      <div className="carspage2-left">
          <div className="carpage2-checkboxes">
            <h5 className="carpage2-left-h5">Vehicle Type</h5>
         <h2> <Checkbox onChange={onChange} className='checkboxes'>Car</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Van</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>MiniBus</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Prestige</Checkbox></h2>
          
          </div>
          <div className="carpage2-checkboxes">
          <h5 className="carpage2-left-h5">Car Body Type</h5>
         <h2> <Checkbox onChange={onChange} className='checkboxes'>Convertible</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Coupe</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Exotic Cars</Checkbox></h2>
         <h2> <Checkbox onChange={onChange} className='checkboxes'>Hatchback</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Minivan</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Pickup Truck</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Sedan</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>Sports Car</Checkbox></h2>
         <h2> <Checkbox onChange={onChange} className='checkboxes'>Station Wagon</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>SUV</Checkbox></h2>
          </div>
          <div className="carpage2-checkboxes">
          <h5 className="carpage2-left-h5">Car Seats</h5>
          <h2><Checkbox onChange={onChange} className='checkboxes'>2 seats</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>4 seats</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>6 seats</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>6+ seats</Checkbox></h2>
          </div>
          <div className="carpage2-checkboxes">
          <h5 className="carpage2-left-h5">Car Engine Capacity(cc)</h5>
          <h2><Checkbox onChange={onChange} className='checkboxes'>1000-2000</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>2000-4000</Checkbox></h2>
          <h2><Checkbox onChange={onChange} className='checkboxes'>4000-6000</Checkbox></h2>
         <h2> <Checkbox onChange={onChange} className='checkboxes'>6000+</Checkbox></h2>
          </div>
          <div className="carpage2-slider">
          <h5 className="carpage2-left-h5">Price($)</h5>
         
          <Slider
              defaultValue={2000}
              tooltip={{
                 open: true,
               }}
           />
          </div>
      </div>
      <div className="carspage2-right">
      <div className="card jeep-sekli col-sm-6 col-md-6 col-lg-4 " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688154795/jeep-renegade_fc8d5d.jpg" className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Jeep Renegade</h5>
     <h6 className='kart-ikonlari'>  <BsPeopleFill className='insanlar-iconu' />5</h6>
    <h6 className='kart-ikonlari' > <BsHandbagFill className='canta-iconu' />2</h6>
    <h6 className='kart-ikonlari'> <GiCarDoor className='masinqapisi-iconu' />4</h6>
  <h6 className='kart-ikonlari'><AiFillCar className='masin-iconu ' />SUV</h6>
  <div className='cartin-2ci-hissesi'><p className='daily-rent'>Daily rent from<br/><span className='kirayenin-qiymeti'>$244</span></p>
   <Button butonunIcindekiDeyer="Rent now" className='cardlardaki-button'/>
   </div>
   
   </div>
    </div>
      </div>
    </div>
  )
}
export default CarsPage2