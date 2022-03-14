import React from 'react'
import Data from '../..//Data/Data.json';

const Bigitem = (props) => {

    let product = props.product
function clickedProduct(name, price, videoUrl){
    props.setProduct(name, price, videoUrl);
    }

  return (
    <div className="item">
                  <div className="item1BigImg">
                    <video width="470" className="videoPlayer"controls>
                      <source src={product.trailerUrl} type="video/mp4"/>
                    </video>
                  </div>
                  <div className="itemBigHalf2">  
                    <div className="gameBigTitle"><a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.name}</a> </div>
                    <div className="item1Group">
                      <div className="slot slot1"><img src={product.photo1} alt=""/></div>
                      <div className="slot slot2"><img src={product.photo2} alt=""/></div>
                      <div className="slot slot3"><img src={product.photo3} alt=""/></div>
                      <div className="slot slot4"><img src={product.photo4} alt=""/></div>
                    </div>
                    <div className="item1UnderInfo">
                      <div className="item1Tags">
                        <div className="tag">{product.tags[0]} </div>
                        <div className="tag">{product.tags[1]} </div>
                        <div className="tag">{product.tags[2]} </div>
                        <div className="tag">{product.tags[3]} </div>
                      </div>
                      <div className="item1PriceContainer">  
                        <div className="item1Price"><button className="item1Button">Buy {product.price}</button></div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default Bigitem