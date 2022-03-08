import React, { useState } from 'react'
import './Footer.css';

const Footer = () => {

  let [openedFAQ, setOpenedFAQ] = useState([]);
  let tempOpenedFAQ = []


  function transitionFAQFirst() {
    document.querySelector('.question').classList.add('display-first');
  };

  function closeForm(){
    document.querySelector('.question').classList.remove('display-first');
  }


  function openFAQ(faq){
      document.querySelector(`.${faq}`).classList.add('display-first');
  }
  function closeFAQ(faq){
    document.querySelector(`.${faq}`).classList.remove('display-first');
  }
  return (
    <footer>
    <div class="mainFooter">
      <div class="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>

        <p class='faqQuestions' onClick={(e) => {openFAQ("first")}}>I received my game(s) as a gift, will I gain access to
          all
          features?
        </p>
        <div class="display-none first">
          <div className='fullWidthQuestionBtn'>
            <div class="closeFormBtn" onClick={(e) => {closeFAQ("first")}}>&times;</div>
          </div>
          <p>After receiving the game, even as a gift you will still have access to all of its features, however it may take some time for the purchase to process</p>
        </div>

        <p class='faqQuestions' onClick={(e) => {openFAQ("second")}}>How will know that I added exactly $5.00 USD to my
          Wallet?
        </p>
        <div class="display-none second">
        <div className='fullWidthQuestionBtn'>
          <div class="closeFormBtn" onClick={(e) => {closeFAQ("second")}}>&times;</div></div>
          <p>Amount of money will be shown in your wallet when the process completes</p>
        </div>

        <p class='faqQuestions' onClick={(e) => {openFAQ("third")}}>I recently added Wallet funds but they have not appeared,
          what do
          I do?</p>
        <div class="display-none third">
        <div className='fullWidthQuestionBtn'>
          <div class="closeFormBtn" onClick={(e) => {closeFAQ("third")}}>&times;</div></div>
          <p>Fund adding process takes a while to work, if the problem persists, contact us</p>
        </div>

        <p class='faqQuestions' onClick={(e) => {openFAQ("fourth")}}>What kind of Steam Wallet and item listing restrictions
          apply?
        </p>
        <div class="display-none fourth">
        <div className='fullWidthQuestionBtn'>
          <div class="closeFormBtn" onClick={(e) => {closeFAQ("fourth")}}>&times;</div></div>
          <p>Steam wallet funds cannot be transfered trough the accounts, and gifting cannot be made to countries outside of Europe</p>
        </div>




        <button className='questionButton' onClick={(e) =>{
          transitionFAQFirst()
        }}>Ask us a question!</button>
        <div class='display-none question'>
        <div className='fullWidthQuestionBtn'>
          <div class='closeFormBtn' type='button' onClick={(e)=>{
            closeForm();
          }}>&times;</div></div>
          <form>
            <label for="username"></label>
            <input type="text" id="username" name="username" placeholder="Account username..."/>
            <label for="topic"></label>
            <input type="text" id="topic" name="topic" placeholder="Topic..."/>
            <label for="question"></label>
            <textarea id="question" cols="50" rows="5" placeholder='Leave your question here...'></textarea>
            <input type="submit" value="&rarr;"/>
          </form>
        </div>
      </div>

      <div class="logo-end">
        <div class="logo"><img src="./LOGO.png" alt="logo" /></div>
        <div class="endFooter">
          <p>
            © 2022 Internetinė žaidimų parduotuvė. All rights reserved. All
            trademarks are property of their respective owners in the LTU and
            other countries.
          </p>
          <p>
            VAT included in all prices where applicable. Privacy Policy |
            Legal | IŽP Subscriber Agreement | Refunds | Cookies
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer