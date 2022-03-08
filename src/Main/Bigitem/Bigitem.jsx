import React from 'react'
import Data from '../..//Data/Data.json';

const Bigitem = (props) => {

    let product = props.product
function clickedProduct(name, price, videoUrl){
    props.setProduct(name, price, videoUrl);
    }

  return (
    <div class="item">
                  <div class="item1BigImg">
                    <video width="470" class="videoPlayer"controls>
                      <source src={product.trailerUrl} type="video/mp4"/>
                    </video>
                  </div>
                  <div class="itemBigHalf2">  
                    <div class="gameBigTitle"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.name}</a> </div>
                    <div class="item1Group">
                      <div class="slot slot1"><img src={product.photo1} alt=""/></div>
                      <div class="slot slot2"><img src={product.photo2} alt=""/></div>
                      <div class="slot slot3"><img src={product.photo3} alt=""/></div>
                      <div class="slot slot4"><img src={product.photo4} alt=""/></div>
                    </div>
                    <div class="item1UnderInfo">
                      <div class="item1Tags">
                        <div class="tag">{product.tags[0]} </div>
                        <div class="tag">{product.tags[1]} </div>
                        <div class="tag">{product.tags[2]} </div>
                        <div class="tag">{product.tags[3]} </div>
                      </div>
                      <div class="item1PriceContainer">  
                        <div class="item1Price"><button class="item1Button">Buy {product.price}</button></div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default Bigitem