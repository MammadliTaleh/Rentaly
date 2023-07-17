import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiDocumentDownload } from 'react-icons/hi';



const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  const validateInputs = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate phone using regex
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Please enter a valid phone number');
      isValid = false;
    }

    if (message.trim() === '') {
      setMessageError('Please enter your message');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateInputs();

    if (isValid) {
      // Perform form submission or other actions
      setSuccessMessage('Form submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };





  return (
    <>
      <Navbar />
      <div className='contact'>
        <div className='contact-top'>
          <h1>Contact Us</h1>
        </div>
        <div className='contact-bottom'>
          <div className='bottom-left'>
            <h1>Do you have any question?</h1>
            <form onSubmit={handleSubmit}
            >
            <div className="form-top">
            <div className='inputlarin-divi'>
                <input
                placeholder='Your Name'
                  type='text'
                  id='name'
                  value={name}
                  onChange={handleNameChange}
                  className={nameError ? 'error' : 'inputlar'}
                />
                {nameError && <p className='error-message'>{nameError}</p>}
              </div>

              <div className='inputlarin-divi'>
                <input
                placeholder='Your Email'
                  type='email'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                  className={emailError ? 'error' : 'inputlar'}
                />
                {emailError && <p className='error-message'>{emailError}</p>}
              </div>

              <div className='inputlarin-divi'>
               
                <input
                placeholder='Your Phone'
                  type='text'
                  id='phone'
                  value={phone}
                  onChange={handlePhoneChange}
                  className={phoneError ? 'error' : 'inputlar'}
                />
                {phoneError && <p className='error-message'>{phoneError}</p>}
              </div>
            </div>

              <div className="form-bottom">
              <div>
                
                <textarea
                placeholder='Your Message'
                  id='message'
                  value={message}
                  onChange={handleMessageChange}
                  className={messageError ? 'error' : ''}
                ></textarea>
                {messageError && <p className='error-message'>{messageError}</p>}
              </div>
              </div>

              <button type='submit'>Submit</button>
              {successMessage && <p className='success-message'>{successMessage}</p>}
            </form>
          </div>
          <div className='bottom-right'>
            <div className='us-card'>
              <h4 className='footer-h4'>US Office</h4>
              <p className='contact-info-p'>
                <HiLocationMarker className='contact-info-icon' />
                08 W 36th St, New York, NY 10001
              </p>
              <p className='contact-info-p'>
                <BsFillTelephoneFill className='contact-info-icon' />
                +1 333 9296
              </p>
              <a href='' className='contact-info-a'>
                <AiOutlineMail className='contact-info-icon' />
                contact@example.com
              </a>
              <a href='' className='contact-info-a'>
                <HiDocumentDownload className='contact-info-icon' />
                Download Brochure
              </a>
            </div>
            <div className='au-card'>
              <h4 className='footer-h4'>Contact Info</h4>
              <p className='contact-info-p'>
                <HiLocationMarker className='contact-info-icon' />
                08 W 36th St, New York, NY 10001
              </p>
              <p className='contact-info-p'>
                <BsFillTelephoneFill className='contact-info-icon' />
                +1 333 9296
              </p>
              <a href='' className='contact-info-a'>
                <AiOutlineMail className='contact-info-icon' />
                contact@example.com
              </a>
              <a href='' className='contact-info-a'>
                <HiDocumentDownload className='contact-info-icon' />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
