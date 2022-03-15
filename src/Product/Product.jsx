import React from 'react'
import './Product.css';

const Product = (props) => {
  console.log(props.productInfo)

  return (
    <div className='productPage'>
    <div className='prodTitle'>{props.productInfo.name}</div>
    <video class="prodVideo"controls>
                      <source src={props.productInfo.videoUrl} type="video/mp4"/>
    </video>
    <div className='productImages'>
      <img src={props.productInfo.photos[0]}></img>
      <img src={props.productInfo.photos[1]}></img>
      <img src={props.productInfo.photos[2]}></img>
    </div>

    <div className='productDesc'>
    </div>
    <div className='prodPrice'>Price: {props.productInfo.price}$ <button className='prodBuyBtn' onClick={(e)=>{props.addToCart(props.productInfo.name)}}>Add to cart</button></div>
    </div>
  )
}

export default Product