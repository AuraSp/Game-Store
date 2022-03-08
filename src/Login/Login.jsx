import React, { useState } from 'react'
import './Login.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";


const Login = (props) => {
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

  let [email, setEmail] = useState("");
  let [password ,setPass] = useState("");



  function changeLoginValue(e, type){
    if(type=="email"){
      setEmail(e.target.value)
    }else{
      setPass(e.target.value)
    }
  }


  function submitForm(){
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        props.setUser(user);
        props.setPage("main")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  function closePage(){
    props.setPage("main")
  }
  return (
    <div className="loginBlock"> {/*loginPage*/}
      <div className="loginForm"> {/*item-1*/}
      <button className='signIn-closeBtn' onClick={(e)=>{closePage()}}>X</button>
        <form onSubmit={(e) => {submitForm()}}>
          <h2>SIGN IN</h2>
          <input className="loginEmail-Input" onChange={(e)=>{changeLoginValue(e, "email")}} type="email" id="log-email" placeholder='Account email' required/>
          <input className="loginPassword-Input" onChange={(e)=>{changeLoginValue(e, "password")}} type="password" id="log-password" placeholder='Password' required/>
          <button className='signIn-Btn' id="signInSubmit">Sign in</button>
          <a className="passwordLink" href="#">Forgot your password?</a>
        </form>
      </div>
      <div className="loginAd"> {/*item-2*/}
        <p className="loginAd-headerText">Join and discover thousands of games to play.</p>
        <a className="loginAd-mainLink" href="#">Learn More</a>
        <img src="./img/Gaming Illustration in PNG, SVG.png" alt="img" />
        <p className="loginAd-footerText">It's free and easy to use.</p>
        {/* <div class="logUtilities">
        <button id="logout">LOG OUT</button>
        <button id="checkUser">CURRENT USER</button>
        </div> ??????????*/}
      </div>
    </div>
  )
}

export default Login