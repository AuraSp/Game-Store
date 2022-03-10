import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {

  // let [openedFAQ, setOpenedFAQ] = useState([]);
  // let tempOpenedFAQ = [];
function openBasicTopic() {
  document.querySelector('.basic').style.display='flex';
}

function closeBasicTopic() {
  document.querySelector('.basic').style.display='none';
}

function openAccountTopic() {
  document.querySelector('.account').style.display='flex';
}

function closeAccountTopic() {
  document.querySelector('.account').style.display='none';
}

function openPaymentTopic() {
  document.querySelector('.payment').style.display='flex';
}

function closePaymentTopic() {
  document.querySelector('.payment').style.display='none';
}


  function faqSection() {
    document.querySelector('.question').classList.add('display-first');
  };

  function closeForm() {
    document.querySelector('.question').classList.remove('display-first');
  }


  function openFAQ(faq) {
    document.querySelector(`.${faq}`).classList.add('display-first');
  }
  function closeFAQ(faq) {
    document.querySelector(`.${faq}`).classList.remove('display-first');
  }
  return (
    <footer>
        <h2>FAQ! NEED HELP?</h2>
        <h4>We've got you covered</h4>
        <p>See our most frequently asked questions below</p>
        <a href='#h' style={{color: '#fff'}}>&#10576;</a>

        {/* <!-- TOPICS SECTION --> */}
        <div className='topicSection'>
            <div className='basicBox'>
                <button onClick={openBasicTopic} className='topicBtn'>BASIC</button>
                <div className='basic'>
                  <button onClick={closeBasicTopic}>&times;</button>
                    <h3>Please state your question below. We will get back to you at the earliest!</h3>
                    <label for='message'>
                        Questions:</label>
                    <textarea className='questionArea' type='textare' cols='50' rows='7' placeholder='basic'></textarea>
                    <div>
                        <input type="text" placeholder='Your email' required />
                        <button className='questionArea-submitBtn'>Send</button>
                    </div>
                </div>
            </div>

            <div className='accountBox'>
                <button onClick={openAccountTopic} className='topicBtn'>ACCOUNT</button>
                <div className='account'>
                <button onClick={closeAccountTopic}>&times;</button>
                    <h3>Please state your question below. We will get back to you at the earliest!</h3>
                    <label for='message'>
                        Questions:</label>
                    <textarea className='questionArea' type='textare' cols='50' rows='7' placeholder='acc'></textarea>
                    <div>
                        <input type="text" placeholder='Your email' required />
                        <button className='questionArea-submitBtn'>Send</button>
                    </div>
                </div>
            </div>

            <div className='paymentBox'>
                <button onClick={openPaymentTopic} className='topicBtn'>PAYMENT</button>
                <div className='payment'>
                <button onClick={closePaymentTopic}>&times;</button>
                    <h3>Please state your question below. We will get back to you at the earliest!</h3>
                    <label for='message'>
                        Questions:</label>
                    <textarea className='questionArea' type='textare' cols='50' rows='7' placeholder='pa'></textarea>
                    <div>
                        <input type="text" placeholder='Your email' required />
                        <button className='questionArea-submitBtn'>Send</button>
                    </div>
                </div>
            </div>
        </div>


        {/* <!-- FAQ SECTION --> */}
        <div id='h'>
            <h5>Basic</h5>
            <p class='faqQuestions' onClick={(e)=> { openFAQ("first") }}>I received my game(s) as a gift, will I gain
                access to
                all
                features?
            </p>
            <div class="display-none first">
                <div className='fullWidthQuestionBtn'>
                    <div class="closeFormBtn" onClick={(e)=> { closeFAQ("first") }}>&times;</div>
                </div>
                <p>After receiving the game, even as a gift you will still have access to all of its features, however
                    it may take some time for the purchase to process</p>
            </div>

            <h5>Account</h5>
            <p class='faqQuestions' onClick={(e)=> { openFAQ("fourth") }}>What kind of Steam Wallet and item listing
                restrictions
                apply?
            </p>
            <div class="display-none fourth">
                <div className='fullWidthQuestionBtn'>
                    <div class="closeFormBtn" onClick={(e)=> { closeFAQ("fourth") }}>&times;</div>
                </div>
                <p>Steam wallet funds cannot be transfered trough the accounts, and gifting cannot be made to countries
                    outside of Europe</p>
            </div>

            <h5>Payment</h5>
            <p class='faqQuestions' onClick={(e)=> { openFAQ("second") }}>How will know that I added exactly $5.00 USD
                to my
                Wallet?
            </p>
            <div class="display-none second">
                <div className='fullWidthQuestionBtn'>
                    <div class="closeFormBtn" onClick={(e)=> { closeFAQ("second") }}>&times;</div>
                </div>
                <p>Amount of money will be shown in your wallet when the process completes</p>
            </div>

            <p class='faqQuestions' onClick={(e)=> { openFAQ("third") }}>I recently added Wallet funds but they have not
                appeared,
                what do
                I do?</p>
            <div class="display-none third">
                <div className='fullWidthQuestionBtn'>
                    <div class="closeFormBtn" onClick={(e)=> { closeFAQ("third") }}>&times;</div>
                </div>
                <p>Fund adding process takes a while to work, if the problem persists, contact us</p>
            </div>

        </div>


        {/* <!-- END SECTION --> */}
        <div className="logo-end">
            <div className="logo">
                <img src="./LOGO.png" alt="logo" />
            </div>
            <div className="endFooter">
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


      {/* <div class="FAQ">
          <h1>Frequently Asked Questions (FAQ)</h1>

          <p class='faqQuestions' onClick={(e) => { openFAQ("first") }}>I received my game(s) as a gift, will I gain access to
            all
            features?
          </p>
          <div class="display-none first">
            <div className='fullWidthQuestionBtn'>
              <div class="closeFormBtn" onClick={(e) => { closeFAQ("first") }}>&times;</div>
            </div>
            <p>After receiving the game, even as a gift you will still have access to all of its features, however it may take some time for the purchase to process</p>
          </div>

          <p class='faqQuestions' onClick={(e) => { openFAQ("second") }}>How will know that I added exactly $5.00 USD to my
            Wallet?
          </p>
          <div class="display-none second">
            <div className='fullWidthQuestionBtn'>
              <div class="closeFormBtn" onClick={(e) => { closeFAQ("second") }}>&times;</div></div>
            <p>Amount of money will be shown in your wallet when the process completes</p>
          </div>

          <p class='faqQuestions' onClick={(e) => { openFAQ("third") }}>I recently added Wallet funds but they have not appeared,
            what do
            I do?</p>
          <div class="display-none third">
            <div className='fullWidthQuestionBtn'>
              <div class="closeFormBtn" onClick={(e) => { closeFAQ("third") }}>&times;</div></div>
            <p>Fund adding process takes a while to work, if the problem persists, contact us</p>
          </div>

          <p class='faqQuestions' onClick={(e) => { openFAQ("fourth") }}>What kind of Steam Wallet and item listing restrictions
            apply?
          </p>
          <div class="display-none fourth">
            <div className='fullWidthQuestionBtn'>
              <div class="closeFormBtn" onClick={(e) => { closeFAQ("fourth") }}>&times;</div></div>
            <p>Steam wallet funds cannot be transfered trough the accounts, and gifting cannot be made to countries outside of Europe</p>
          </div> */}


{/* 
      <div className='faqSection'>
        <button className='questionButton' onClick={(e) => {
          faqSection()
        }}>Ask us a question!</button>

        <div className='display-none question'>
          <div className='closeFormBtn' type='button' onClick={(e) => {
            closeForm();
          }}>&times;
          </div> */}


          {/* PIRMAS BLOKAS */}
          {/* <button className='fTo'>TOPIC</button>
          <div className='basics form'>
            <h3>Please state your question below. We will get back to you at the earliest!</h3>
            <label for='message'>
              Questions:</label>
              <textarea className='questionArea' type='textare' cols='50' rows='7'></textarea>
              <div>
              <input type="text" placeholder='Your email' required/>
              <button className='questionArea-submitBtn'>Send</button>
              </div>
          </div> */}

          {/* ANTRAS BLOKAS */}
          {/* <button className='sTo'>FIX
          </button>
          <div className='basics form'>
            <h3>Please state your question below. We will get back to you at the earliest!</h3>
            <label for='message'>
              Questions:</label>
              <textarea className='questionArea' type='textare' cols='50' rows='7'></textarea>
              <div>
              <input type="text" placeholder='Your email' required/>
              <button className='questionArea-submitBtn'>Send</button>
              </div>
          </div> */}

          {/* TRECIAS BLOKAS */}
          {/* <button className='tTo'>OTHER
          </button>
          <div className='basics form'>
            <h3>Please state your question below. We will get back to you at the earliest!</h3>
            <label for='message'>
              Questions:</label>
              <textarea className='questionArea' type='textare' cols='50' rows='7'></textarea>
              <div>
              <input type="text" placeholder='Your email' required/>
              <button className='questionArea-submitBtn'>Send</button>
              </div>
          </div>
        </div>
      </div> */}

      {/* <div className="logo-end">
        <div className="logo"><img src="./LOGO.png" alt="logo" /></div>
        <div className="endFooter">
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
      </div> */}
    </footer>
  )
}

export default Footer