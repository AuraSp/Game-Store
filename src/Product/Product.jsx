import React from 'react'
import './Product.css';

const Product = (props) => {
  console.log(props)
  let product = props.productInfo

  return (
    <div className='productPage'>
    <div className='prodTitle'><h2>{product.name}</h2></div>
    <div className='prodVideoWrap'>
      <video className="prodVideo"controls>
                        <source src={product.trailerUrl} type="video/mp4"/>
      </video>
    </div>
    <div className='productImages'>
      <img src={product.photo2} alt="gamePhoto"></img>
      <img src={product.photo3} alt="gamePhoto"></img>
      <img src={product.photo4} alt="gamePhoto"></img>
    </div>

    <div className='productDesc'>
      <div className='prodAbout'>
        <p>{product.about}</p>
      </div>
      <div className='productRequirements'>
      <h5>System requirements</h5>
      <ul>
          <li>OS: {product.specs.os}</li>
          <li>CPU: {product.specs.cpu}</li>
          <li>GPU: {product.specs.gpu}</li>
      </ul>
      </div>
      <div className='prodTags'>
        <h5>Tags</h5>
        <ul>
        {product.tags.map((tag)=>(
          <li key={tag}>{tag}</li>
        ))}
        </ul>
      </div>
    </div>
    <div className='prodPrice'>Price: {product.price}$ <button className='prodBuyBtn' onClick={(e)=>{props.addToCart(product.name)}}>Add to cart</button></div>
    </div>
  )
}

export default Product