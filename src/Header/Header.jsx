import React, { useEffect, useState } from 'react'

const Header = (props) => {

  function paging(page){
    props.setPage(page)
  }
  return (
    <header class="d-flex">
    <nav class="left-nav">
      <div class="store-logo">
        <a href="#" onClick={(e) => {paging("main")}} id="homeTag"><img src="./LOGO.png" alt="Store logo" /></a>
      </div>
      <ul>
        <li><a href="#" onClick={(e) => {paging("main")}}>Store</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </nav>
    <nav class="right-nav">
      {props.user.displayName == undefined ? 
      <ul>
        <div class="regBtns">
          <a href="#" onClick={(e) => {
            paging("login")
          }} id="loginTag">
            <li>Login</li>
          </a>
          <a href="#" onClick={(e) => {
            paging("register")
          }} id="registerTag">
            <li>Sign up</li>
          </a>
        </div>
        <a href="#">
          <li>
            Lietuvių | LT
            <ul class="language-menu">
              <a href="#">
                <li>Anglų | ENG</li>
              </a>
              <a href="#">
                <li>Lietuvių | LT</li>
              </a>
            </ul>
          </li>
        </a>
      </ul>: <h3>{props.user.displayName} <button>Logout</button></h3>}
    </nav>
  </header>
  )
}

export default Header