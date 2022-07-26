import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 0;
  justify-content:center;
  background-color: #a334cc;
  height: 2em
  color: fff;
  `
function Navbar(props) {
    const{handleLogout}=props;
  return (
    <div>
      <Title>Markdown Editor
        <button className='button1'onClick={handleLogout}>Logout</button>
        <div className='document'>Document</div>
        <div className='save'>Save</div>
        <Navigation/>
        <MobileNavigation/>
        </Title>
    </div>
  )
}

export default Navbar
