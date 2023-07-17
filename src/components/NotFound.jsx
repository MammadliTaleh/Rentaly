import React from 'react'
import './NotFound.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import './Button.css'




export const NotFound = () => {
  return (
   <div className="not-found">
    <div className="not-found-left">
    <h3 className="not-found-left-h3">Something's missing.</h3>
    <h6 className="not-found-left-h6">Looks like this page is missing. Don't worry though, our best team is on <br />the case.</h6>
    <Link to='/'> <Button butonunIcindekiDeyer='Go Back' className='not-found-button'/> </Link>
    </div>
    <div className="not-found-right">
      <h1 className="not-found-right-h1">404</h1>
      <h4 className="not-found-right-h4">Not Found</h4>
    </div>
   </div>
  )
}
export default NotFound