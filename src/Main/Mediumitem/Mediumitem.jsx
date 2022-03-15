import React from 'react'

const Mediumitem = (props) => {
    let product = props.product

  return (
    <div class="item2">
    <div class="item2Img"><a href="#" onClick={(e)=>{props.setProduct()}}><img src={product.photo1} alt=""/></a></div>
    <div class="item2Price"><a href="">59,99$</a> </div>
    </div>
  )
}

export default Mediumitem