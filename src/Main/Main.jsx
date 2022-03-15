import React from 'react'
import './Main.css';
import Data from '../Data/Data.json';
import Bigitem from './Bigitem/Bigitem';
import Mediumitem from './Mediumitem/Mediumitem';
import Tallitem from './Tallitem/Tallitem';
import Thirdsmallitem from './Thirdsmallitem/Thirdsmallitem';

const Main = (props) => {

  let cTranslate1 = 0;
  let cTranslate2 = 0;
  let cTranslate3 = 0;
  function slide(carousel, side){
    if(carousel == 3){
      if(side == "prev"){
        console.log("prev")
        if (cTranslate3 > 0) {
          cTranslate3 -= 50;
          if (cTranslate3 == 1) {
            cTranslate3 = 0;
          }
          document.querySelector(".inner3").style.transform = `translateX(${-cTranslate3}%)`;
        }
      }
      else{
        if (cTranslate3 < 50) {
          cTranslate3 += 50;
          if (cTranslate3 == 99) {
            cTranslate3 = 100;
          }
          document.querySelector(".inner3").style.transform = `translateX(${-cTranslate3}%)`;
        }
      }
    }
    else if(carousel == 2){
      if(side == "prev"){
        console.log("prev")
        if (cTranslate2 > 0) {
          cTranslate2 -= 50;
          if (cTranslate2 == 1) {
            cTranslate2 = 0;
          }
          document.querySelector(".inner2").style.transform = `translateX(${-cTranslate2}%)`;
        }
      }
      else{
        if (cTranslate2 < 50) {
          cTranslate2 += 50;
          if (cTranslate2 == 99) {
            cTranslate2 = 100;
          }
          document.querySelector(".inner2").style.transform = `translateX(${-cTranslate2}%)`;
        }
      }
    }
    else if(carousel == 1){
      if(side == "prev"){
        console.log("prev")
        if (cTranslate1 > 0) {
          cTranslate1 -= 25;
          if (cTranslate1 == 1) {
            cTranslate1 = 0;
          }
          document.querySelector(".inner").style.transform = `translateX(${-cTranslate1}%)`;
        }
      }
      else{
        if (cTranslate1 < 75) {
          cTranslate1 += 25;
          if (cTranslate1 == 99) {
            cTranslate1 = 100;
          }
          document.querySelector(".inner").style.transform = `translateX(${-cTranslate1}%)`;
        }
      }
    }
  }
  

  function clickedProduct(prod){
    console.log(prod)
    /* props.setProduct(name, price, videoUrl, photos); */
  }

  return (
    <main>
    <div class="mainPage d-default">
      <div class="mainPartOne">
        <div class="mainOne">
          <div class="carouselWBtns">
            <button class="prevBtn cBtn" onClick={(e) =>{slide(1, "prev")}}>&#10577;</button>
            <div class="carousel">
              <div class="inner">
                {Data.map((product) =>(
                    product.status == 0 && <Bigitem setProduct={clickedProduct} product={product}/>
                ))}
              </div>
            </div>
            <button class="nextBtn cBtn" onClick={(e) =>{slide(1, "next")}}>&#10575;</button>
          </div>
        </div>
        <div class="mainTwo">
          <div class="carouselWBtns">
            <button class="prevBtn2 prev" onClick={(e) =>{slide(2, "prev")}}>&#10577;</button>
            <div class="carousel">
              <div class="inner2">
                {Data.map((product) =>(
                  product.status == 1 && <Mediumitem setProduct={clickedProduct(product)} product={product}/>
                ))}
              </div>
            </div>
            <button class="nextBtn2 prev " onClick={(e) =>{slide(2, "next")}}>&#10575;</button>
          </div>
        </div>
        <div class="mainThree">
          <div class="carouselWBtns">
            <button class="prevBtn3 cBtn" onClick={(e) =>{slide(3, "prev")}}>&#10577;</button>
            <div class="carousel">
              <div class="inner3">
                {Data.map((product) =>(
                  product.status == 21 && <div className='slide3'>
                    <Tallitem setProduct={clickedProduct} product={product}/>
                    <div class="itemGroup3">
                      {Data.map((product) =>(
                        product.status== 3&& <Thirdsmallitem setProduct={clickedProduct} product={product}/>
                      ))}
                    </div>
                  </div>
                ))}
                {Data.map((product) =>(
                  product.status == 22 && <div className='slide3'>
                    <Tallitem setProduct={clickedProduct} product={product}/>
                    <div class="itemGroup3">
                      {Data.map((product) =>(
                        product.status== 4&& <Thirdsmallitem setProduct={clickedProduct} product={product}/>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button class="nextBtn3 cBtn" onClick={(e) =>{slide(3, "next")}}>&#10575;</button>
          </div>
        </div>
      </div>

      <section class="container-4-flex">
        <div class="item-1-top">
          <h1 class="item-1-top-h1">Looking for recommendations?</h1>
          <p class="item-1-top-p">
            Sign in to view personalized recommendations
          </p>
        </div>
        <div class="item-2-bottom">
          <a href="../PAGE/login.html" class="log-in-btn" type="button">
            Sign In
          </a>
          <p class="item-2-bottom-p">
            Or
            <a href="../PAGE/signup.html">sign up</a> and join for free
          </p>
        </div>
      </section>

    </div>
  </main>
  )
}

export default Main