import React from 'react'
import LeftSlider from "./LeftSlider"
import RightSlider from "./RightSlider"
import Data from './Data'

const MainPage = () => {
  return (
    <div style={{display:"flex"}}>
      <LeftSlider/>
      <RightSlider/>
    </div>
  )
}

export default MainPage
