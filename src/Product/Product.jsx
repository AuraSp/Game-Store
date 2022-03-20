import React from 'react';
import './Product.css';

const Product = (props) => {
  console.log(props)
  let product = props.productInfo

  return (
    <div className='productPage'>
      <span className='prodTitle'>{product.name}</span>
      <div className='prodVideoWrap'>
        <video className="prodVideo" controls>
          <source src={product.trailerUrl} type="video/mp4" />
        </video>
      </div>

      <div className='productDesc'>
        <h2>Summary for {product.name}</h2>
        <div className='productSummary'>
          <div className='prodInfoBlock'>
            <div className='prodAbout'>
              <h3>Product Description</h3>
              <p>{product.about}</p>
            </div>
            <div className='prodPrice'>
              <span>Price:&nbsp;</span><p>${product.price}</p><button className='prodBuyBtn' onClick={(e) => { props.addToCart(product.name) }}>Add to cart</button></div>
          </div>
          <div className='productAdditional'>
            <div className='productRequirements'>
              <h3>System requirements</h3>
              <ul>
                <li><span>OS:</span> {product.specs.os}</li>
                <li><span>CPU:</span> {product.specs.cpu}</li>
                <li><span>GPU:</span> {product.specs.gpu}</li>
              </ul>
            </div>
            <div className='prodTags'>
              <h3>Tags</h3>
              <ul>
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <hr></hr>
              <p>In-Game Purchases, Users Interact</p>
            </div>
          </div>
        </div>
      </div>

      <div className='productMedia'>
        <h2>Related Media for {product.name}</h2>
        <div className='productImages'>
          <img src={product.photo2} alt="gamePhoto"></img>
          <img src={product.photo3} alt="gamePhoto"></img>
          <img src={product.photo4} alt="gamePhoto"></img>
        </div>
      </div>

      {/* <div className='productDesc'>
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
            {product.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='prodPrice'>Price: {product.price}$ <button className='prodBuyBtn' onClick={(e) => { props.addToCart(product.name) }}>Add to cart</button></div> */}
    </div>
  )
}

export default Product