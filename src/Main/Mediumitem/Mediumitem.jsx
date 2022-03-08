import React from 'react'

const Mediumitem = (props) => {
    let product = props.product
    function clickedProduct(name, price, videoUrl){
        props.setProduct(name, price, videoUrl);
        }
  return (
    <div class="item2">
    <div class="item2Img"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl)}}><img src={product.photo1} alt=""/></a></div>
    <div class="item2Price"><a href="">59,99$</a> </div>
    </div>
  )
}

export default Mediumitem