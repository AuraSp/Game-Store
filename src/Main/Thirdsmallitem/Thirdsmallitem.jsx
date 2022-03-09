import React from 'react'

const Thirdsmallitem = (props) => {

    let product = props.product
    function clickedProduct(name ,price, trailer){
        props.setProduct(name, price, trailer);
    }
  return (
    <div class="item3">
    <div class="bigItem3Img"><a href="#" className='expandImg' onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}><img src={product.photo1} alt=""/></a></div>
    <div class="bigItem3Under">
      <div class="discount">-50%</div> 
      <div class="item3Sale"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.price}</a> </div>
    </div>
  </div>
  )
}

export default Thirdsmallitem