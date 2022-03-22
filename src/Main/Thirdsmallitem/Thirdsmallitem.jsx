import React from 'react'

const Thirdsmallitem = (props) => {

    let product = props.product
  return (
    <div className="item3">
    <div className="bigItem3Img"><a href={() => false} className='expandImg' onClick={(e)=>{props.setProduct(product)}}><img src={product.photo1} alt=""/></a></div>
    <div className="bigItem3Under">
      <div className="discount">-50%</div> 
      <div className="item3Sale"><a href={() => false} onClick={(e)=>{props.setProduct(product)}}>{product.price}$</a> </div>
    </div>
  </div>
  )
}

export default Thirdsmallitem