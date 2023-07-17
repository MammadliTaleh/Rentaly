import React from 'react'
import './AboutCard.css'
import {BsFacebook} from 'react-icons/bs'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {BsPinterest} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
const AboutCard = ({image,name,info}) => {
  return (
    <div className='about-card'>
<div className="about-card-img">
    <img src={image} alt="" />
    <div className="about-media">
<BsFacebook className='ab-media'/>
<AiFillTwitterCircle className='ab-media'/>
<TiSocialLinkedinCircular className='ab-media'/>
<BsPinterest className='ab-media'/>
    </div>
    <h1>{name}</h1>
    <h2>{info}</h2>
</div>
    </div>
  )
}

export default AboutCard