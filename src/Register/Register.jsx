import React, { useState } from "react"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

import "./Register.css";
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


  function changeData(e) {
    if (e.target.id == "reg-username") {
      setUsername(e.target.value);
    }
    else if (e.target.id == "reg-surname") {
      setSurname(e.target.value);
    }
    else if (e.target.id == "reg-email") {
      setEmail(e.target.value);
    }
    else if (e.target.id == "reg-country") {
      setCountry(e.target.value);
    }
    else if (e.target.id == "reg-password") {
      setPassword(e.target.value);
    }
    else if (e.target.id == "repeat-password") {
      setRepeatPass(e.target.value);
    }
  }


  function submitRegistration(e) {
    let tempErrs = []
    e.preventDefault();
    let regLegit = true;
    if (password != repeatPass) {
      regLegit = false;
      tempErrs.push("Passwords must match!")
      setErrlist(tempErrs)
    }
    if (regLegit) {
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

  function closePage(){
    props.setPage("main")
  }
  return (
    <form className="registerForm" id="signUpForm" onSubmit={(e) => { submitRegistration(e) }}>
      <button className='signUp-closeBtn' onClick={(e)=>{closePage()}}>X</button>
      <h2>CREATE YOUR PERSONAL ACCOUNT</h2>
      <p className='postTitle'>Join our community and enjoy a whole variety of games</p>
      <p class="errs">
        {errList}
      </p>
      <div>
      <input type="text" id="reg-Name" placeholder="Username" onChange={(e) => { changeData(e) }} required />
      <input type="text" id="reg-surname" placeholder="Surname" onChange={(e) => { changeData(e) }} required />
      </div>
      <input type="email" id="reg-email" placeholder="Email" onChange={(e) => { changeData(e) }} required />
      {/* <label class="regCountry-select" htmlFor="country">Country of Residence</label> */}
      <select className="signUp-countrySelect" id="reg-country" form="countryform" name="countrylist" onChange={(e) => { changeData(e) }} required>
        <option>Choose your country</option>
        <option value="----">----</option>
        <option value="----">----</option>
        <option value="----">----</option>
        <option value="----">----</option>
      </select>
      <div>
      <input type="password" id="reg-password" placeholder="Password" onChange={(e) => { changeData(e) }} required />
      <input type="password" id="repeat-password" placeholder="Repeat password" onChange={(e) => { changeData(e) }} required />
      </div>
      <label className="signUp-checkLabel">
        <input type="checkbox" name="confirm" id="agreement" required />
        I am 13 years of age or older and agree to the terms of the&nbsp;
        <a className="signUp-legacy" href="#">Subscriber Agreement</a> and the&nbsp;<a className="signUp-legacy" href="#">Privacy Policy</a>.</label>

      <button className="signUp-submitBtn" id="signUpSubmit">Sign up</button>
    </form>
  )
}

export default Register