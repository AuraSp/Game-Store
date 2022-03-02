import React from 'react'
import './Main.css';

const Main = () => {

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



  return (
    <main>
    <div class="mainPage d-default">
      <div class="mainPartOne">
        <div class="mainOne">
          <div class="carouselWBtns">
            <button class="prevBtn cBtn" onClick={(e) =>{slide(1, "prev")}}>&#8592;</button>
            <div class="carousel">
              <div class="inner">
                <div class="item">
                  <div class="item1BigImg">
                    <video width="470" class="videoPlayer"controls>
                      <source src="https://cdn.akamai.steamstatic.com/steam/apps/256863087/movie480_vp9.webm?t=1638454279.mp4" type="video/mp4"/>
                    </video>
                  </div>
                  <div class="itemBigHalf2">  
                    <div class="gameBigTitle"><a href="">After the Fall</a> </div>
                    <div class="item1Group">
                      <div class="slot slot1"><img src="https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_183b756588307e023d442a63081616160086159c.1920x1080.jpg?t=1643903019" alt=""/></div>
                      <div class="slot slot2"><img src="https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_6fdda1946269f2b38663508927b296a982e60fa9.1920x1080.jpg?t=1643903019" alt=""/></div>
                      <div class="slot slot3"><img src="https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_136ae602216b3fabbd0f6210bf129470f2e6c70c.1920x1080.jpg?t=1643903019" alt=""/></div>
                      <div class="slot slot4"><img src="https://cdn.akamai.steamstatic.com/steam/apps/751630/ss_e78f8b8c829d2661ced1d9d792f264eb220bf2ed.1920x1080.jpg?t=1643903019" alt=""/></div>
                    </div>
                    <div class="item1UnderInfo">
                      <div class="item1Tags">
                        <div class="tag">Action</div>
                        <div class="tag">Adventure</div>
                        <div class="tag">Co-op</div>
                        <div class="tag">Gore</div>
                      </div>
                      <div class="item1PriceContainer">  
                        <div class="item1Price"><button class="item1Button">Buy 31,99$</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item1BigImg">
                    <video width="470" class="videoPlayer" controls>
                     <source src="https://cdn.akamai.steamstatic.com/steam/apps/256864004/movie480_vp9.webm?t=1639001817.mp4" type="video/mp4"/>
                  </video>
                </div>
                  <div class="itemBigHalf2">
                    <div class="gameBigTitle"><a href="">God of War</a> </div>
                    <div class="item1Group">
                      <div class="slot slot1"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.600x338.jpg?t=1642526157" alt=""/></div>
                      <div class="slot slot2"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.600x338.jpg?t=1642526157" alt=""/></div>
                      <div class="slot slot3"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_93a3ca63aa2cd8c675bbb6430324ee3f2d44b845.600x338.jpg?t=1642526157" alt=""/></div>
                      <div class="slot slot4"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_0858b868ea51d53f73bd805ba7382f027dd33dca.600x338.jpg?t=1642526157" alt=""/></div>
                    </div>
                    <div class="item1UnderInfo">
                      <div class="item1Tags">
                        <div class="tag">Action</div>
                        <div class="tag">Adventure</div>
                        <div class="tag">RPG</div>
                        <div class="tag">Mythology</div>
                      </div>
                      <div class="item1PriceContainer">
                        <div class="item1Price"><button class="item1Button">Buy 49,99$</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item1BigImg">
                    <video width="470" class="videoPlayer" controls>
                      <source src="https://cdn.akamai.steamstatic.com/steam/apps/256768371/movie480.webm?t=1574881352.mp4" 
                      type="video/mp4"/>
                    </video>
                  </div>
                  <div class="itemBigHalf2">
                    <div class="gameBigTitle"><button class="item1Button">Red Dead Redemption 2</button> </div>
                    <div class="item1Group">
                      <div class="slot slot1"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.600x338.jpg?t=1618851907" alt=""/></div>
                      <div class="slot slot2"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.600x338.jpg?t=1618851907" alt=""/></div>
                      <div class="slot slot3"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_668dafe477743f8b50b818d5bbfcec669e9ba93e.600x338.jpg?t=1618851907" alt=""/></div>
                      <div class="slot slot4"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1174180/ss_4ce07ae360b166f0f650e9a895a3b4b7bf15e34f.600x338.jpg?t=1618851907" alt=""/></div>
                    </div>
                    <div class="item1UnderInfo">
                      <div class="item1Tags">
                        <div class="tag">Open world</div>
                        <div class="tag">Adventure</div>
                        <div class="tag">Western</div>
                        <div class="tag">Story rich</div>
                      </div>
                      <div class="item1PriceContainer">
                        <div class="item1Price"><button class="item1Button">Buy 59,99$</button></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item1BigImg">
                    <video width="470" class="videoPlayer" controls>
                      <source src="https://cdn.akamai.steamstatic.com/steam/apps/256776470/movie480.webm?t=1585225680.mp4" 
                      type="video/mp4"/>
                    </video>
                  </div>
                  <div class="itemBigHalf2">
                    <div class="gameBigTitle"><a href="">Half-Life: Alyx</a> </div>
                    <div class="item1Group">
                      <div class="slot slot1"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1104380/ss_da44890033fe83bc27351b94ed8e795a2711719e.600x338.jpg?t=1598283504" alt=""/></div>
                      <div class="slot slot2"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1104380/ss_a9aaa43921663eb22b41391a7d35760cc1195d97.600x338.jpg?t=1598283504" alt=""/></div>
                      <div class="slot slot3"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1104380/ss_f2b7c606dd2b1d68c9920bdb839dfb897e2384ee.600x338.jpg?t=1598283504" alt=""/></div>
                      <div class="slot slot4"><img src="https://cdn.akamai.steamstatic.com/steam/apps/1104380/ss_7a0cd4c786037c8fcb30bc072271b37a16624fba.600x338.jpg?t=1598283504" alt=""/></div>
                    </div>
                    <div class="item1UnderInfo">
                      <div class="item1Tags">
                        <div class="tag">Adventure</div>
                        <div class="tag">Puzzle</div>
                        <div class="tag">VR</div>
                        <div class="tag">Mystery</div>
                      </div>
                      <div class="item1PriceContainer">
                        <div class="item1Price"><button class="item1Button">Buy 49,99$</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="nextBtn cBtn" onClick={(e) =>{slide(1, "next")}}>&#8594;</button>
          </div>
        </div>
        <div class="mainTwo">
          <div class="carouselWBtns">
            <button class="prevBtn2 prev" onClick={(e) =>{slide(2, "prev")}}>&#8592;</button>
            <div class="carousel">
              <div class="inner2">
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256835424/movie.184x123.jpg?t=1622147945" alt=""/></a></div>
                  <div class="item2Price"><a href="">59,99$</a> </div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256845668/movie.184x123.jpg?t=1628547580" alt=""/></a></div>
                  <div class="item2Price"><a href="">59,99$</a></div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256871508/movie.184x123.jpg?t=1643929088" alt=""/></a></div>
                  <div class="item2Price"><a href="">59,99$</a></div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256857413/movie.184x123.jpg?t=1635214015" alt=""/></a></div>
                  <div class="item2Price"> <a href="">5$</a></div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256869812/movie.184x123.jpg?t=1642604430" alt=""/></a></div>
                  <div class="item2Price"><a href="">59,99$</a></div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256774233/movie.184x123.jpg?t=1580855679" alt=""/></a></div>
                  <div class="item2Price"><a href="">35,99$</a></div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256790450/movie.184x123.jpg?t=1592919273" alt=""/></a></div>
                  <div class="item2Price"><a href=""> 4,79$</a></div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256864056/movie.184x123.jpg?t=1639008846" alt=""/></a></div>
                  <div class="item2Price"><a href="">22,99$</a> </div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256811987/movie.184x123.jpg?t=1618921734" alt=""/></a></div>
                  <div class="item2Price"><a href="">32,99$</a> </div>
                </div>
                <div class="item2">
                  <div class="item2Img"><a href=""><img src="https://cdn.akamai.steamstatic.com/steam/apps/256767815/movie.184x123.jpg?t=1583175736" alt=""/></a></div>
                  <div class="item2Price"><a href="">49,99$</a> </div>
                </div>
              </div>
            </div>
            <button class="nextBtn2 prev " onClick={(e) =>{slide(2, "next")}}>&#8594;</button>
          </div>
        </div>
        <div class="mainThree">
          <div class="carouselWBtns">
            <button class="prevBtn3 cBtn" onClick={(e) =>{slide(3, "prev")}}>&#8592;</button>
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
            <button class="nextBtn3 cBtn" onClick={(e) =>{slide(3, "next")}}>&#8594;</button>
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