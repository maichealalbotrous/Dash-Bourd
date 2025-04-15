import React from 'react'
import './Buttons.css';
import { BiRightArrowAlt } from 'react-icons/bi';
function Buttons() {
  return (
    <button className='btn'>
        See All<BiRightArrowAlt className=' icon'/>
    </button>
  )
}

export default Buttons