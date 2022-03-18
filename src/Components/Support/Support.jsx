import React from 'react'
import './Support.css';


const Support = () => {

    function buttonShow1(){
        document.querySelector(".allItem").classList.toggle("show");
    }
    function buttonShowItem1(){
        document.querySelector("#supportGamesSoftwere1").classList.toggle("show")
        document.querySelector(".hideButton").classList.toggle("show");
    }
    function buttonShow2(){
        document.querySelector("#supportPurchases").classList.toggle("show");
        
    }
    function buttonShow3(){
        document.querySelector("#supportMyAccount").classList.toggle("show");
    }
    function buttonShow4(){
        document.querySelector("#supportClient").classList.toggle("show");
    }
    function buttonShow5(){
        document.querySelector("#supportCommunity").classList.toggle("show");
    }
    function buttonShow6(){
        document.querySelector("#supportGiftCards").classList.toggle("show");
    }



    return (
        
            <main class = "main">
                <div class = "name">
                    <h2>SUPPORT</h2>
                </div>
                
                <div class = "questions">
                    <form>
                    <div class = "supportBlock oneBlock">
                              <p>Games, Software</p>
                             <i onClick={(e) => {
                             buttonShow1("button")}} class=" button fa-thin fa-caret-down"></i>
                        <div class = "allItem">
                            <div class = "supportItem oneItem">
                                <p>game not working?</p>
                                <i onClick={(e) => {
                                buttonShowItem1("button")}} class=" buttonItem fa-thin fa-caret-down"></i>
                                
                            </div>
                            <textarea name="" id="supportGamesSoftwere1" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                                <button class = "hideButton">send</button>
                            <div class = "supportItem twoItem">
                                <p>haven't got a game?</p>
                                    <i onClick={(e) => {
                                buttonShow1("button")}} class=" buttonItem fa-thin fa-caret-down"></i>
                               
                            </div>
                             <textarea name="" id="supportGamesSoftwere2" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                                <button class = "hideButton">send</button>
                            <div class = "supportItem threeItem">
                                <p>sound not working?</p>
                                    <i onClick={(e) => {
                                buttonShow1("button")}} class=" buttonItem fa-thin fa-caret-down"></i>
                                
                            </div>
                            <textarea name="" id="supportGamesSoftwere3" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea> 
                                <button class = "hideButton">send</button>
                        </div>
                        
                    </div>

                    <div class = "supportBlock twoBlock">
                        <p>Purchases </p>
                        <i onClick={(e) => {
            buttonShow2("button")}} class=" button fa-thin fa-caret-down"></i>
                    </div> 
                     <textarea name="" id="supportPurchases" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea>
                     <button class = "hideButton">send</button>

                    <div class = "supportBlock threeBlock">
                        <p>My Account </p>
                        <i onClick={(e) => {
            buttonShow3("button")}} class=" button fa-thin fa-caret-down"></i>
                    </div>
                     <textarea name="" id="supportMyAccount" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea>

                    <div class = "supportBlock fourBlock">
                        <p>Client</p>
                        <i onClick={(e) => {
            buttonShow4("button")}} class=" button fa-thin fa-caret-down"></i>
                    </div>
                    <textarea name="" id="supportClient" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea>

                    <div class = "supportBlock fiveBlock">
                        <p>Community </p>
                        <i onClick={(e) => {
            buttonShow5("button")}} class=" button fa-thin fa-caret-down"></i>
                    </div>
                    <textarea name="" id="supportCommunity" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea>

                    <div class = "supportBlock sixBlock">
                        <p>Gift cards </p>
                        <i onClick={(e) => {
            buttonShow6("button")}} class=" button fa-thin fa-caret-down"></i>
                    </div>
                    <textarea name="" id="supportGiftCards" cols="40" rows="5" placeholder='describe what is not so and we will reply as soon as possible'></textarea>
                     </form>
                </div>
            </main>
       
        
    )
}

export default Support
