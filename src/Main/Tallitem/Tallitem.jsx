import React from 'react'

const Tallitem = (props) => {
    let product = props.product
    function clickedProduct(name ,price, trailer){
        props.setProduct(name, price, trailer);
    }
  return (
    <div className="bigItem3">
                <a href='#' onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>
                  <div className="bigItem3Img"><img src={product.photo1}alt=""/></div>
                  <div className="bigItem3Under">
                    <div className="discount">-20%</div> 
                    <div className="item3Sale"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.price}</a> </div>
                  </div>
                </a>
    </div>
  )
}

export default Tallitem