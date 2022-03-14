import React, { useState } from 'react';
// import { FaWeixin } from "react-icons/fa";
// import { IoWallet } from "react-icons/io5";
// import { RiAccountCircleFill } from "react-icons/ri";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
import Basic from '../Data/BasicTopic';
import Account from '../Data/AccountTopic';
import Payment from '../Data/PaymentTopic';

const Footer = (props) => {
  var database = props.db;

  console.log()

  const [basic, showBasic] = useState(false);
  const [account, showAccount] = useState(false);
  const [payment, showPayment] = useState(false);

  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');

  function closeBasic() {
    showBasic(!basic)
  }

  function closeAccount() {
    showAccount(!account)
  }

  function closePayment() {
    showPayment(!payment)
  }


  return (
    <footer>
      <h2>FAQ! NEED HELP?</h2>
      <h4>We've got you covered</h4>
      <p>See our most frequently asked questions below</p>
      <a href='#q2'>&#10576;Go link</a>
      <div className='d-flex flex-column mb-5'>
        <div>
          <button onClick={() => showBasic(true)}>BASIC</button>
          <form onSubmit={(e) => handleInput(e)} className={basic ? 'd-block' : 'd-none'}>
            <button onClick={() => closeBasic(true)}>&times;</button>
            <h5>Please state your question below. We will get back to you at the earliest!</h5>
            <label htmlFor='message'>
              Question:</label>
            <textarea onChange={e => setQuestion(e.target.value)} id='question' type='textare' cols='45' rows='5' placeholder='basic' ></textarea>
            <div>
              <input onChange={e => setEmail(e.target.value)} id='email' type="text" placeholder='Your email' />
              <button disabled={question.length < 1 || email.length < 1}>Send</button>
            </div>
          </form>
        </div>

        <div>
          <button onClick={() => showAccount(true)}>ACCOUNT</button>
          <form onSubmit={(e) => handleInput(e)} className={account ? 'd-block' : 'd-none'}>
            <button onClick={() => closeAccount(true)}>&times;</button>
            <h5>Please state your question below. We will get back to you at the earliest!</h5>
            <label htmlFor='message'>
              Question:</label>
            <textarea onChange={e => setQuestion(e.target.value)} type='textare' cols='45' rows='5' placeholder='basic'></textarea>
            <div>
              <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Your email' />
              <button disabled={question.length < 1 || email.length < 1} >Send</button>
            </div>
          </form>
        </div>

        <div>
          <button onClick={() => showPayment(true)}>PAYMENT</button>
          <form onSubmit={(e) => handleInput(e)} className={payment ? 'd-block' : 'd-none'}>
            <button onClick={() => closePayment(true)}>&times;</button>
            <h5>Please state your question below. We will get back to you at the earliest!</h5>
            <label htmlFor='message'>
              Question:</label>
            <textarea onChange={e => setQuestion(e.target.value)} type='textare' cols='45' rows='5' placeholder='basic' ></textarea>
            <div>
              <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Your email' />
              <button disabled={question.length < 1 || email.length < 1}>Send</button>
            </div>
          </form>
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

  function handleInput() {
  }


  //   const app = initializeApp(firebaseConfig)
  //   var messagesRef = firebase.database().ref('USERS ASKED QUESTIONS');
  // function validation() {
  //     event.preventDefault();

  //     var newMessageRef = messagesRef.push();
  //     newMessageRef.set(
  //         {
  //             name: document.getElementById('name').value,
  //             message: document.getElementById('question').value

  //         });

  // }

  //   var messagesRef = app.getDatabase().ref('USERS ASKED QUESTIONS');
  //   function handleInput() {

  //     set(ref(messagesRef, 'USERS ASKED QUESTIONS/'), {
  //       name: document.getElementById('name').value,
  //       question: document.getElementById('question').value
  //     });
  //   }


    // const handleInput = (e) => {
  //   e.preventDefault()
  //   document.getElementsByName('input').value = "";
  //   app.database().ref("user").set({
  //     name: email
  //   }).catch(alert);
  // }