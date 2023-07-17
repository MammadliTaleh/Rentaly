import React from 'react'
import './Button.css'

export const Button = (props) => {
    console.log(props.butonunIcindekiDeyer)
  return (
    <button className='navbardaki-button' >{props.butonunIcindekiDeyer}</button>

  )
}

export default Button