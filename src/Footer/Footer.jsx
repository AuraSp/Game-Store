import React, { useEffect, useState } from 'react';
import { FaWeixin } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
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
  const [success, setSucc] = useState('');
  const [copied, setCopy] = useState('');

  console.log(email, question)

  useEffect(() => {
    setTimeout(() => { setSucc("") }, 5000);
    setTimeout(() => { setCopy("") }, 5500);
  }, [success, copied])

  function nullQuestions() {
    document.getElementById('email_basic').value = '';
    document.getElementById('question_basic').value = '';
    document.getElementById('email_account').value = '';
    document.getElementById('question_account').value = '';
    document.getElementById('email_payment').value = '';
    document.getElementById('question_payment').value = '';
  }

  function questionInput(e, qType) {
    e.preventDefault()
    if (qType === "basic") {
      showBasic(!basic)
      if (question.length && email.length < 1) {
        
      }
      const refs = ref(database, 'Basic Questions/');
      const newPostRef = push(refs);
      set((newPostRef), {
        User_email: email,
        User_question: question,
      });
      nullQuestions();
      setSucc("question sent successfully!")
    }
    else if (qType === "account") {
      showAccount(!account)
      const refs = ref(database, 'Account Questions/');
      const newPostRef = push(refs);
      set((newPostRef), {
        User_email: email,
        User_question: question,
      });
      nullQuestions();
      setSucc("question sent successfully!")
    }
    else {
      showPayment(!payment)
      const refs = ref(database, 'Payment Questions/');
      const newPostRef = push(refs);
      set((newPostRef), {
        User_email: email,
        User_question: question,
      });
      nullQuestions();
      setSucc("question sent successfully!")
    }
  }

  function closeForm(form) {
    if (form === "basic") {
      showBasic(!basic)
    } else if (form === "account") {
      showAccount(!account)
    } else {
      showPayment(!payment)
    }
  }

  function openForm(form) {
    nullQuestions();
    setEmail("");
    setQuestion("");
    showBasic(false);
    showAccount(false);
    showPayment(false);

    if (form === "basic") {
      showBasic(true)
    } else if (form === "account") {
      showAccount(true)
    } else {
      showPayment(true)
    }
  }

  const url = window.location.href

  const copy = async () => {
    setCopy('Copied !')
    await navigator.clipboard.writeText(url);
  }

  return (
    <footer className='text-light'>
      <div>{success}</div>
      <h2>FAQ! NEED HELP?</h2>
      <h4>We've got you covered</h4>
      <div>{copied}</div>
      <a href='#q2'>&#10576;Go link</a>
      <button onClick={copy}>Share</button>
      <input value={url}></input>
      <div className='m-3'>
        <button onClick={() => openForm("basic")}><FaWeixin/>BASIC</button>
        <div className={basic ? 'd-block' : 'd-none'}>
          <form onSubmit={(e) => questionInput(e, "basic")}>
            <button type="button" onClick={(e) => { closeForm("basic") }}>&times;</button>
            <h5>Please state your question below. We will get back to you at the earliest!</h5>
            <label htmlFor='message'>
              Question:</label>
            <textarea onChange={e => setQuestion(e.target.value)} id='question_basic' type='textarea' cols='45' rows='5' placeholder='Tell us whats wrong!..'></textarea>
            <div>
              <input onChange={e => setEmail(e.target.value)} id='email_basic' type="text" placeholder='Your login email' required />
              <button disabled={question.length < 1 || email.length < 1}>Send</button>
            </div>
          </form>
        </div>
        <div>
          <button onClick={() => openForm("account")}><IoWallet/>ACCOUNT</button>
          <div className={account ? 'd-block' : 'd-none'}>
            <button onClick={() => { closeForm("account") }}>&times;</button>
            <form onSubmit={(e) => questionInput(e, "account")}>
              <h5>Please state your question below. We will get back to you at the earliest!</h5>
              <label htmlFor='message'>
                Question:</label>
              <textarea onChange={e => setQuestion(e.target.value)} id='question_account' type='textarea' cols='45' rows='5' placeholder='Tell us whats wrong!..'></textarea>
              <div>
                <input onChange={e => setEmail(e.target.value)} id='email_account' type="text" placeholder='Your login email' required />
                <button disabled={question.length < 1 || email.length < 1}>Send</button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <button onClick={() => openForm("payment")}><RiAccountCircleFill/>PAYMENT</button>
          <div className={payment ? 'd-block' : 'd-none'}>
            <button onClick={() => closeForm("payment")}>&times;</button>
            <form onSubmit={(e) => questionInput(e, "payment")}>
              <h5>Please state your question below. We will get back to you at the earliest!</h5>
              <label htmlFor='message'>
                Question:</label>
              <textarea onChange={e => setQuestion(e.target.value)} id='question_payment' type='textarea' cols='45' rows='5' placeholder='Tell us whats wrong!..'></textarea>
              <div>
                <input onChange={e => setEmail(e.target.value)} id='email_payment' type="text" placeholder='Your login email' required />
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