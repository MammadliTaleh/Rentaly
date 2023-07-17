import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// components


 import Home from './components/Home';
 import NotFound from './components/NotFound';
 import MyFavoriteCars from './components/MyFavoriteCars';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { useEffect, useState } from 'react';


function App() {

  const [loader,setLoader] =useState(true)
  useEffect(()=>{
  setTimeout(()=>{
  setLoader(false)
  },7000)
  },[])

  return (
   <>
   {
    loader ? (
      <div className='loader'>
      <div className='bar bar1'></div>
      <div className='bar bar2'></div>
      <div className='bar bar3'></div>
      <div className='bar bar4'></div>
      <div className='bar bar5'></div>
     </div>
    ) : 
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/cars' element={<NotFound />} /> 
    <Route path='/booking' element={<NotFound />} /> 
    <Route path='/news' element={<NotFound />} /> 
    <Route path='/myaccount' element={<NotFound />} /> 
    <Route path='/contact' element={<ContactUs />} /> 
    <Route path='/about' element={<AboutUs />} /> 

    </Routes>

</BrowserRouter>
 
   }






   </>
   
  );
}

export default App;
