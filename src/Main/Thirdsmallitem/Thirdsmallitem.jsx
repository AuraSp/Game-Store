import React from 'react'

const Thirdsmallitem = (props) => {

    let product = props.product
    function clickedProduct(name ,price, trailer){
        props.setProduct(name, price, trailer);
    }
  return (
    <div className="item3">
    <div className="bigItem3Img"><a href="#" classNameName='expandImg' onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}><img src={product.photo1} alt=""/></a></div>
    <div className="bigItem3Under">
      <div className="discount">-50%</div> 
      <div className="item3Sale"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.price}</a> </div>
    </div>
  </div>
  )
}

export default Thirdsmallitem