import React from 'react'
import './AboutUs.css'
import Navbar from './Navbar';
import Footer from './Footer';
import MaplenecekElementler from '../AboutCard.json'
import AboutCard from './AboutCard';
import { TfiCup } from 'react-icons/tfi'
import { FaRoad } from 'react-icons/fa'
import { FaMapPin } from 'react-icons/fa'
import { BiSolidLabel } from 'react-icons/bi'
import {BsFillTelephoneFill}  from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Button from './Button';
import HomeSection3 from './HomeSection3';
const AboutUs = () => {
    return (
        <>
            <Navbar />

            <div className='contact-top'>
          <h1>About Us</h1>
            </div>

            <div className="customers">
                <div className="customers-left-side">
                We offer customers a wide <br />range of <span>commercial cars</span> <br />and <span>luxury cars </span> for any <br />occasion.
                </div>
                <div className="customers-right-side">
                At Rentaly, we are dedicated to providing exceptional car rental <br />services to our valued customers. With a commitment to quality, <br /> convenience, and customer satisfaction, we strive to make every <br />rental experience a seamless and enjoyable one. We understand <br />that every customer has unique needs and preferences when it <br />comes to renting a car. That's why we maintain a diverse fleet of <br />well-maintained vehicles to cater to various requirements. From <br />compact cars for solo travelers to spacious SUVs for families, we <br /> have a wide range of options to choose from.
                </div>
            </div>
 
          <div className="middle-card-umumi">
            <div className="middle-card card">
                <h3>15425</h3>
                <h6>House of Work</h6>
            </div>
            <div className="middle-card card">
                <h3>8745</h3>
                <h6>Clients Supported</h6>
            </div>
            <div className="middle-card card">
                <h3>235</h3>
                <h6>Awards Winning</h6>
            </div>
            <div className="middle-card card">
                <h3>15</h3>
                <h6>Years Experience</h6>
            </div>
          </div>
           


            <div className="directors">
                <h1>Board of Directors</h1>
                <div className="about-card-sc">
                    {
                        MaplenecekElementler.map(birmelumat => (
                            <AboutCard
                                image={birmelumat.img}
                                name={birmelumat.name}
                                info={birmelumat.info}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="features-section">
                <div className="features-top">
                    <h1>Features Hilight</h1>
                </div>
                <div className="features-bottom">
                    <div className="left-side">
                        <div className="cup">
                            <TfiCup className='features-section-icons' />
                            <div className="cup-text">
                                <h1>First class services</h1>
                                <p>Where luxury meets <br /> exceptional care, creating <br /> unforgettable moments <br />  and exceeding your every expectation.</p>
                            </div>
                        </div>

                        <div className="road">
                            <FaRoad className='features-section-icons' />
                            <div className="road-text">
                                <h1>24/7 road assistance</h1>
                                <p>Reliable support when you <br /> need it most, keeping you <br /> on the move with <br /> confidence and peace of mind.</p>
                            </div>
                        </div>
                    </div>
                    <div className="center">
                        <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1689238491/ab6_v4y0pn.png" alt="" className='center-img' />
                    </div>
                    <div className="right-side">
                        <div className="label">
                            <BiSolidLabel className='features-section-icons'/>
                            <div className="label-text">
                                <h1>Quality at Minimum <br /> Expense</h1>
                                <p>Unlocking affordable <br /> brilliance with elevating <br /> quality while minimizing <br /> costs for maximum value.</p>
                            </div>
                        </div>

                        <div className="pin">
                            <FaMapPin className='features-section-icons'/>
                            <div className="pin-text">
                                <h1>Free Pick-Up & Drop-Off</h1>
                                <p>Enjoy free pickup and <br/> drop-off services, adding <br/> an extra layer of ease to <br/> your car rental experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HomeSection3 />

            <div className="call-us">
                <div className="call-us-left">Call us for further information. Rentaly <br />customer care is here to help you anytime.</div>
                <div className="call-us-right">
                    <BsFillTelephoneFill className='telefon-iconu'/>
                    <h5>CALL US NOW</h5>
                    <h1>1 200 333 800</h1>
                   <Link to='/contact'>   <Button butonunIcindekiDeyer='Contact Us'/></Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutUs