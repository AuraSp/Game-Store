import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div class="loginPage">
      <div class="main-cotainer">
        <div class="item-1">
          <form class="main-form">
            <h3 class="form-h3">SIGN IN</h3>
            <label class="main-label">Account email</label>
            <input class="main-input" type="email" id="log-email" />
            <label class="main-label">Password</label>
            <input class="main-input" type="password" id="log-password" />
            <a href="#" class="btn-form" id="signInSubmit" type="button">Sign In</a>
            <a class="item-1-link" href="#">Forgot your password?</a>
          </form>
        </div>
        <div class="item-2">
          <p class="item-2-text">Join and discover thousands of games to play.</p>
          <a class="item-2-link" href="#">Learn More </a>
          <img class="item-2-img" src="./img/Gaming Illustration in PNG, SVG.png" alt="img" />
          <p class="item-2-text-2">It's free and easy to use.</p>

          <a href="#" class="btn-sign-up" type="button">Confirm</a>
          <button id="logout">LOG OUT</button>
          <button id="checkUser">CURRENT USER</button>
        </div>
      </div>
    </div>
  )
}

export default Login