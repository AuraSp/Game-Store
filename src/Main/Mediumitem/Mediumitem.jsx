import React from 'react'

const Mediumitem = (props) => {
    let product = props.product

  return (
    <div className="item2">
    <div className="item2Img"><a href={() => false} onClick={(e)=>{props.setProduct(product)}}><img src={product.photo1} alt=""/></a></div>
    <div className="item2Price"><a href={() => false}>59,99$</a> </div>
    </div>
  )
}

export default Mediumitem