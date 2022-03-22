import React from 'react'

const Tallitem = (props) => {
    let product = props.product
  return (
    <div className="bigItem3">
                <a href={() => false} onClick={(e)=>{props.setProduct(product)}}>
                  <div className="bigItem3Img"><img src={product.photo1}alt=""/></div>
                  <div className="bigItem3Under">
                    <div className="discount">-20%</div> 
                    <div className="item3Sale"><a href={() => false} onClick={(e)=>{props.setProduct(product)}}>{product.price}$</a> </div>
                  </div>
                </a>
    </div>
  )
}

export default Tallitem