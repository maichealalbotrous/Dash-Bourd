import React from 'react'
import './Main.css';
import banner from '../../assets/banner.jpg'
import { BsArrow90DegRight } from 'react-icons/bs';
import HelpCenter from "../help center/HelpCenter";
function Main() {
  return (
    <div className='main-container flex'>
        <div className='banner flex'>
            <h1>Creat and sell extraordinary products</h1>
            <p>the world's fast growing industry today are natural made products </p>
            <div className='buttons flex'>
                <button className='btn'>Explore More</button>
                <button className='btn transparent'>top saller</button>

            </div>
            <div className='banner-image'>
                <img src={banner}/>
            </div>
        </div>

        <div className='main-content flex'>
            <div className='stat flex'>
                <div className='stat-text'>
                    <h1>My state</h1>
                    <div className='flex'>
                        <span> Today <br/> <small>5 orders</small> </span>
                        <span> This month <br/> <small>135 orders</small> </span>
                    </div>
                    <div className='link flex'>
                        Go To My Order <BsArrow90DegRight className='icon'/>
                    </div>
                </div>
            </div>
        </div>
        <HelpCenter/>
    </div>
  )
}

export default Main