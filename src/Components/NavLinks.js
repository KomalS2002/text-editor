import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
  font-size: 25px;
  width: 1270px;
  font-weight: 700;
  margin-bottom: 0;
  margin:0;
  display: flex;
  flex-direction:row;
  padding: 15px;
  justify-content:space-between;
  background-color: #a334cc;
  height: 2em;
  color: fff;
  `
function NavLinks(props) {
    const{handleLogout}=props;
  return (
    <>
    
      <Title> Markdown Editor

          <div className='document'>Document</div>
          <div className='save1'>Save</div>
          <div><button className='button1'onClick={handleLogout}>Logout</button></div>
        
        </Title>
    
    </>
  )
}

export default NavLinks
