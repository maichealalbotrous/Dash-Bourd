import React from 'react'
import './Activity.css';
import Buttons from '../../components/Buttons/Buttons';
import { customers } from '../../data';
function Activity() {
  return (
    <div className='activity'>
        <div className='heading flex'>
            <h1>Recent Activity</h1>
            <Buttons/>
        </div>

        <div className='customers grid'>
            {
                customers.map((e,index)=>(
                    <div className='customer flex'>
                        <img src={e.image}/>
                        <div className='customer-details'>
                            <div className='name'>
                                {e.title}
                            </div>
                            <small>{e.content}</small>
                            <div className='duration'>{e.duration}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Activity