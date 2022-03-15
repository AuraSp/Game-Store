import React from 'react'

const Tallitem = (props) => {
    let product = props.product
  return (
    <div class="bigItem3">
                <a href='#' onClick={(e)=>{props.setProduct()}}>
                  <div class="bigItem3Img"><img src={product.photo1}alt=""/></div>
                  <div class="bigItem3Under">
                    <div class="discount">-20%</div> 
                    <div class="item3Sale"><a href="#" onClick={(e)=>{props.setProduct()}}>{product.price}</a> </div>
                  </div>
                </a>
    </div>
  )
}

export default Tallitem