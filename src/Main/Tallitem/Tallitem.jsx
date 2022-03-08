import React from 'react'

const Tallitem = (props) => {
    let product = props.product
    function clickedProduct(name ,price, trailer){
        props.setProduct(name, price, trailer);
    }
  return (
    <div class="bigItem3">
                <a href='#' onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>
                  <div class="bigItem3Img"><img src={product.photo1}alt=""/></div>
                  <div class="bigItem3Under">
                    <div class="discount">-20%</div> 
                    <div class="item3Sale"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.price}</a> </div>
                  </div>
                </a>
    </div>
  )
}

export default Tallitem