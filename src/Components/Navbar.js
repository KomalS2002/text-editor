import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'



function Navbar() {
    
  return (
    <div className='Navbar'>
     <Navigation/>
     <MobileNavigation/>
    </div>
  )
}

export default Navbar
