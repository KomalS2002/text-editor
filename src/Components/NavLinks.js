import React from 'react'


function NavLinks(props) {
    const{handleLogout}=props;
  return (
    <>
    
      <div className='title'> Markdown Editor
          <div className='work'>
          <div className='document'>Document</div>
          <div className='save1'>Save</div>
          <div><button className='button1'onClick={handleLogout}>Logout</button></div>
          </div>
        </div>
    
    </>
  )
}

export default NavLinks
