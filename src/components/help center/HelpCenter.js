import React from 'react'
import './HelpCenter.css';
import { BsQuestionCircle } from 'react-icons/bs';
function HelpCenter() {
  return (
    <div className='helpCenter'>
        <BsQuestionCircle className='icon'/>
        <div className='content'>
          <div className='circle1'></div>
          <div className='circle2'></div>

        <h3>
            Help Center
        </h3>
        <p>
           Having troubles please contact us for more question 
        </p>
        <button className='btn'>GO to help center</button>
        </div>
    </div>
  )
}

export default HelpCenter