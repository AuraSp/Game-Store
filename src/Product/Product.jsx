import React from 'react'
import './Product.css';

const Product = (props) => {
  console.log(props)

  return (
    <div className='productPage'>
    <div className='prodTitle'>{props.productInfo.name}</div>
    <video className="prodVideo"controls>
                      <source src={props.productInfo.trailerUrl} type="video/mp4"/>
    </video>
    <div className='productImages'>
      <img src={props.productInfo.photo2} alt="gamePhoto"></img>
      <img src={props.productInfo.photo3} alt="gamePhoto"></img>
      <img src={props.productInfo.photo4} alt="gamePhoto"></img>
    </div>

    <div className='productDesc'>
      <p>{props.productInfo.about}</p>
    </div>
    <div className='productRequirements'>
      <h5>System requirements</h5>
      <ul>
          <li>OS: {props.productInfo.specs.os}</li>
          <li>CPU: {props.productInfo.specs.cpu}</li>
          <li>GPU: {props.productInfo.specs.gpu}</li>
      </ul>
    </div>
    <div className='tags'>
      <h5>Tags</h5>
      <ul>
      {props.productInfo.tags.map((tag)=>(
        <li key={tag}>{tag}</li>
      ))}
      </ul>
    </div>
    <div className='prodPrice'>Price: {props.productInfo.price}$ <button className='prodBuyBtn' onClick={(e)=>{props.addToCart(props.productInfo.name)}}>Add to cart</button></div>
    </div>
  )
}

export default Product