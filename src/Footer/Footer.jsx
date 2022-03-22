import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import './Footer.css';

const Footer = (props) => {

  const [copied, setCopy] = useState('');

  useEffect(() => {
    setTimeout(() => { setCopy("") }, 2500);
  }, [copied])



  const url = window.location.href

  const copy = async () => {
    setCopy('Copied !')
    await navigator.clipboard.writeText(url);
  }

  function paging(page) {
    props.setPage(page);
  }

  return (
    <footer className='text-light'>
      <div className="logo-end">
        <div className='shareSection'>
          <div className="logo">
            <img src="./LOGO.png" alt="logo" />
          </div>
          <div className='shareBlock'>
          <div className='quicklinks'>
          <h4>Quick Links</h4>
          <div className='displayflexlinks'>
          <a
          href={() => false}
          onClick={(e) => {
            paging("main");
          }}
          >Home</a>
          <a 
          href={() => false}
          onClick={(e) => {
            paging("community");
          }}>Community</a>
          <a 
          href={() => false}
          onClick={(e) => {
            paging("support");
          }}>Support</a>
          </div>
              </div>
            <div className='follow'>
              <h4>Follow Us</h4>
              <div className='displayflex'>
                <p><FaLinkedin /></p>
                <p><FaTwitter /></p>
                <p><FaDiscord /></p>
              </div>
            </div>
            <div className='share'>
              <h4>Share Us</h4>
              <div className='displayflexshare'>
                <button onClick={copy}>Share</button>
                <input value={url} readOnly></input>
                <div className='copied'>{copied}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="endFooter">
          <p>
            © 2022 Internetinė žaidimų parduotuvė. All rights reserved. All
            trademarks are property of their respective owners in the LTU and
            other countries
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