import React from 'react'
import NavLinks from './NavLinks'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function MobileNavigation() {
  const [open, setOpen]=useState(false);
  const HamburgerIcon=<MenuIcon className='hamburger' onClick={()=>setOpen(!open)}/>
  const closeIcon=<CloseIcon className='hamburger' onClick={()=>setOpen(!open)}/>

  return (
    <nav className='MobileNavigation'>
      {open ? closeIcon : HamburgerIcon}
      { open && <NavLinks /> }
    </nav>
  )
}

export default MobileNavigation
