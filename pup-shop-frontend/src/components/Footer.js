import React from 'react'
import './css/Footer.scss'

const Footer =()=>{
  const year = new Date().getFullYear()
  return(
    <div className="footer">
    {year} ©️ PUP SHOP 🐶
    </div>
  )
}

export default Footer
