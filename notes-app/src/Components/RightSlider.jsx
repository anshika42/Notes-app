import React from 'react'
import image from "../Image/background.png"

const Main = () => {
  return (
    <div style={{display:"flex"}}>
      
      <div style={{background:"#DAE5F5", width:"66vw" ,height:"100vh"}}>
      <img style={{ width:"299px" ,marginTop:"25%" , marginLeft:"25%"}}src= {image} />
      <h2 style={{marginLeft:"40%"}}>Pocket Notes</h2>
      <p style={{fontSize:"13px" ,marginLeft:"25%",marginRight:"19%" , marginTop:"2%"}}>Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
    </div>
  )
}

export default Main
