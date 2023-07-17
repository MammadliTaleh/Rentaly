import React from 'react'
import './Footer.css'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail}  from 'react-icons/ai'
import {HiDocumentDownload} from 'react-icons/hi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {BsPinterest} from 'react-icons/bs'
import {TiWiFi} from 'react-icons/ti'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-first">
            <div className="about-rentaly">
                <h4 className="footer-h4">About Rentaly</h4>
                <p className="about-rentaly-p">Where quality meets affordability. <br />We understand the importance of a <br />smooth and enjoyable journey <br />without the burden of excessive <br />costs. That's why we have <br />meticulously crafted our offerings to <br />provide you with top-notch vehicles <br />at minimum expense.</p>
            </div>
            <div className="contact-info">
            <h4 className="footer-h4">Contact Info</h4>
                <p className="contact-info-p"><HiLocationMarker className='contact-info-icon'/>08 W 36th St, New York, NY 10001</p>
                <p className="contact-info-p"><BsFillTelephoneFill className='contact-info-icon'/>+1 333 9296</p>
                <a href="" className="contact-info-a"><AiOutlineMail className='contact-info-icon'/>contact@example.com</a>
                <a href="" className="contact-info-a"><HiDocumentDownload className='contact-info-icon'/>Download Brochure</a>
            </div>
            <div className="quick-links">
            <h4 className="footer-h4">Quick Links</h4>
                <a href="" className="quick-links-a">About</a>
                <a href="" className="quick-links-a">Blog</a>
                <a href="" className="quick-links-a">Careers</a>
                <a href="" className="quick-links-a">News</a>
                <a href="" className="quick-links-a">Partners</a>
            </div>
            <div className="social-network">
            <h4 className="footer-h4">Social Nerwork</h4>
                 <BsFacebook className='social-network-icon'/>
                 <AiFillTwitterCircle className='social-network-icon'/>
                 <TiSocialLinkedinCircular className='social-network-icon'/>
                 <BsPinterest className='social-network-icon'/>
                 <TiWiFi className='social-network-icon'/>

            </div>
        </div>
        <div className="footer-second">
            <a href="" className="footer-second-copyright">Copyright 2023 - Rentaly by Designesia</a>
            <a href="" className="footer-second-terms">Terms & Conditions</a>
            <a href="" className="footer-second-privacy">Privacy Policy</a>
        </div>
    </div>
  )
}
 export default Footer