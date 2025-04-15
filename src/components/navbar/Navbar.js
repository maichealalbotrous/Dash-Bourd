import React from 'react'
import './Navbar.css';
import { BiSearchAlt } from 'react-icons/bi';
import { TbMassage } from 'react-icons/tb';
import { MdNotifications } from 'react-icons/md';
import user1 from '../../assets/user1.jpg';
function Navbar() {
  return (
    <div className='header flex'>
        <div className='title'>
            <h1>Welcome to dashbord</h1>
            <p>hello john ,welcomeback</p>
        </div>

    <div className='searchBar flex'>
        <input placeholder='Serch'/>
        <BiSearchAlt className='icon'/>
        </div>   

        <div className='admin flex'>
            <TbMassage className='icon'/>
            <MdNotifications className='icon'/>
            <div className='admin-image'>
                <img src={user1}/>
            </div>
            </div>      
    </div>
  )
}

export default Navbar