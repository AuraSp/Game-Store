import React from 'react'
import './Main.css';
import Data from '../Data/Data.json';
import Bigitem from './Bigitem/Bigitem';
import Mediumitem from './Mediumitem/Mediumitem';

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
  

  function clickedProduct(name, price, videoUrl){
    props.setProduct(name, price, videoUrl);
  }

  console.log(Data[0])


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
                  product.status == 1 && <Mediumitem setProduct={clickedProduct} product={product}/>
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
                <div class="bigItem3">
                  <div class="bigItem3Img"><img src="https://static.kinguin.net/cdn-cgi/image/h=630,q=80,fit=scale-down,f=auto/media/catalog/category/cache/1/hi_image/9df78eab33525d08d6e5fb8d27136e95/fffff800_1_1.jpeg" alt=""/></div>
                  <div class="bigItem3Under">
                    <div class="discount">-20%</div> 
                    <div class="item3Sale"><a href=""> 39.99$</a> </div>
                  </div>
                </div>
                <div class="itemGroup3">
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/1426210/ss_a15164ddd357ab3c0b2aff575a6b215b2d91b406.1920x1080.jpg?t=1643015238" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-50%</div> 
                      <div class="item3Sale"><a href=""> 9,99$</a> </div>
                    </div>
                  </div>
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/MMVtwdH_350x200_1x-0.jpg" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-34%</div> 
                      <div class="item3Sale"><a href=""> 16.49$</a> </div>
                    </div>
                  </div>
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/7F73tyzSog3sF4VrNKAptXBlJOd6fytQ0_8QmStzkvQ_350x200_1x-0.jpeg" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-94% </div> 
                      <div class="item3Sale"><a href="">0.84$</a> </div>
                    </div>
                  </div>
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/N0Omuykv9hcXyHRttSigBR3ZvlIj0fRBAHG5VSHkO94_350x200_1x-0.jpeg" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-72%</div> 
                      <div class="item3Sale"><a href=""> 2.75$</a> </div>
                    </div>
                  </div>
                </div>
                <div class="bigItem3">
                  <div class="bigItem3Img"><img src="https://cdn-products.eneba.com/resized-products/Xl1yxdDvS66HrBBK3wVM03JuBzJrcXmJyz91if0l2NA_350x200_1x-0.jpeg" alt=""/></div>
                  <div class="bigItem3Under">
                    <div class="discount">-10%</div> 
                    <div class="item3Sale"><a href="">25.47$</a> </div>
                  </div>
                </div>
                <div class="itemGroup3">
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/Cuu1GmaLMcoJZ7f1TTk3gLRJz17CWJZlBQIi1_PPymk_350x200_1x-0.jpeg" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-26%</div> 
                      <div class="item3Sale"><a href=""> 36.99$</a> </div>
                    </div>
                  </div>
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/vjTU_Oa9q0awrM_i5rLmsoTRKnmQ8skpcznCpMuxzrI_350x200_1x-0.png" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-41%</div> 
                      <div class="item3Sale"><a href=""> 9.99$</a> </div>
                    </div>
                  </div>
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/3egYgJJ_350x200_1x-0.jpg" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="discount">-82% </div> 
                      <div class="item3Sale"><a href="">7.14$</a> </div>
                    </div>
                  </div>
                  <div class="item3">
                    <div class="bigItem3Img"><a href=""><img src="https://cdn-products.eneba.com/resized-products/HPo0XplBzFVhUebw35L9NzdE_RStz5QP5_Yj11Qa2vo_350x200_1x-0.jpeg" alt=""/></a></div>
                    <div class="bigItem3Under">
                      <div class="item3Sale"><a href="">6.49$</a> </div>
                    </div>
                  </div>
                </div>
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