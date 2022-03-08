import React, { useEffect, useState } from 'react'
import './Header.css';
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";

const Header = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDA9Ez4i7vSWvq8uzvmmy8CMQ54x-EDRfs",
    databaseURL: "https://derrastore-default-rtdb.europe-west1.firebasedatabase.app/",
    authDomain: "derrastore.firebaseapp.com",
    projectId: "derrastore",
    storageBucket: "derrastore.appspot.com",
    messagingSenderId: "70390486239",
    appId: "1:70390486239:web:f0e884d634f8114597856a"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  function paging(page){
    props.setPage(page)
  }


  function search(e){
    props.setPage("search")
    props.setSearch(e.target.value)
    console.log(e.target.value)
  }
  function logout(){
    console.log(props.user)
    signOut(auth).then(() => {
      props.setUser("")
    }).catch((error) => {
      // An error happened.
    });
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
      <input type="text" onChange={(e)=>{search(e)}} placeholder='Search'/>
      <ul>
        {props.user.displayName == undefined ? 
        <div className='navBtns'>
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
        </div>
        : <h3>{props.user.displayName} <a href="#" onClick={(e) => {logout()}}><li>Logout</li></a></h3>}
      </ul>
    </nav>
  </header>
  )
}

export default Header