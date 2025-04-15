import React from 'react'
import './Products.css';
import Buttons from '../../components/Buttons/Buttons'
import { products } from '../../data';
function Products() {
  return (
    <>
    <div className='products-header flex'>
        <h1>My Products</h1>
        <Buttons/>
        </div>
        
<div className='products-items flex'>
{
    products.map((e,index)=>(
        <div className='product-item'>
            <span className='icon'>{e.icon}</span>
            <img src={e.imageSrc}/>
            <h3>{e.title}</h3>
        </div>
    ))
}
</div>
</>

  )
}

export default Products