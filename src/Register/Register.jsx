import React, { useState } from 'react'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

import './Register.css';
const Register = (props) => {
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
  const db = getDatabase(app);
  const auth = getAuth();




  let [username, setUsername] = useState("");
  let [surname, setSurname] = useState("");
  let [email, setEmail] = useState("");
  let [country, setCountry] = useState("");
  let [password, setPassword] = useState("");
  let [repeatPass, setRepeatPass] = useState("");
  let [errList, setErrlist] = useState([]);


  function changeData(e){
    if (e.target.id == "reg-username"){
      setUsername(e.target.value);
    }
    else if (e.target.id == "reg-surname"){
      setSurname(e.target.value);
    }
    else if (e.target.id == "reg-email"){
      setEmail(e.target.value);
    }
    else if (e.target.id == "reg-country"){
      setCountry(e.target.value);
    }
    else if (e.target.id == "reg-password"){
      setPassword(e.target.value);
    }
    else if (e.target.id == "repeat-password"){
      setRepeatPass(e.target.value);
    }
  }


  function submitRegistration(e){
    let tempErrs = []
    e.preventDefault();
    let regLegit = true;
    if(password !=repeatPass){
      regLegit = false;
      tempErrs.push("Passwords must match!")
      setErrlist(tempErrs)
    }
    if (regLegit){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User"
        }).then(() => {
          // Profile updated!
          props.setUser(user);
          props.setPage("main")
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        //props.setPage("main")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    }
  }
  return (
    <div class="registerPage">
      <form class="main-form" id="signUpForm" onSubmit={(e) => {submitRegistration(e)}}>
        <h3 class="form-h3">Create your personal account</h3>
        <p class="errs">
        {errList}
        </p>
        <label class="main-label">Username</label>
        <input class="main-input" type="text" id="reg-username" onChange={(e) => {changeData(e)}} required />
        <label class="main-label">Surname</label>
        <input class="main-input" type="text" id="reg-surname" onChange={(e) => {changeData(e)}} required />
        <label class="main-label">Email</label>
        <input class="main-input" type="email" id="reg-email" onChange={(e) => {changeData(e)}} required />
        <label class="main-select-label" htmlFor="country">Country of Residence</label>
        <select class="main-select" id="reg-country" name="countrylist" onChange={(e) => {changeData(e)}} form="countryform" required>
          <option value="----">----</option>
          <option value="----">----</option>
          <option value="----">----</option>
          <option value="----">----</option>
        </select>
        <label class="main-label">Password</label>
        <input class="main-input" type="password" id="reg-password" onChange={(e) => {changeData(e)}} required />
        <label class="main-label">Repeat Password</label>
        <input class="main-input" type="password" id="repeat-password" onChange={(e) => {changeData(e)}} required />
        <label class="label-bottom">
          <input type="checkbox" name="confirm" id="agreement"required />
          I am 13 years of age or older and agree to the terms of the
          <a class="bottom-links" href="#">Subscriber Agreement</a> and the
          <a class="bottom-links" href="#">Privacy Policy</a>.</label>

        <input type="submit" class="btn-form" id="signUpSubmit" value="Confirm" />
      </form>


    </div>
  )
}

export default Register