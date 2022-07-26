import React from 'react'

function NavLinks(props) {
    const{handleLogout}=props;
  return (
    <div>
      <div>Markdown Editor
        <button className='button1'onClick={handleLogout}>Logout</button>
        <div className='document'>Document</div>
        <div className='save'>Save</div>
        
        </div>
    </div>
  )
}

export default NavLinks
