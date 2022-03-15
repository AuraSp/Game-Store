import React from 'react'

const Thirdsmallitem = (props) => {

    let product = props.product
    function clickedProduct(name ,price, trailer, photos){
        props.setProduct(name, price, trailer, photos);
    }
  return (
    <div class="item3">
    <div class="bigItem3Img"><a href="#" className='expandImg' onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl, [product.photo2, product.photo3, product.photo4] )}}><img src={product.photo1} alt=""/></a></div>
    <div class="bigItem3Under">
      <div class="discount">-50%</div> 
      <div class="item3Sale"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.price}</a> </div>
    </div>
  </div>
  )
}

export default Thirdsmallitem