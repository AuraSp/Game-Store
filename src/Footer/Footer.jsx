import React, { useState } from 'react';
// import { FaWeixin } from "react-icons/fa";
// import { IoWallet } from "react-icons/io5";
// import { RiAccountCircleFill } from "react-icons/ri";
import { ref, set, push } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
import Basic from '../Data/BasicTopic';
import Account from '../Data/AccountTopic';
import Payment from '../Data/PaymentTopic';

const Footer = (props) => {
  var database = props.db;

  const [basic, showBasic] = useState(false);
  const [account, showAccount] = useState(false);
  const [payment, showPayment] = useState(false);

  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');

  function basicInput(e) {
    e.preventDefault()
    showBasic(!basic)
    const refs = ref(database, 'Basic Questions/');
    const newPostRef = push(refs);
    set((newPostRef), {
      User_email: document.getElementById('email_basic').value,
      User_question: document.getElementById('question_basic').value,
    });
    document.getElementById('email_basic').value = '';
    document.getElementById('question_basic').value = '';
  }
  function accountInput(e) {
    e.preventDefault()
    showAccount(!account)
    const refs = ref(database, 'Account Questions/');
    const newPostRef = push(refs);
    set((newPostRef), {
      User_email: document.getElementById('email_account').value,
      User_question: document.getElementById('question_account').value,
    });
    document.getElementById('email_basic').value = '';
    document.getElementById('question_basic').value = '';
  }
  function paymentInput(e) {
    e.preventDefault()
    showPayment(!payment)
    const refs = ref(database, 'Payment Questions/');
    const newPostRef = push(refs);
    set((newPostRef), {
      User_email: document.getElementById('email_payment').value,
      User_question: document.getElementById('question_payment').value,
    });
    document.getElementById('email_basic').value = '';
    document.getElementById('question_basic').value = '';
  }

  function closeBasic() {
    showBasic(!basic)
  }

  function closeAccount() {
    showAccount(!account)
  }

  function closePayment() {
    showPayment(!payment)
  }

  const url = window.location.href

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    alert('URL: ' + url);
  }

  return (
    <footer className='text-light'>
      <h2>FAQ! NEED HELP?</h2>
      <h4>We've got you covered</h4>
      <p>See our most frequently asked questions below</p>
      <a href='#q2'>&#10576;Go link</a>
      <button onClick={copy}>Share</button>
      <input value={url}></input>
      <div className='m-3'>
        <button onClick={() => showBasic(true)}>BASIC</button>
        <div className={basic ? 'd-block' : 'd-none'}>
        <button onClick={(e) => closeBasic(e)}>&times;</button>
          <form onSubmit={(e) => basicInput(e)}>
            <h5>Please state your question below. We will get back to you at the earliest!</h5>
            <label htmlFor='message'>
              Question:</label>
            <textarea onChange={e => setQuestion(e.target.value)} id='question_basic' type='textarea' cols='45' rows='5' placeholder='Tell us whats wrong!..'></textarea>
            <div>
              <input onChange={e => setEmail(e.target.value)} id='email_basic' type="text" placeholder='Your login email' required/>
              <button disabled={question.length < 1 || email.length < 1}>Send</button>
            </div>
          </form>
        </div>

        <div>
          <button onClick={() => showAccount(true)}>ACCOUNT</button>
          <div className={account ? 'd-block' : 'd-none'}>
          <button onClick={() => closeAccount(true)}>&times;</button>
            <form onSubmit={(e) => accountInput(e)}>
              <h5>Please state your question below. We will get back to you at the earliest!</h5>
              <label htmlFor='message'>
                Question:</label>
              <textarea onChange={e => setQuestion(e.target.value)} id='question_account' type='textarea' cols='45' rows='5' placeholder='Tell us whats wrong!..'></textarea>
              <div>
                <input onChange={e => setEmail(e.target.value)} id='email_account' type="text" placeholder='Your login email' required/>
                <button disabled={question.length < 1 || email.length < 1}>Send</button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <button onClick={() => showPayment(true)}>PAYMENT</button>
          <div className={payment ? 'd-block' : 'd-none'}>
          <button onClick={() => closePayment(true)}>&times;</button>
            <form onSubmit={(e) => paymentInput(e)}>
              <h5>Please state your question below. We will get back to you at the earliest!</h5>
              <label htmlFor='message'>
                Question:</label>
              <textarea onChange={e => setQuestion(e.target.value)} id='question_payment' type='textarea' cols='45' rows='5' placeholder='Tell us whats wrong!..'></textarea>
              <div>
                <input onChange={e => setEmail(e.target.value)} id='email_payment' type="text" placeholder='Your login email' required/>
                <button disabled={question.length < 1 || email.length < 1}>Send</button>
              </div>
            </form>
          </div>
        </div>

      </div>

      <Basic />
      <Account />
      <Payment />

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
    </footer>
  )
}

export default Footer