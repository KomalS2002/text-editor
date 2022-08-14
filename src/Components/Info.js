import React from 'react'

const Info = styled.div`
  width: 100%;
  color: black;
  height: 1.2em;
  font-weight: 700;
  padding: 5px;
  background-color: #fff;
  text-align: end;
  color: #a334cc;
  font-family: roboto;
  font-size: 20px;
  
  
  `



function Info() {
  return (
    <div>
       {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters
      {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read
    </div>
  )
}

export default Info
