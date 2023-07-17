import React from 'react'
import './HomeSection2.css'
import Button from './Button'
import {BsPeopleFill} from 'react-icons/bs'
import {BsHandbagFill} from 'react-icons/bs'
import {GiCarDoor} from 'react-icons/gi'
import {AiFillCar} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';






export const HomeSection2 = () => {
  return (
    <>
    <div className='homesection2'>
    <h1 className='our-vehicle'>Our Vehicle Fleet</h1>
    <p className='driving-your'>Driving your dreams to reality with an exquisite fleet of versatile <br/> vehicles for unforgettable journeys.</p>
    <div className='swiperin-yerlesdiyi-div'>
    <Swiper
     breakpoints={{
       500:{
        spaceBetween:25,
        slidesPerView:2
       },
       768:{
        spaceBetween:30,
        slidesPerView:2
       },
       1024:{
        spaceBetween:50,
        slidesPerView:3
       }

     }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="card jeep-sekli col-sm-6 col-md-6 col-lg-4 " >
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
    </div></SwiperSlide>

      <SwiperSlide> <div className="card bmw-sekli col-sm-6 col-md-6 col-lg-4 " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688154803/bmw-m5_sizhu2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">BMW M2</h5>
  <h6 className='kart-ikonlari'>  <BsPeopleFill className='insanlar-iconu' />5</h6>
   <h6 className='kart-ikonlari' > <BsHandbagFill className='canta-iconu' />2</h6>
   <h6 className='kart-ikonlari'> <GiCarDoor className='masinqapisi-iconu' />4</h6>
   <h6 className='kart-ikonlari'><AiFillCar className='masin-iconu ' />Sedan</h6>
   <div className='cartin-2ci-hissesi'><p className='daily-rent'>Daily rent from<br/><span className='kirayenin-qiymeti'>$265</span></p>
   <Button butonunIcindekiDeyer="Rent now" className='cardlardaki-button'/>
   </div>
   
  </div>
    </div></SwiperSlide>

      <SwiperSlide><div className="card ferrari-sekli  col-sm-6 col-md-6 col-lg-4 " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688154806/ferrari-enzo_aqnoyb.jpg " className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ferrari Enzo</h5>
    <h6 className='kart-ikonlari'>  <BsPeopleFill className='insanlar-iconu' />5</h6>
   <h6 className='kart-ikonlari'> <BsHandbagFill className='canta-iconu' />2</h6>
   <h6 className='kart-ikonlari'> <GiCarDoor className='masinqapisi-iconu' />4</h6>
   <h6 className='kart-ikonlari'><AiFillCar className='masin-iconu ' />Exotic Car</h6>
   <div className='cartin-2ci-hissesi'><p className='daily-rent'>Daily rent from<br/><span className='kirayenin-qiymeti'>$167</span></p>
   <Button butonunIcindekiDeyer="Rent now" className='cardlardaki-button'/>
   </div>
   
  </div>
    </div></SwiperSlide>
      <SwiperSlide><div className="card ford-sekli  col-sm-6 col-md-6 col-lg-4 " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688219366/ford-raptor_ztbwsu.jpg " className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ford Raptor</h5>
    <h6 className='kart-ikonlari'>  <BsPeopleFill className='insanlar-iconu' />5</h6>
   <h6 className='kart-ikonlari'> <BsHandbagFill className='canta-iconu' />2</h6>
   <h6 className='kart-ikonlari'> <GiCarDoor className='masinqapisi-iconu' />4</h6>
   <h6 className='kart-ikonlari'><AiFillCar className='masin-iconu ' />Pickup Truck</h6>
   <div className='cartin-2ci-hissesi'><p className='daily-rent'>Daily rent from<br/><span className='kirayenin-qiymeti'>$147</span></p>
   <Button butonunIcindekiDeyer="Rent now" className='cardlardaki-button'/>
   </div>
   
  </div>
    </div>
    </SwiperSlide>
      <SwiperSlide><div className="card ford-sekli  col-sm-6 col-md-6 col-lg-4 " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688222459/mini-cooper_dratmb.jpg " className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mini Cooper</h5>
    <h6 className='kart-ikonlari'>  <BsPeopleFill className='insanlar-iconu' />5</h6>
   <h6 className='kart-ikonlari'> <BsHandbagFill className='canta-iconu' />2</h6>
   <h6 className='kart-ikonlari'> <GiCarDoor className='masinqapisi-iconu' />4</h6>
   <h6 className='kart-ikonlari'><AiFillCar className='masin-iconu ' />Hatchback</h6>
   <div className='cartin-2ci-hissesi'><p className='daily-rent'>Daily rent from<br/><span className='kirayenin-qiymeti'>$238</span></p>
   <Button butonunIcindekiDeyer="Rent now" className='cardlardaki-button'/>
   </div>
   
  </div>
    </div>
    </SwiperSlide>
      ...
    </Swiper>

    </div>
   




    </div>
    </>
  )
}
export default HomeSection2

