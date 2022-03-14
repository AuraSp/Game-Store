import React from 'react'
import './Product.css';

const Product = (props) => {
  
  return (
    <div className='productPage'>
    <div className='prodTitle'>{props.productInfo.name}</div>
    <video className="prodVideo"controls>
                      <source src={props.productInfo.videoUrl} type="video/mp4"/>
    </video>
    <div className='prodPrice'>Price: {props.productInfo.price}$ <button className='prodBuyBtn' onClick={(e)=>{props.addToCart(props.productInfo.name)}}>Add to cart</button></div>
    </div>
  )
}

export default Product