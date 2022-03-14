import React from 'react'

const Mediumitem = (props) => {
    let product = props.product
    function clickedProduct(name, price, videoUrl){
        props.setProduct(name, price, videoUrl);
        }
  return (
    <div className="item2">
    <div className="item2Img"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl)}}><img src={product.photo1} alt=""/></a></div>
    <div className="item2Price"><a href="">59,99$</a> </div>
    </div>
  )
}

export default Mediumitem