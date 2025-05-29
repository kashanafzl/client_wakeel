import React from 'react'
import './Video.css'

import videoimg from '../../../Asserts/Img/videoimg.svg'
import playicon from '../../../Asserts/Img/playicon.svg'
export default function Video() {
  return (
    <div>

      <div className="maindivofvideo">
      <h1>Our Goals & Achievements <br />
         in Legal Practice</h1>
         <p>Whether you're a business owner, an individual facing legal challenges, or a family seeking guidance, Legal Sphere is dedicated to securing the best possible outcome for you.
        
         </p>
        <div className='videoimgdiv'>
        <img className='videoimg' src={videoimg} alt="" />
        <img className='playicon' src={playicon} alt="" />
        </div>
      </div>
    </div>
  )
}
